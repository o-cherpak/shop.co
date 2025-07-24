import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Category } from "./pages/category";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category" element={<Category />}/>
      </Routes>
  );
}

export default App;

