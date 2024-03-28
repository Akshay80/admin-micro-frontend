"use client"
import Pagination from '../../../components/pagination';
import { LIMIT, handleNext, handlePrev, selectColor } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import orderStatusData from "../../../data/order_status.json";


const OrderList = () => {
  const [orders, setOrders] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [selectFilter, setSelectFilter] = useState<any>(null);
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState<[]>([]);
  const [nextToken, setNextToken] = useState(null);
  const [total, setTotal] = useState(0)
  const [updating,setUpdating] = useState(false)

  const status = ["OPEN",
	"READY_FOR_PICKUP",
	"IN_TRANSIT",
	"DELIVERED",
	"CANCEL_REQUESTED",
	"CANCEL_ACCEPTED",
	"CANCEL_REJECTED",
	"RETURN_REQUESTED",
	"RETURN_ACCEPTED",
	"RETURN_REJECTED",
	"RETURNED",
	"CLOSED",
	"CANCELLED"]


  const fetchOrders = async () => {
    let filter: any = {}
    if (search) {
      filter = { code: { matchPhrasePrefix: `${search}` } }
    }
    if (selectFilter !== null && selectFilter !== undefined) {
      filter = { orderStatus: { eq: selectFilter } }
    }
    if (search && (selectFilter !== null && selectFilter !== undefined)) {
      filter = { code: { matchPhrasePrefix: `${search}` }, orderStatus: { eq: selectFilter } }
    }

    try {
      const res = await API.graphql<any>({
        query: searchOrders,
        variables: { limit: LIMIT, filter: filter, nextToken, sort: { direction: "desc", field: "createdAt" } },
      });
      setTotal(res.data.searchOrders.total)
      setToken(res.data.searchOrders.nextToken);
      setTokens((prev): any => [...prev!, res.data.searchOrders.nextToken]);

      setOrders(res?.data?.searchOrders?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    setIsLoading(true)
    setToken(null)
    let timer = setTimeout(() => {
      fetchOrders();
    }, 600)

    return () => clearTimeout(timer)
  }, [search, nextToken, selectFilter]);

  return (
    <div className="row ">
      <div className='d-flex justify-content-between my-3'>
        <h3>Orders</h3>
      </div>
      <div className="col-xl-12 col-12 mb-5">
      <div className="row p-6">
                  <div className='input-group w-md-25 col-lg-3 col-md-4 col-12'>
                      <input className='form-control search rounded' type='search' value={search} onChange={(e) => {
                          setTokens([])
                          setSearch(e.target.value)
                      }} placeholder='Search by Order ID' />
                  </div>
                  <div className="col-auto ms-auto">
                      <Select
                          isClearable
                          placeholder="Select Status"
                          options={status?.map((item: any) => {
                              return { label: item, value: item }
                          })}
                          onChange={(e) => {setTokens([]) ; setSelectFilter(e?.value)}}
                          theme={selectColor}
                      />
                  </div>
              </div>
        <div className="card h-100 card-lg">
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
                      <th>Order ID</th>
                        <th>Date (MM-DD-YYYY)</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Amount</th>
                        <th>Seller</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.length > 0 ? orders?.map((item: any) => (
                        <tr key={item?.id} style={{cursor:"pointer"}} onClick={()=>window.location.href = `/app/orders/view/${item?.id}`}>
                            <td>{item?.code}</td>
                            <td>{moment(item?.orderDate).local().format("D-MMM-YY, HH:mm").toString()}</td>
                            <td align='center'><span className=
                              {`${orderStatusData?.data?.find((data: any) => data?.orderStatus === item.orderStatus && data?.order_css)?.order_css}`}
                            >{orderStatusData?.data?.find((data: any) => data?.orderStatus === item.orderStatus && data?.order_css)?.search_value}</span></td>
                            <td align='center'>
                                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                                      item?.total.toFixed(2),
                                  )}</td>
                            <td>{item?.seller?.name}</td>
                        </tr>
                      )) :
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h4 className='m-0 text-muted py-4'>
                              No Orders Found
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

export default OrderList;

 const searchOrders = /* GraphQL */ `query SearchOrders(
    $filter: SearchableOrderFilterInput
    $sort: [SearchableOrderSortInput]
    $limit: Int
    $nextToken: String
  ) {
    searchOrders(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        items
        rating
        buyerId
        sellerId
        paymentId
        userId
        phone
        currency
        taxTotal
        seller{
            name
        }
        deliveryTotal
        subTotal
        total
        reason
        pickupAddress
        billingAddress
        deliveryAddress
        orderStatus
        changeLog
        shipmentDetails
        orderDate
        __typename
      }
      nextToken
      total
    }
  }
  `;