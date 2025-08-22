import {Route, Routes} from "react-router-dom";
import "./App.css";
import {HomePage} from "./pages/HomePage";
import {CategoryPage} from "./pages/CategoryPage";
import {ProductPage} from "./pages/ProductPage";
import {CartPage} from "./pages/CartPage.tsx";
import Lenis from "lenis";
import {useEffect} from "react";


export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/CategoryPage" element={<CategoryPage/>}/>
      <Route path="/CategoryPage/:productTitle" element={<ProductPage/>}/>
      <Route path="/CartPage" element={<CartPage/>}/>
    </Routes>
  );
}



