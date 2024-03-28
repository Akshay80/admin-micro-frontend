/* eslint-disable */
import React, { Suspense } from "react";
import ProductReviews from "./ProductReviews";

export default function page() {
  return (
    <Suspense>
      <ProductReviews />
    </Suspense>
  );
}
