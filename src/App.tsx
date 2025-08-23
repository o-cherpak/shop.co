import {Outlet, ScrollRestoration} from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}