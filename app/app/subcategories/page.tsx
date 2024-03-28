/* eslint-disable */
import { Suspense } from 'react'
import SubcategoriesList from './SubCategoriesList'

export default function page() {
  return (
    <Suspense>
      <SubcategoriesList/>
    </Suspense>
  )
}
