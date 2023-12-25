import React, {createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef} from "react";

const BasketContext = createContext({
  basket: {},
  isOpen: false,
  toggleCart: () => null,
  addItem: () => null,
  removeItem: () => null,
  updateItem: () => null,
  clearItem: () => null,
  clearBasket: () => null
});

const basketReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case "ADD_ITEM":
      return {
        ...state,
        products: {
          ...state.products,
          [action.id]: (state.products[action.id] ?? 0) + (action.quantity ?? 1)
        }
      };
    case "REMOVE_ITEM":
      const newState = {
        ...state,
        products: { ...state.products }
      };
      
      delete newState.products[action.id];
      
      return newState;
    case "UPDATE_ITEM":
      return {
        ...state,
        products: {
          ...state.products,
          [action.id]: action.quantity,
        },
      };
    case "CLEAR_ITEM":
      const copy = {...state.products};
      delete copy[action.id];
      return {...state, products: copy};
    case "CLEAR_BASKET":
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

function BasketProvider({children, storeKey = "cart"}) {
  const localData = useRef(localStorage.getItem(storeKey));
  const [basket, dispatch] = useReducer(
    basketReducer,
    localData.current ? JSON.parse(localData.current) : {products: {}, isOpen: false}
  );
  
  const toggleCart = useCallback(() => {
    dispatch({type: "TOGGLE_CART"});
  }, [dispatch]);
  
  const addItem = useCallback((params) => {
    dispatch({type: "ADD_ITEM", ...params});
  }, [dispatch]);
  
  const removeItem = useCallback((params) => {
    dispatch({type: "REMOVE_ITEM", ...params});
  }, [dispatch]);
  
  const updateItem = useCallback((params) => {
    dispatch({type: "UPDATE_ITEM", ...params});
  }, [dispatch]);
  
  const clearItem = useCallback((params) => {
    dispatch({type: "CLEAR_ITEM", ...params});
  }, [dispatch]);
  
  const clearBasket = useCallback(() => {
    dispatch({type: "CLEAR_BASKET"});
  }, [dispatch]);
  
  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(basket));
  }, [basket, storeKey]);
  
  return (
    <BasketContext.Provider
      value={{basket, toggleCart, addItem, removeItem, updateItem, clearItem, clearBasket}}
    >
      {children}
    </BasketContext.Provider>
  );
}

function useBasket() {
  return useContext(BasketContext);
}

function useBasketProducts(products) {
  const {basket} = useBasket();
  
  const {products: basketProducts, isOpen} = basket;
  
  const items = useMemo(() => {
    return Object.keys(basketProducts).map((productId) => {
      const product = products.find((p) => p.id === productId);
      const quantity = basketProducts[productId];
      return {
        product,
        quantity,
        totalPrice: product.price * quantity,
      };
    });
  }, [products, basketProducts]);
  
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);
  
  return {items, totalQuantity, totalPrice, isOpen};
}

export {BasketProvider, useBasket, useBasketProducts};
