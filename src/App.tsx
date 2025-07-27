import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CategoryPage" element={<CategoryPage />} />
      <Route path="/CategoryPage/ProductPage" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
