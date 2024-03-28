/* eslint-disable */
import { Suspense } from "react";
import ProductList from "./ProductList";


export default function page() {
  return (
    <Suspense>
      <ProductList/>
    </Suspense>
  )
}
