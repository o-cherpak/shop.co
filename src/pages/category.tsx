import { BreadCrumbs } from "../components/categoryPage/BreadCrumbs";
import { Header } from "../components/Header/Header";
import { TopSingUp } from "../components/Header/TopSingUp";

export function Category() {
  return (
    <>
      <TopSingUp />

      <Header />

      <BreadCrumbs />
    </>
  );
}
