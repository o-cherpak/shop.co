import "./App.css";
import { Header } from "./components/homepage/Header/Header";
import { TopSingUp } from "./components/homepage/Header/TopSingUp";
import { Main } from "./components/homepage/Main/Main";

function App() {
  return (
    <>
      <TopSingUp />

      <Header />

      <Main />
    </>
  );
}

export default App;
