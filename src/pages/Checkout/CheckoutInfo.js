// import * as React from "react";
// import {useState} from "react";
// import {useFormik} from "formik";
// import * as Yup from "yup";
// import {Option, Select} from "@material-tailwind/react";
//
// const stateOptions = [
//   'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
//   'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
//   'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
//   'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
//   'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
//   'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
//   'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
// ];
//
// export default function CheckoutInfo({onSubmit}) {
//
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [zip, setZip] = useState("");
//   const [address, setAddress] = useState("");
//   const [apartment, setApartment] = useState("");
//   const [phone, setPhone] = useState("");
//
//   const clearForm = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setCity("");
//     setState("");
//     setZip("");
//     setAddress("");
//     setApartment("");
//     setPhone("");
//     formik.resetForm();
//   };
//
//   const handleSubmit = (e) => {
//     console.log(e);
//     clearForm();
//     onSubmit({
//       firstName,
//       lastName,
//       email,
//       city,
//       state,
//       zip,
//       address,
//       apartment,
//       phone
//     });
//   };
//
//   const formik = useFormik({
//     initialValues: {
//       firstName,
//       lastName,
//       email,
//       city,
//       state,
//       zip,
//       address,
//       apartment,
//       phone
//     },
//     onSubmit: (values, actions,) => {
//       console.log('Form submitted:', values);
//       actions.resetForm();
//     },
//
//     validationSchema: Yup.object({
//       firstName: Yup.string().required('First Name is required'),
//       lastName: Yup.string().required('Last Name is required'),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//       city: Yup.string().required('City is required'),
//       state: Yup.string().required('State is required'),
//       zip: Yup.string().required('ZIP Code is required'),
//       address: Yup.string().required('Address is required'),
//       apartment: Yup.string(),
//       phone: Yup.string().required('Phone is required'),
//     }),
//   });
//
//
//   return (
//     <div className="p-4 flex items-center gap-5 max-md:flex-wrap">
//       <div className="flex flex-col max-md:max-w-full">
//
//         <div className="flex items-center gap-3">
//           <div className="justify-center text-xs font-medium">
//             Cart
//           </div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d77eb2526d8110183071e604b2e1b311cbdf67dd482917529da5f561683e578?apiKey=35ce5b5200f34f76bee050e163f8a7d7&"
//           />
//           <div className="justify-center text-xs font-bold">
//             Information
//           </div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/79a183d95faa3357a297af39045aafad7e8f5d570c5e1a5f30977eac0ef456a7?apiKey=35ce5b5200f34f76bee050e163f8a7d7&"
//           />
//           <div className="justify-center text-xs opacity-50">
//             Shipping
//           </div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/aefd7291fccccaadbf323c98597fc5e6bd598675d2d3f76135f881dca22c6d2d?apiKey=35ce5b5200f34f76bee050e163f8a7d7&"
//           />
//           <div className="justify-center text-xs opacity-50">
//             Payment
//           </div>
//         </div>
//
//         {/*  <div className="flex w-[219px] h-px flex-col border-b-neutral-200 border-b border-solid"/>*/}
//
//
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           formik.handleSubmit(e);
//           handleSubmit(e);
//         }}>
//
//           <div className="text-lg font-medium mt-9 max-md:max-w-full">
//             Email
//           </div>
//
//           <input
//             type="email"
//             id="email"
//             placeholder="email@email.com"
//             className="justify-center text-neutral-500 text-sm whitespace-nowrap border bg-white grow pl-3 pr-16 py-5 rounded-md border-solid border-neutral-200 items-start max-md:pr-5"
//             required
//             {...formik.getFieldProps("email")}
//           />
//           {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
//
//           <div className="justify-center text-lg font-medium mt-16 max-md:max-w-full max-md:mt-10">
//             Shipping address
//           </div>
//
//           <div className="flex justify-between gap-3.5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
//             <div className="">
//               First name
//               <input
//                 type="text"
//                 id="firstName"
//                 placeholder="First name"
//                 className="justify-center text-neutral-500 text-sm border py-2 px-4 rounded-md border-solid border-neutral-200 items-start"
//                 {...formik.getFieldProps("firstName")}
//               />
//               {formik.touched.firstName && formik.errors.firstName &&
//                 <p className="error">{formik.errors.firstName}</p>}
//             </div>
//
//             <div className="">
//               Last name
//               <input
//                 type="text"
//                 id="lastName"
//                 placeholder="Last name"
//                 className="justify-center text-neutral-500 text-sm border py-2 px-4 rounded-md border-solid border-neutral-200 items-start"
//                 {...formik.getFieldProps("lastName")}
//               />
//               {formik.touched.lastName && formik.errors.lastName && <p className="error">{formik.errors.lastName}</p>}
//             </div>
//           </div>
//           <div className="">
//             Address
//             <input
//               type="text"
//               id="address"
//               placeholder="Street Address"
//               className="justify-center text-neutral-500 text-sm border py-2 px-4 rounded-md border-solid border-neutral-200 items-start"
//               {...formik.getFieldProps("address")}
//             />
//             {formik.touched.address && formik.errors.address && <p className="error">{formik.errors.address}</p>}
//           </div>
//
//           <div className="">
//             Apartment, suite, etc. (optional)
//             <input
//               type="text"
//               id="apartment"
//               placeholder="Apartment, Suite, etc."
//               className="justify-center text-neutral-500 text-sm whitespace-nowrap border bg-white grow pl-3 pr-16 py-5 rounded-md border-solid border-neutral-200 items-start max-md:pr-5"
//               {...formik.getFieldProps("apartment")}
//             />
//             {formik.touched.apartment && formik.errors.apartment && <p className="error">{formik.errors.apartment}</p>}
//           </div>
//
//           <div className="flex justify-between gap-3.5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
//             <div className="">
//               City
//               <input
//                 type="text"
//                 id="city"
//                 placeholder="City"
//                 className="justify-center text-neutral-500 text-sm whitespace-nowrap border bg-white grow pl-3 pr-16 py-5 rounded-md border-solid border-neutral-200 items-start max-md:pr-5"
//                 {...formik.getFieldProps("city")}
//               />
//               {formik.touched.city && formik.errors.city && <p className="error">{formik.errors.city}</p>}
//             </div>
//
//             <Select
//               className="border bg-white w-[150px] flex gap-5 px-3.5 cursor-pointer py-5 rounded-md border-solid border-neutral-200 justify-center text-neutral-500 text-sm"
//               color="blue" label="State">
//               {stateOptions.map(state => (
//                 <Option key={state}>{state}</Option>
//               ))}
//             </Select>
//
//             <div className="">
//               ZIP code
//               <input
//                 type="text"
//                 id="zip"
//                 placeholder="ZIP Code"
//                 className="justify-center text-neutral-500 text-sm whitespace-nowrap border bg-white grow pl-3 pr-16 py-5 rounded-md border-solid border-neutral-200 items-start max-md:pr-5"
//                 {...formik.getFieldProps("zip")}
//               />
//               {formik.touched.zip && formik.errors.zip && <p className="error">{formik.errors.zip}</p>}
//             </div>
//           </div>
//
//           <div className="">
//             Phone
//             <input
//               type="tel"
//               id="phone"
//               placeholder="Phone"
//               className="justify-center text-neutral-500 text-sm whitespace-nowrap border bg-white grow pl-3 pr-16 py-5 rounded-md border-solid border-neutral-200 items-start max-md:pr-5"
//               {...formik.getFieldProps("phone")}
//             />
//             {formik.touched.phone && formik.errors.phone && <p className="error">{formik.errors.phone}</p>}
//           </div>
//
//
//           <div
//             className="justify-center text-slate-50 text-sm font-medium whitespace-nowrap bg-black mt-7 px-6 py-7 rounded-md self-end max-md:px-5">
//             <button type="submit">Continue to shipping</button>
//           </div>
//         </form>
//       </div>
//
//
//       <div className="flex w-2.5 shrink-0 h-[995px] flex-col border-b-neutral-200 border-b border-solid"/>
//       <div className="flex grow basis-[0%] flex-col mt-8 self-start">
//         <div className="flex justify-between gap-2">
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ff609bd4a2e0e53edc1fac9b46254b9e36b5920dd67d5b66ef8a43a73d3efc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&"
//             className="aspect-[0.93] object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
//           />
//           <div className="justify-center text-sm my-auto">
//             Smooth Service Shampoo XXX-
//             <br/>L
//           </div>
//           <div className="justify-center text-sm my-auto">
//             $90.00
//           </div>
//         </div>
//         <div className="flex w-full justify-between gap-5">
//           <div className="flex justify-between gap-2">
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d919623014395e6d2463fd811f8e81c2cca67797a9919157ce73bddadb40c4dc?apiKey=35ce5b5200f34f76bee050e163f8a7d7&"
//               className="aspect-[0.93] object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
//             />
//             <div className="justify-center text-sm self-center grow whitespace-nowrap my-auto">
//               Smooth Service Shampoo
//             </div>
//           </div>
//           <div className="justify-center text-sm self-center my-auto">
//             $40.00
//           </div>
//         </div>
//         <div className="flex justify-between gap-2">
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da0ac08230dcfffb2c0a4ec77e097dd2f7729ef7983143096594c2f72f75cffd?apiKey=35ce5b5200f34f76bee050e163f8a7d7&"
//             className="aspect-[0.93] object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
//           />
//           <div className="justify-center text-sm my-auto">
//             Hydration Fixation Conditioner
//           </div>
//           <div className="justify-center text-sm my-auto">
//             $84.00
//           </div>
//         </div>
//         <div className="flex w-full justify-between gap-5">
//           <div className="flex justify-between gap-2">
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/726e9d00adbffbf90332965cd5a0dec88b80b109f82ebf3e7edb33d25d639d91?apiKey=35ce5b5200f34f76bee050e163f8a7d7&"
//               className="aspect-[0.93] object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
//             />
//             <div className="justify-center text-sm self-center grow whitespace-nowrap my-auto">
//               Porosity Play Spray
//             </div>
//           </div>
//           <div className="justify-center text-sm self-center my-auto">
//             $112.00
//           </div>
//         </div>
//         <div className="flex justify-between gap-3.5 mt-5">
//           <div
//             className="justify-center text-neutral-500 text-sm whitespace-nowrap border bg-white grow pl-3 pr-16 py-5 rounded-md border-solid border-neutral-200 items-start max-md:pr-5">
//             Discount code
//           </div>
//           <div className="bg-zinc-100 flex aspect-[1.3] flex-col justify-center rounded-md">
//             <div
//               className="justify-center text-opacity-60 text-sm font-medium whitespace-nowrap shadow-sm bg-white bg-opacity-0 aspect-[1.3] px-4 py-5 rounded-md">
//               Apply
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between gap-5 mt-6 items-start">
//           <div className="flex flex-col">
//             <div className="justify-center text-sm whitespace-nowrap">
//               Subtotal
//             </div>
//             <div className="justify-center text-sm whitespace-nowrap mt-5">
//               Shipping
//             </div>
//             <div className="justify-center text-base font-medium leading-6 whitespace-nowrap mt-4">
//               Total
//             </div>
//           </div>
//           <div className="flex flex-col items-end">
//             <div className="justify-center text-right text-sm font-medium whitespace-nowrap">
//               $326.00
//             </div>
//             <div className="justify-center text-opacity-60 text-right text-xs whitespace-nowrap mt-5">
//               Calculated at next step
//             </div>
//             <div className="flex justify-between gap-3.5 mt-4 items-start">
//               <div className="justify-center text-opacity-60 text-xs mt-1.5">
//                 USD
//               </div>
//               <div className="justify-center text-lg font-medium leading-7 self-stretch">
//                 $326.00
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//
//
