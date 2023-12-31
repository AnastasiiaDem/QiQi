import {useEffect} from 'react';
import Lenis from "@studio-freight/lenis";

const useScrollToTop = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    lenis.scrollTo('#top');
  }, []);
};

export default useScrollToTop;
