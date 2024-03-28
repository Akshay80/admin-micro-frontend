import React from 'react'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';
import { handleSearchCategories, handleSearchSubCategories, selectColor } from '../utils/utils'
import { usePathname, useRouter } from 'next/navigation';

export default function TableHeader({ sellerNames, setSelectFilter, searchParams, setSearch, setTokens, searchParamsSubcat, search, setSelectNameFilter }: any) {
  console.log({ sellerNames, setSelectNameFilter }, "sellerNames, setSelectFilter,");

  const pathname = usePathname()
  const { replace } = useRouter()
  return (
    <div className="row p-6">
      <div className='input-group w-md-25 col-lg-3 col-md-4 col-12'>
        <input className='form-control search rounded' type='search' value={search} onChange={(e) => {
          setTokens([])
          setSearch(e.target.value)
        }} placeholder='Search by name' />
      </div>
      {setSelectNameFilter && (
        <div className="col-auto ms-auto">
          <Select
            isClearable
            placeholder="Select Status"
            options={sellerNames}
            onChange={(e: any) => { setTokens([]); setSelectNameFilter(e?.value) }}
            theme={selectColor}
          />
        </div>
      )}

      {setSelectFilter && (
        <div className="col-auto ms-auto">
          <Select
            isClearable
            placeholder="Select Status"
            options={[{ label: "Active", value: true }, { label: "Inactive", value: false }]}
            onChange={(e) => { setTokens([]); setSelectFilter(e?.value) }}
            theme={selectColor}
          />
        </div>
      )}
      {searchParams && (
        <div className="col-auto">
          <AsyncSelect isClearable theme={selectColor} defaultValue={searchParams.get("categoryId") ? { label: searchParams.get("value"), value: searchParams.get("categoryId") } : null} required placeholder="Select Category" cacheOptions loadOptions={handleSearchCategories} defaultOptions onChange={(e: any) => {
            setTokens([])
            const params = new URLSearchParams(searchParams)
            if (!e?.value) {
              params.delete("categoryId")
              params.delete("value")
            } else {
              params.set("categoryId", e?.value)
              params.set("value", e?.label)
            }
            replace(`${pathname}?${params?.toString()}`)
          }} />
        </div>
      )}
      {searchParamsSubcat && (
        <div className="col-auto">
          <AsyncSelect isClearable theme={selectColor} defaultValue={searchParams.get("subCategoryId") ? { label: searchParams.get("subvalue"), value: searchParams.get("subcategoryId") } : null} required placeholder="Select Subcategory" cacheOptions loadOptions={handleSearchSubCategories} defaultOptions onChange={(e: any) => {
            setTokens([])
            const params = new URLSearchParams(searchParams)
            if (!e?.value) {
              params.delete("subCategoryId")
              params.delete("subvalue")
            } else {
              params.set("subCategoryId", e?.value)
              params.set("subvalue", e?.label)
            }
            replace(`${pathname}?${params?.toString()}`)
          }} />
        </div>
      )}
    </div>
  )
}
