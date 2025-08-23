import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import {App} from "./App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {CategoryPage} from "./pages/CategoryPage";
import {ProductPage} from "./pages/ProductPage";
import {CartPage} from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "CategoryPage", element: <CategoryPage /> },
      { path: "CategoryPage/:productTitle", element: <ProductPage /> },
      { path: "CartPage", element: <CartPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);