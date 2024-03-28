"use client"
import { Menu, MenuButton, MenuItem } from '@aws-amplify/ui-react';
import Pagination from '../../../components/pagination';
import TableHeader from '../../../components/table-header/TableHeader';
import { LIMIT, checkAuthStatus, handleNext, handlePrev } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const CategoryList = () => {
  const [categories, setcategories] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [selectFilter, setSelectFilter] = useState<any>(null);
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState<[]>([]);
  const [nextToken, setNextToken] = useState(null);
  const [total, setTotal] = useState(0)
  const [updating,setUpdating] = useState(false)


  const fetchCategories = async () => {
    let filter: any = {}
    if (search) {
      filter = { name: { matchPhrasePrefix: `${search}` } }
    }
    if (selectFilter !== null && selectFilter !== undefined) {
      filter = { active: { eq: selectFilter } }
    }
    if (search && (selectFilter !== null)) {
      filter = { name: { matchPhrasePrefix: `${search}` }, active: { eq: selectFilter } }
    }

    try {
      const res = await API.graphql<any>({
        query: searchProductCategories,
        variables: { limit: LIMIT, filter: filter, nextToken, sort: { direction: "desc", field: "createdAt" } },
      });
      setTotal(res.data.searchProductCategories.total)
      setToken(res.data.searchProductCategories.nextToken);
      setTokens((prev): any => [...prev!, res.data.searchProductCategories.nextToken]);

      setcategories(res?.data?.searchProductCategories?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const toggleStatus = async (id: any, status: boolean,subcategories:any) => {
    if(checkAuthStatus() === false) return toast.error("User doesn't have access !")
    setUpdating(true)
    const loading = toast.loading("Loading...")
    try {
      await API.graphql({ query: updateProductCategory, variables: { input: { id, active: !status } } })
      for(let item of subcategories){
        await API.graphql({query: updateProductSubCategory, variables: { input: { id:item?.id, active: !status } } })
      }
      let temp = structuredClone(categories)
      const idx = temp.findIndex((item: any) => item.id === id)
      temp[idx].active = !status
      setcategories(temp)
      toast.success("Category status updated.")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong !")
    }finally{
      setUpdating(false)
      toast.dismiss(loading)}
  }

  const handleDelete = async (id: any, products:any, subcategories:any ) => {
    if(!checkAuthStatus()) return toast.error("User doesn't have access !")
    if(products?.length > 0){
      return toast.error("Unable to Delete. Some products are associated with this category !")
    }
    const loading = toast.loading("Loading...")
    try {
      await API.graphql({ query: deleteProductCategory, variables: { input: { id }} })

      for(let item of subcategories){
        await API.graphql({query: deleteProductSubCategory, variables: { input: { id:item?.id} } })
      }

      setcategories((prev:any)=>prev.filter((item:any)=>item?.id !== id))
      toast.success("Category Deleted Successfully.")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong !")
    }finally{toast.dismiss(loading)}
  }

  useEffect(() => {
    setIsLoading(true)
    setToken(null)
    let timer = setTimeout(() => {
      fetchCategories();
    }, 600)

    return () => clearTimeout(timer)
  }, [search, nextToken, selectFilter]);

  return (
    <div className="row ">
      <div className='d-flex justify-content-between my-3'>
        <h3>Categories</h3>
        <a className='btn btn-primary' href = "/app/categories/create">Create Category</a>
      </div>
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <TableHeader setSelectFilter={setSelectFilter} setSearch={setSearch} setTokens={setTokens} search={search}/>
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
                        <th className='text-center'>Subcategories</th>
                        <th className='text-center'>Products</th>
                        <th className='text-center'>Current Status</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories?.length > 0 ? categories?.map((category: any) => (
                        <tr key={category?.id}>
                          <td><img src={category?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='category_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} /> <span className='ms-2'>{category?.name}</span></td>

                          <td align='center'><a target='_blank' href={`/app/subcategories?categoryId=${category?.id}&value=${category?.name}`}><u>{category?.productSubCategories?.items?.length}</u></a></td>

                          <td align='center'><a target='_blank' href={`/app/products?categoryId=${category?.id}&value=${category?.name}`}><u>{category?.products?.items?.length}</u></a></td>

                          <td className='d-flex justify-content-center align-items-center' onClick={(e) => e.stopPropagation()}>
                            <div className="form-check form-switch" style={{ height: "3rem" }}>
                              <input disabled={updating} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={category?.active}
                                onChange={() => toggleStatus(category?.id, category?.active,category?.productSubCategories?.items)}
                              />
                              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" />
                            </div>
                          </td>
                          
                          <td align='center'>
                            <Menu trigger={
                                  <MenuButton variation="link" size="small" width="40%">
                                    <i className="feather-icon icon-more-vertical fs-5"></i>
                                  </MenuButton>}>
                                <MenuItem backgroundColor={"#fbfbfb"}><a target='_blank' href={`/app/categories/edit/${category?.id}`} className="dropdown-item">Edit</a></MenuItem>
                                <MenuItem backgroundColor={"#fbfbfb"}><button className="dropdown-item" onClick={() => toggleStatus(category?.id, category?.active,category?.productSubCategories?.items)}>Make {category?.active ? "Inactive" : "Active"}</button></MenuItem>
                                <MenuItem backgroundColor={"#fbfbfb"}> <button className="dropdown-item" onClick={() => handleDelete(category?.id,category?.products?.items,category?.productSubCategories?.items)}>Delete</button></MenuItem>
                              </Menu>
                          </td>
                        </tr>
                      )) :
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h4 className='m-0 text-muted py-4'>
                              No Category Found
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

export default CategoryList;

const searchProductCategories = /* GraphQL */ `query SearchProductCategories(
    $filter: SearchableProductCategoryFilterInput
    $sort: [SearchableProductCategorySortInput]
    $limit: Int
    $nextToken: String
  ) {
    searchProductCategories(
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
        products{
          items{
            id
          }
        }
        productSubCategories {
            items {
              id
            }
          }
      }
      nextToken
      total
    }
  }
  ` ;
const updateProductCategory = /* GraphQL */ `mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
  ) {
    updateProductCategory(input: $input) {
      id
    }
  }
  `
const deleteProductCategory = /* GraphQL */ `mutation DeleteProductCategory(
    $input: DeleteProductCategoryInput!
  ) {
    deleteProductCategory(input: $input) {
      id
    }
  }
  `
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