'use client';
import { API } from 'aws-amplify';
import moment from 'moment';
import { useEffect, useState } from 'react';
import orderStatusData from "../../../data/order_status.json"
import toast from 'react-hot-toast';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';

export interface DashboardProps { }
function Dashboard(props: DashboardProps) {
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);
  const [buyers, setBuyers] = useState<any>()
  const [sellers, setSellers] = useState<any>()
  const [products, setProducts] = useState<any>()
  const [orders, setOrders] = useState<any>()
  const [ordersCount, setOrdersCount] = useState<any>()
  const [dateFilters, setDateFilters] = useState<any>(null);

  const handleDateApplied = (event:any, picker:any) => {
    const fromDate = Math.floor(
      moment(picker.startDate).startOf("day").valueOf()
    );
    const toDate = Math.floor(moment(picker.endDate).endOf("day").valueOf());
    let start = new Date(fromDate).toISOString();
    let end = new Date(toDate).toISOString();
    setDateFilters({ start, end });
  };
  const fetchOrders = async () => {
    try {
      let filter:any = {}
      if(dateFilters){
        filter = {createdAt: {gte: dateFilters?.start, lte: dateFilters?.end}}}
      const res = await API.graphql<any>({
        query: searchOrders,
        variables: {
          limit:5,
          filter,
          sort: {
            direction: "desc",
            field: "createdAt"
          }
        }
      })
      res.data?.searchOrders?.items.forEach((item: any) => {
        if (item?.createdAt) {
          item.createdAt = (moment(item?.createdAt).local().format("D-MMM-YY, HH:mm")).toString();
        }
      })
      setOrders(res?.data?.searchOrders?.items);
      setOrdersCount(res?.data?.searchOrders?.total)
    } catch (error) {
      console.log("error:", error)
    }
  }
  const fetchProducts = async () => {
    try {
      let filter:any = {}
      if(dateFilters){
        filter = {createdAt: {gte: dateFilters?.start, lte: dateFilters?.end}}}
      const res = await API.graphql<any>({
        query: searchProducts,variables:{filter}
      })
      setProducts(res?.data?.searchProducts?.total)
    } catch (error) {
      console.log("error:", error)
    }
  }
  const fetchSellers = async () => {
    try {
      let filter:any = {}
      if(dateFilters){
        filter = {createdAt: {gte: dateFilters?.start, lte: dateFilters?.end}}}
      const res = await API.graphql<any>({
        query: searchSellers,variables:{filter}
      })
      setSellers(res?.data?.searchSellers?.total)
    } catch (error) {
      console.log("error:", error)
    }
  }
  const fetchBuyers = async () => {
    try {
      let filter:any = {}
      if(dateFilters){
        filter = {createdAt: {gte: dateFilters?.start, lte: dateFilters?.end}}}
      const res = await API.graphql<any>({
        query: searchBuyers,variables:{filter}
      })
      setBuyers(res?.data?.searchBuyers?.total)
    } catch (error) {
      console.log("error:", error)
    }
  }

  const reslove = async()=>{
    let load = toast.loading("Loading")
    Promise.all([fetchOrders(),fetchProducts(),fetchSellers(),fetchBuyers()]).then(()=>toast.dismiss(load))
  }

  useEffect(() => {
    reslove()
  }, [dateFilters])
  
  return (
      <div>
       <DateRangePicker
       key={dateFilters}
        initialSettings={{
          startDate:  moment(dateFilters?.start).format("MM-DD-YYYY"),
          endDate: moment(dateFilters?.end).format("MM-DD-YYYY"),
          linkedCalendars: true,
          showCustomRangeLabel: true,
          showDropdowns: true,
          alwaysShowCalendars: true,
          ranges: {
            'Tomorrow': [moment().add(1, 'day'), moment().add(1, 'day')],
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 14 Days': [moment().subtract(13, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
          }
        }}
        onApply={handleDateApplied}
      >
        <input
          className={`btn ${dateFilters ? "btn-primary" : "btn-white"
            } ml-2 pointer`}
        />
      </DateRangePicker>
      <i className='bi bi-x ms-3' style={{cursor:"pointer"}} onClick={()=>setDateFilters(null)}></i>
        <div className="row mb-8">
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 mb-6">
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Earnings</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                    <i className="bi bi-currency-dollar fs-5" />
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className=" mb-2 fw-bold fs-2">$93,438.78</h1>
                  <span>Monthly revenue</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-6">
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Orders</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                    <i className="bi bi-cart fs-5" />
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className=" mb-2 fw-bold fs-2">{ordersCount}</h1>
                  <span><span className="text-dark me-1">Orders and counting....</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-6">
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Buyers</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                    <i className="bi bi-people fs-5" />
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className=" mb-2 fw-bold fs-2">{buyers}</h1>
                  <span><span className="text-dark me-1">Buyers and counting...</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-6">
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Products</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                    <i className="bi bi-bag f5-5"></i>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className=" mb-2 fw-bold fs-2">{products}</h1>
                  <span>Products and counting... </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-6">
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Seller</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                    <i className="bi bi-cart fs-5" />
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className=" mb-2 fw-bold fs-2">{sellers}</h1>
                  <span><span className="text-dark me-1">Sellers and counting...</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-6">
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                <div className="d-flex justify-content-between align-items-center mb-6">
                  <div>
                    <h4 className="mb-0 fs-5">Support</h4>
                  </div>
                  <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                    <i className="bi bi-headset fs-5"></i>
                  </div>
                </div>
                <div className="lh-1">
                  <h1 className=" mb-2 fw-bold fs-2">324</h1>
                  <span><span className="text-dark me-1">12+</span>New Requests</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-0 fs-5">Recent Order</h3>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-centered table-borderless text-nowrap table-hover">
              <thead className="bg-light">
                <tr>
                  <th>Order Number</th>
                  <th>Buyer Name</th>
                  <th>Seller Name</th>
                  <th>Order Date</th>
                  <th className='text-center'>Order Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders &&
                  orders.map((data: any) =>
                  (
                    <tr key={data?.id} style={{cursor:"pointer"}} onClick={()=>window.location.href = `/app/orders/view/${data?.id}`}>
                      <td>{data?.code}</td>
                      <td>{data?.buyer?.name}</td>
                      <td>{data?.seller?.name}</td>
                      <td>{data?.createdAt}</td>
                      <td align='center'><span className=
                        {`${orderStatusData?.data?.find((x: any) => x?.orderStatus === data.orderStatus && x?.order_css)?.order_css}`}
                      >{orderStatusData?.data?.find((x: any) => x?.orderStatus === data.orderStatus && x?.order_css)?.search_value}</span></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;

// QUERIES START
const searchProducts = /* GraphQL */ `
  query SearchProducts(
    $filter: SearchableProductFilterInput
    $sort: [SearchableProductSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProductAggregationInput]
  ) {
    searchProducts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
      }
      total
    }
  }
`;
const searchSellers = `
  query SearchSellers(
    $filter: SearchableSellerFilterInput
    $sort: [SearchableSellerSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchSellers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
      }
      total
    }
  }
`;
const searchOrders = /* GraphQL */ `
  query SearchOrders(
    $filter: SearchableOrderFilterInput
    $sort: [SearchableOrderSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchOrders(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        code
        items
        createdAt
        orderStatus
        buyer {
          name
        }
        seller {
          name
        }
      }
      total
    }
  }
`;

const searchProductCategories = /* GraphQL */ `
query SearchProductCategories(
  $filter: SearchableProductCategoryFilterInput
  $sort: [SearchableProductCategorySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableProductCategoryAggregationInput]
) {
  searchProductCategories(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      name
      image
      productType
      productSubCategories {
        items {
          name
        }
      }
      id
      products {
        items {
          name
        }
      }
      createdAt
      active
    }
    total
  }
}
`;
const searchBuyers = `
  query SearchBuyers(
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBuyers(
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
      }
      total
    }
  }
`;