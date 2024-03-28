/* eslint-disable */
"use client"
import { Menu, MenuButton, MenuItem } from '@aws-amplify/ui-react';
import Pagination from '../../../components/pagination';
import TableHeader from '../../../components/table-header/TableHeader';
import { LIMIT, checkAuthStatus, handleNext, handlePrev } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import moment from 'moment';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import StarRatings from 'react-star-ratings';

const ProductList = () => {
  const [products, setProducts] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [selectFilter, setSelectFilter] = useState<any>(null);
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState<[]>([]);
  const [nextToken, setNextToken] = useState(null);
  const [total, setTotal] = useState(0)
  const searchParams: any = useSearchParams()
  const [modal,setShowModal] = useState<boolean>(false)
  const [prodDetails,setProdDetails] = useState<any>({})

  const path = usePathname()
  const reviewPage = path.includes("product-reviews")


  const fetchProducts = async () => {
    let filter: any = {}
    
    if (search) filter = { name: { matchPhrasePrefix: search}}        
    if (selectFilter !== null && selectFilter !== undefined )  filter = { active: { eq: selectFilter } }
    if (searchParams.get("categoryId")) filter = { productCategoryId: { eq: searchParams.get("categoryId")}}
    if (searchParams.get("subCategoryId")) filter = { productSubCategoryId: { eq: searchParams.get("subCategoryId")}}

    if(searchParams.get("categoryId") && searchParams.get("subCategoryId")){
      filter = { productSubCategoryId: { eq: searchParams.get("subCategoryId") } ,productCategoryId: { eq: searchParams.get("categoryId") }}
    }
    if (searchParams.get("categoryId") && search) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") } ,name: { matchPhrasePrefix: `${search}` } }
    }
    if (searchParams.get("subCategoryId") && search) {
      filter = { productSubCategoryId: { eq: searchParams.get("subCategoryId") } ,name: { matchPhrasePrefix: `${search}` } }
    }

    if (searchParams.get("categoryId") && ( selectFilter !== null && selectFilter !== undefined) ) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") }, active: { eq: selectFilter } }
    }

    if (searchParams.get("categoryId") && search && selectFilter !== null && selectFilter !== undefined) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") } ,name: { matchPhrasePrefix: `${search}` },active: { eq: selectFilter } }
    }
    if (searchParams.get("categoryId") && search && (selectFilter !== null && selectFilter !== undefined) && searchParams.get("subCategoryId")) {
      filter = { productCategoryId: { eq: searchParams.get("categoryId") } ,name: { matchPhrasePrefix: `${search}` },active: { eq: selectFilter },productSubCategoryId: { eq: searchParams.get("subCategoryId") } }
    }


    try {
      const res = await API.graphql<any>({
        query: searchProducts,
        variables: { limit: LIMIT, filter: filter, nextToken, sort: { direction: "desc", field: "createdAt" } },
      });
      setTotal(res.data.searchProducts.total)
      setToken(res.data.searchProducts.nextToken);
      setTokens((prev): any => [...prev!, res.data.searchProducts.nextToken]);
      setProducts(res?.data?.searchProducts?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  const verifyReview = async(id:any,status:boolean)=>{
    try{
       await API.graphql({query : updateProductFeedback,variables:{input : {id , isVerified : status}}})
       let temp = structuredClone(prodDetails)
       let idx = temp.feedbacks.findIndex(((x:any)=>x.id === id))
       temp.feedbacks[idx].isVerified = status
       setProdDetails(temp)
       toast.success(`Review ${status ? "Accepted" : "Rejected"}`)
    }catch(e){
      console.log(e)
      toast.error("Something went wrong !")
    }
  } 

  const toggleStatus = async (id: any, status: boolean , query:any ,state:any ,setState:any) => {
    if(checkAuthStatus() === false) return toast.error("User doesn't have access !")
  
    const loading = toast.loading("Loading...")
    try {
      await API.graphql({ query: query, variables: { input: { id, verified: !status,active : !status } } })
      let temp = structuredClone(state)
      const idx = temp.findIndex((item: any) => item.id === id)
      temp[idx].active = !status
      temp[idx].verified = !status
      setState(temp)
      toast.success(`Status updated.`)
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong !")
    }finally{toast.dismiss(loading)}
  }

  useEffect(() => {
    setIsLoading(true)
    setToken(null)
    let timer = setTimeout(() => {
      fetchProducts();
    }, 600)

    return () => clearTimeout(timer)
  }, [search, nextToken, selectFilter, searchParams]);

  return (
    <div className="row ">
      <div className='d-flex justify-content-between my-3'>
        <h3>{reviewPage ?  "Product Reviews" : "Products"}</h3>
      </div>
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          {reviewPage ? <TableHeader setSearch={setSearch} setTokens={setTokens}  search={search}/> : 
            <TableHeader setSelectFilter={setSelectFilter}searchParams={searchParams}setSearch={setSearch} setTokens={setTokens} searchParamsSubcat={searchParams}  search={search}/>}
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
                        {!reviewPage && (
                          <>
                            <th>Category</th>
                            <th>Subcategory</th>
                        <th className='text-center'>Current Status</th>
                        <th className='text-center'>Action</th>
                        </>
                        )}
                        {reviewPage && (
                          <>
                          <th>Rating</th>
                          <th>Reviews</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {products?.length > 0 ? products?.map((item: any) => (
                        <tr key={item?.id}>
                          <td><img src={item?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='category_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} /> <span className='ms-2'>{item?.name}</span></td>

                          {!reviewPage && (
                            <>
                              <td><img src={item?.productCategory?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='category_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} />
                                <span className='ms-2'>{item?.productCategory?.name}</span>
                              </td>
                              <td><img src={item?.productSubCategory?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='category_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} />
                                <span className='ms-2'>{item?.productSubCategory?.name}</span>
                              </td>
                              <td className='d-flex justify-content-center align-items-center' onClick={(e) => e.stopPropagation()}>
                                <div className="form-check form-switch" style={{ height: "3rem" }}>
                                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={item?.active}
                                    onChange={() => toggleStatus(item?.id, item?.verified, updateProduct, products, setProducts)}
                                  />
                                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" />
                                </div>
                              </td>
                              <td align='center' onClick={(e) => e.stopPropagation()}>
                                <Menu trigger={
                                  <MenuButton variation="link" size="small" width="40%">
                                    <i className="feather-icon icon-more-vertical fs-5"></i>
                                  </MenuButton>}>
                                <MenuItem backgroundColor={"#fbfbfb"}><button className="dropdown-item" onClick={() => toggleStatus(item?.id, item?.active, updateProduct, products, setProducts)}>Make {item?.active ? "Inactive" : "Active"}</button></MenuItem>
                                <MenuItem backgroundColor={"#fbfbfb"}> <button className="dropdown-item" onClick={() => window.location.href = `/app/products/view/${item?.id}`}>View Product</button></MenuItem>
                              </Menu>
                              </td>
                            </>
                          )}

                          {reviewPage && (
                            <>
                              <th align='center'><StarRatings rating={item?.rating || 0} starRatedColor='#FFCD3C' starDimension='14px' starSpacing='1px' /></th>
                              <th align='center' onClick={()=>{
                                setProdDetails({name : item?.name, feedbacks : item?.feedbacks?.items})
                                setShowModal(true)
                              }}><i className='bi bi-eye' style={{cursor:"pointer"}}></i></th>
                            </>
                          )}
                        </tr>
                      )) :
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h4 className='m-0 text-muted py-4'>
                              No Products Found
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
      <Modal size='xl' show={modal}>
        <Modal.Header>
          <h6>{prodDetails?.name}</h6>
        </Modal.Header>
        <Modal.Body style={{maxHeight:"80vh" , overflowY:"auto"}}>
        {
          prodDetails?.feedbacks?.length ?prodDetails?.feedbacks?.map((data: any, index: number) => (
            <div key={index}>
              <div className="d-flex border-bottom pb-6 mb-6 position-relative">
                <img
                  src={data?.buyerUser?.buyer?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"}
                  alt=""
                  style={{ objectFit: "cover" }}
                  className="rounded-circle avatar-lg"
                />
                <div className="ms-5 ">
                  <div>
                    <h6 className="mb-1">{data?.buyerUser?.buyer?.name}</h6>
                    <p className="small m-0">
                      <span className="text-muted">{moment(data?.createdAt).format("DD MMM YYYY")}</span>
                    </p>
                    <div className="">
                      <StarRatings rating={data?.rating || 0} starRatedColor='#FFCD3C' starDimension='14px' starSpacing='1px' />
                    </div>
                      <p>{data?.comment}</p>
                    {data?.isVerified === true && <span className="badge bg-success">Accepted</span>}
                    {data?.isVerified === false && <span className="badge bg-danger">Rejected</span>}
                  </div>
                  <div className='position-absolute top-0 end-0'>
                    <i className='bi bi-check text-success fs-2' style={{ cursor: "pointer" }} onClick={() => verifyReview(data?.id, true)}></i>
                    <i className='bi bi-x text-danger fs-2' style={{ cursor: "pointer" }} onClick={() => verifyReview(data?.id, false)}></i>
                  </div>
                </div>
              </div>
            </div>
          )) : <p className='text-center m-1 fs-5'>No Ratings</p>
        }
        </Modal.Body>

        

        <Modal.Footer>
          <button onClick={() => { setShowModal(false); }}
            className="btn bg-primary text-white">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProductList;

const searchProducts = /* GraphQL */ `query SearchProducts(
  $filter: SearchableProductFilterInput
  $sort: [SearchableProductSortInput]
  $limit: Int
  $nextToken: String
) {
  searchProducts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      name
      description
      image
      images
      documents
      listPrice
      unitPrice
      tierPrice
      unitType
      taxCategoryId
      attributes
      weight
      active
      verified
      taxExempt
      keywords
      leadTime
      rating
      stock
      sellerId
      feedbacks {
        items {
          id
          comment
          createdAt
          rating
          productId
          updatedAt
          media
          isVerified
          product {
            name
          }
          buyerUser {
            buyer {
              image
              name
              email
            }
          }
        }
      }
      seller{
        name
      }
      productCategoryId
      productCategory{
        name
        image
      }
      productSubCategoryId
      productSubCategory{
        name
        image
      }
      createdAt
      updatedAt
    }
    nextToken
    total
  }
}
`;
const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
) {
  updateProduct(input: $input) {
    id
  }
}
`;

const updateProductFeedback = /* GraphQL */ `mutation UpdateProductFeedback(
  $input: UpdateProductFeedbackInput!
  $condition: ModelProductFeedbackConditionInput
) {
  updateProductFeedback(input: $input, condition: $condition) {
    id
  }
}
`;