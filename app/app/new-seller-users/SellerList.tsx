"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import Pagination from '../../../components/pagination';
import TableHeader from '../../../components/table-header/TableHeader';
import { LIMIT, checkAuthStatus, handleNext, handlePrev, selectColor, toggleStatus } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';

const SellerList = () => {
    const [sellers, setSellers] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const [selectFilter, setSelectFilter] = useState<any>(null);
    const [] = useState<any>(null)
    const [token, setToken] = useState(null);
    const [tokens, setTokens] = useState<[]>([]);
    const [nextToken, setNextToken] = useState(null);
    const [key, setKey] = useState(Math.random())
    let sellersUsers: any = []

    useEffect(() => {
        setIsLoading(true)
        getData()
    }, [search, selectFilter])

    const getData = async (nextToken: string | null = null) => {
        do {
            const result: any = await numberOfOrders(nextToken);
            if (result?.length > 0) {
                sellersUsers = [...sellersUsers, ...result?.sellerData]
            }
            nextToken = result?.nextToken;
        } while (nextToken);
        setKey(Math.random())
        const updatedSellers = sellersUsers?.reduce((acc: any[], item: any) => {
            const hasUserType = item?.users?.items?.some((data: any) => data?.user?.userTypeId);
            if (hasUserType) {
                return [...acc, item];
            }
            return acc;
        }, []);
        setSellers(updatedSellers);
        setIsLoading(false)
    }

    const numberOfOrders = async (token: string | null) => {
        let filter: any = {}

        if (search) {
            filter = { name: { matchPhrasePrefix: `${search}` } }
        }

        if (selectFilter) {
            filter = { active: { eq: `${selectFilter}` } }
        }

        const res = await API.graphql<GraphQLQuery<any>>({
            query: searchSellers,
            variables: { limit: LIMIT, nextToken: token, filter: filter }
        })
        return { sellerData: res?.data?.searchSellers?.items, nextToken: res?.data?.searchSellers?.nextToken, length: res?.data?.searchSellers?.items?.length };
    }

    // filter test 
    const [sellerNames, setSellerNames] = useState<any>([])
    const [selectNameFilter, setSelectNameFilter] = useState<any>(null);
    const [nameFilterData, setNameFilterData] = useState<any>([]);

    useEffect(() => {
        fetchByCategories()
    }, [])

    useEffect(() => {
        let finalData: any = []
        let temp = sellers?.map((item: any) => item?.users?.items?.some((data: any) => data?.user?.userType?.name === selectNameFilter) ? item : 'no data')
        temp.forEach((item: any) => {
            if (item !== 'no data') {
                finalData.push(item)
            }
        })
        console.log(temp, 'hello temp')
        setNameFilterData(finalData)
    }, [selectNameFilter])

    const fetchByCategories = async () => {
        try {
            const response = await API.graphql<GraphQLQuery<any>>({
                query: searchUserTypes
            });
            const data = response?.data?.searchUserTypes?.items;
            const sellerCategoryNames = data.filter((item: any) => item.category === "seller").map((item: any) => {
                return {
                    label: item.name,
                    value: item.name,
                }
            });
            setSellerNames(sellerCategoryNames);
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <div className="card h-100 card-lg">
            <TableHeader setSelectNameFilter={setSelectNameFilter} sellerNames={sellerNames} setSelectFilter={setSelectFilter} setSearch={setSearch} setTokens={setTokens} search={search} />
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
                                        {/* <th className='text-center'>Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {!selectNameFilter && sellers?.length > 0 ? sellers?.map((seller: any) => (
                                        <tr key={seller?.id}>
                                            <>
                                                {console.log(seller?.users?.items?.some((data: any) => data?.user?.userType?.name === 'farmer'), 'jkadhkjd')}
                                            </>
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

                                        </tr>
                                    )) :
                                        <>
                                            {!selectNameFilter && sellers?.length === 0 &&
                                                <tr className='text-center py-3'>
                                                    <td colSpan={8}>
                                                        <h4 className='m-0 text-muted py-4'>
                                                            No Sellers Found
                                                        </h4>
                                                    </td>
                                                </tr>
                                            }
                                        </>
                                    }

                                    {selectNameFilter && nameFilterData?.length > 0 ? nameFilterData?.map((seller: any) => (
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

                                        </tr>
                                    )) :
                                        <>
                                            {selectNameFilter && nameFilterData?.length === 0 &&
                                                <tr className='text-center py-3'>
                                                    <td colSpan={8}>
                                                        <h4 className='m-0 text-muted py-4'>
                                                            No Sellers Found
                                                        </h4>
                                                    </td>
                                                </tr>
                                            }
                                        </>
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
    )
}

export default SellerList

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
        users {
          items {
            user {
                userType {
                    name
                  }
              id
              userTypeId
            }
          }
        }
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


const searchUserTypes = /* GraphQL */ `query SearchUserTypes(
    $filter: SearchableUserTypeFilterInput
    $sort: [SearchableUserTypeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserTypeAggregationInput]
  ) {
    searchUserTypes(
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
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
  ` 