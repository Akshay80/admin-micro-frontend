/* eslint-disable */
"use client"
import { Menu, MenuButton, MenuItem, View } from '@aws-amplify/ui-react';
import Pagination from '../../../components/pagination';
import TableHeader from '../../../components/table-header/TableHeader';
import { LIMIT, checkAuthStatus, handleNext, handlePrev, toggleStatus } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const SubcategoriesList = () => {
  const [subcategories, setSubcategories] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [selectFilter, setSelectFilter] = useState<any>(null);
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState<[]>([]);
  const [nextToken, setNextToken] = useState(null);
  const [total, setTotal] = useState(0)
  const searchParams: any = useSearchParams()

  const fetchSubcategories = async () => {
    let filter: any = {}
    if (search) {
      filter = { name: { matchPhrasePrefix: `${search}` } }
    }

    if (searchParams.get("categoryId")) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") } }
    }

    if (searchParams.get("categoryId") && search) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") } ,name: { matchPhrasePrefix: `${search}` } }
    }
   
    if (searchParams.get("categoryId" && selectFilter !== null && selectFilter !== undefined)) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") }, active: { eq: selectFilter } }
    }

    if (selectFilter !== null && selectFilter !== undefined ) {
      filter = { active: { eq: selectFilter } }
    }

    if (searchParams.get("categoryId") && search && selectFilter !== null && selectFilter !== undefined) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") } ,name: { matchPhrasePrefix: `${search}` },active: { eq: selectFilter } }
    }
   

    try {
      const res = await API.graphql<any>({
        query: searchProductSubCategories,
        variables: { limit: LIMIT, filter: filter, nextToken, sort: { direction: "desc", field: "createdAt" } },
      });
      setTotal(res.data.searchProductSubCategories.total)
      setToken(res.data.searchProductSubCategories.nextToken);
      setTokens((prev): any => [...prev!, res.data.searchProductSubCategories.nextToken]);

      setSubcategories(res?.data?.searchProductSubCategories?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id: any, products:any ) => {
    if(checkAuthStatus() === false) return toast.error("User doesn't have access !")
    if(products?.length > 0){
      return toast.error("Unable to Delete. Some products are associated with the subcategory !")
    }
    const loading = toast.loading("Loading...")
    try {
      await API.graphql({ query: deleteProductSubCategory, variables: { input: { id }} })
      setSubcategories((prev:any)=>prev.filter((item:any)=>item?.id !== id))
      toast.success("Subcategory Deleted Successfully.")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong !")
    }finally{toast.dismiss(loading)}
  }


  useEffect(() => {
    setIsLoading(true)
    setToken(null)
    let timer = setTimeout(() => {
      fetchSubcategories();
    }, 600)

    return () => clearTimeout(timer)
  }, [search, nextToken, selectFilter, searchParams.get("categoryId")]);

  return (
    <div className="row ">
      <div className='d-flex justify-content-between my-3'>
        <h3>Subcategories</h3>
        <button className='btn btn-primary' onClick={() => window.location.href = "/app/subcategories/create"}>Create Subcategory</button>
      </div>
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <TableHeader setSelectFilter={setSelectFilter} searchParams={searchParams} setSearch={setSearch} setTokens={setTokens} search={search}/>
          {isLoading ?
            (
              <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
                <div className="spinner-border primary" role="status">
                </div>
              </div>
            ) :
            (
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-centered  table-hover text-nowrap table-borderless ">
                    <thead className="bg-light">
                      <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th className='text-center'>Products</th>
                        <th className='text-center'>Current Status</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subcategories?.length > 0 ? subcategories?.map((item: any) => (
                        <tr key={item?.id}>
                          <td><img src={item?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='category_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} /> <span className='ms-2'>{item?.name}</span></td>

                          <td><img src={item?.productCategory?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='category_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} />
                            <span className='ms-2'>{item?.productCategory?.name}</span>
                          </td>

                          <td align='center'><a target='_blank' href={`/app/products?subCategoryId=${item?.id}&subvalue=${item?.name}`}>
                            <u>{item?.products?.items?.length}</u></a></td>
                          <td className='d-flex justify-content-center align-items-center' onClick={(e) => e.stopPropagation()}>
                            <div className="form-check form-switch" style={{ height: "3rem" }}>
                              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={item?.active}
                                onChange={() => toggleStatus(item?.id, item?.active,updateProductSubCategory,subcategories,setSubcategories)}
                              />
                              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" />
                            </div>
                          </td>
                          <td align='center'>
                              <Menu trigger={
                                  <MenuButton variation="link" size="small" width="40%">
                                    <i className="feather-icon icon-more-vertical fs-5"></i>
                                  </MenuButton>}>
                                <MenuItem backgroundColor={"#fbfbfb"}><a target='_blank' className="dropdown-item" href={`/app/subcategories/edit/${item?.id}`}>Edit</a></MenuItem>
                                <MenuItem backgroundColor={"#fbfbfb"}><button className="dropdown-item" onClick={() => toggleStatus(item?.id, item?.active, updateProductSubCategory, subcategories, setSubcategories)}>Make {item?.active ? "Inactive" : "Active"}</button></MenuItem>
                                <MenuItem backgroundColor={"#fbfbfb"}><button className="dropdown-item" onClick={() => handleDelete(item?.id, item?.products?.items)}>Delete</button></MenuItem>
                              </Menu>
                          </td>
                        </tr>
                      )) :
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h4 className='m-0 text-muted py-4'>
                              No Subcategory Found
                            </h4>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>)
          }
          {total > LIMIT && (
            <Pagination
              handleNext={() => handleNext(setNextToken, setToken, token)}
              handlePrev={() => handlePrev(setNextToken, setTokens, tokens)}
              length={tokens.length}
              token={token}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SubcategoriesList;

const searchProductSubCategories = /* GraphQL */ `query SearchProductSubCategories(
  $filter: SearchableProductSubCategoryFilterInput
  $sort: [SearchableProductSubCategorySortInput]
  $limit: Int
  $nextToken: String
) {
  searchProductSubCategories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      image
      active
      sort
      productCategoryId
      productCategory{
        id
        name
        image
      }
      products{
        items{
          id
        }
      }
      createdAt
    }
    nextToken
    total
  }
}
`;

const updateProductSubCategory = /* GraphQL */ `mutation UpdateProductSubCategory(
  $input: UpdateProductSubCategoryInput!
) {
  updateProductSubCategory(input: $input) {
    id
  }
}
`;
const deleteProductSubCategory = /* GraphQL */ `mutation DeleteProductSubCategory(
  $input: DeleteProductSubCategoryInput!
  $condition: ModelProductSubCategoryConditionInput
) {
  deleteProductSubCategory(input: $input, condition: $condition) {
    id
  }
}
` ;