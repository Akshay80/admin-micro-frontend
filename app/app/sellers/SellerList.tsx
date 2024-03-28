"use client"
import { Menu, MenuButton, MenuItem } from '@aws-amplify/ui-react';
import Pagination from '../../../components/pagination';
import TableHeader from '../../../components/table-header/TableHeader';
import { LIMIT, checkAuthStatus, handleNext, handlePrev, toggleStatus } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import StarRatings from 'react-star-ratings';


const SellerList = () => {
  const [sellers, setSellers] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [selectFilter, setSelectFilter] = useState<any>(null);
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState<[]>([]);
  const [nextToken, setNextToken] = useState(null);


  const fetchSellers = async () => {
    let filter: any = {}
    if (search) {
      filter = { name: { matchPhrasePrefix: `${search}` } }
    }
    if (selectFilter !== null && selectFilter !== undefined) {
      filter = { active: { eq: selectFilter } }
      if (selectFilter === false) filter = { active: { ne: true } }
    }
    if (search && (selectFilter !== null && selectFilter !== undefined)) {
      filter = { name: { matchPhrasePrefix: `${search}` }, active: { eq: selectFilter } }
      if (selectFilter === false) filter = { name: { matchPhrasePrefix: `${search}` }, active: { ne: true } }
    }

    try {
      const res = await API.graphql<any>({
        query: searchSellers,
        variables: { limit: LIMIT, filter: filter, nextToken, sort: { direction: "desc", field: "createdAt" } },
      });

      setToken(res.data.searchSellers.nextToken);
      setTokens((prev): any => [...prev!, res.data.searchSellers.nextToken]);

      setSellers(res?.data?.searchSellers?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const handleVerify = async (id: any, verified: boolean) => {
    try {
      if (checkAuthStatus() === false) return toast.error("User doesn't have access !")
      await API.graphql({ query: updateSeller, variables: { input: { id, verified: verified, active: verified } } })
      let temp = structuredClone(sellers)
      let idx = temp.findIndex((x: any) => x.id === id)
      temp[idx].verified = verified
      temp[idx].active = verified
      setSellers(temp)
      toast.success(`Seller ${verified ? "Verified" : "Rejected"}.`)
    } catch (e) {
      console.log(e)
      toast.error("Something went wrong !")
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setToken(null)
    let timer = setTimeout(() => {
      fetchSellers();
    }, 600)

    return () => clearTimeout(timer)
  }, [search, nextToken, selectFilter]);

  return (
    <div className="row ">
      <h3 className='my-3'>Sellers</h3>
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <TableHeader setSelectFilter={setSelectFilter} setSearch={setSearch} setTokens={setTokens} search={search} />
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
                  <table className="table table-centered  table-hover text-nowrap table-borderless">
                    <thead className="bg-light">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th className='text-center'>Current Status</th>
                        <th className='text-center'>Verified</th>
                        <th className='text-center'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sellers?.length > 0 ? sellers?.map((seller: any) => (
                        <tr key={seller?.id}>
                          <td><img src={seller?.image?.includes("jpg") ? seller?.image : "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='seller_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} /> <span className='ms-2'>{seller?.name}</span></td>
                          <td>{seller?.email}</td>
                          <td><StarRatings rating={seller?.rating || 0} starRatedColor='#FFCD3C' starDimension='14px' starSpacing='1px' /></td>
                          <td className='d-flex justify-content-center align-items-center' onClick={(e) => e.stopPropagation()}>
                            <div className="form-check form-switch" style={{ height: "3rem" }}>
                              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                disabled={checkAuthStatus() === false}
                                checked={seller?.active}
                                onChange={() => toggleStatus(seller?.id, seller?.active, updateSeller, sellers, setSellers)}
                              />
                              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" />
                            </div>
                          </td>
                          <td className={`${seller?.verified ? 'text-success' : 'text-danger'} fs-3`} align="center">
                            {seller?.verified && <i className="bi bi-patch-check-fill"></i>}
                            {seller?.verified === false && <i className="bi bi-exclamation-circle-fill"></i>}
                            {seller?.verified === null && <i className="bi bi-hourglass-bottom text-warning"></i>}

                          </td>
                          <td className='text-center'>
                            <div className='dropdown'>
                              <a className='dropdown-ellipses' role='button' data-bs-toggle='dropdown' aria-expanded='true'>
                                <i className="feather-icon icon-more-vertical  icon-more-vertical-after fs-5"></i>
                              </a>
                              <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                                <div className='dropdown-item cursor-pointer' onClick={() => { window.location.href = `/app/sellers/view/${seller?.id}` }}>
                                  View Profile
                                </div>
                                <div className='dropdown-item cursor-pointer' onClick={() => { handleVerify(seller?.id, true) }}>
                                  Verify
                                </div>
                                <div className='dropdown-item cursor-pointer' onClick={() => { handleVerify(seller?.id, false) }}>
                                  Reject
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )) :
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h4 className='m-0 text-muted py-4'>
                              No Sellers Found
                            </h4>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>)
          }
          <Pagination
            handleNext={() => handleNext(setNextToken, setToken, token)}
            handlePrev={() => handlePrev(setNextToken, setTokens, tokens)}
            length={tokens.length}
            token={token}
          />
        </div>
      </div>
    </div>
  )
}

export default SellerList;

const searchSellers = /* GraphQL */ `query SearchSellers(
  $filter: SearchableSellerFilterInput
  $sort: [SearchableSellerSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableSellerAggregationInput]
) {
  searchSellers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      name
      profile
      image
      taxId
      active
      verified
      phone
      email
      website
      address
      attributes
      images
      documents
      rating
      bank
      age
      gender
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    __typename
  }
}
`

export const updateSeller = /* GraphQL */ `mutation UpdateSeller(
  $input: UpdateSellerInput!
  $condition: ModelSellerConditionInput
) {
  updateSeller(input: $input, condition: $condition) {
    id
  }
}
` 