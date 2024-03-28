"use client"
import Pagination from '../../../components/pagination';
import { LIMIT, handleNext, handlePrev } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import moment from 'moment';
import { useEffect, useState } from 'react';


const Transactions = () => {
  const [transactions, setTransactions] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [selectFilter, setSelectFilter] = useState<any>(null);
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState<[]>([]);
  const [nextToken, setNextToken] = useState(null);


  const fetchTransactions = async () => {
    let filter: any = {}
    if (search) {
      filter = { paymentIntentId: { matchPhrasePrefix: `${search}` } }
    }

    try {
      const res = await API.graphql<any>({
        query: searchPayments,
        variables: { limit: LIMIT ,filter:filter,nextToken,sort:{direction:"desc",field :"createdAt"}},
      });

      setToken(res.data.searchPayments.nextToken);
      setTokens((prev):any => [...prev!, res.data.searchPayments.nextToken]);
      setTransactions(res?.data?.searchPayments?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    setIsLoading(true)
    setToken(null)
    let timer = setTimeout(()=>{
      fetchTransactions();
    },600)

    return ()=>clearTimeout(timer)
  }, [search,nextToken,selectFilter]);

return (
    <div className="row ">
      <h3 className='my-3'>Transactions</h3>
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
                <div className='input-group w-md-25 col-lg-3 col-md-4 col-12 p-6'>
                    <input className='form-control search rounded' type='search' value={search} onChange={(e) => {
                        setTokens([])
                        setSearch(e.target.value)
                    }} placeholder='Search by Payment ID' />
                </div>
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
                        <th>ID</th>
                        <th>Buyer Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th className='text-center'>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions?.length > 0 ? transactions?.map((item:any) => (
                        <tr key={item?.id}>
                         <td>{item?.paymentIntentId}</td>
                         <td>{item?.buyer?.name}</td>
                         <td>{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item?.amount/100)}</td>
                         <td>{moment(item?.createdAt).local().format("D-MMM-YY, HH:mm").toString()}</td>
                         <td align='center'>{item?.status}</td>
                        </tr>
                      )) :
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h4 className='m-0 text-muted py-4'>
                              No Transactions Found
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
            handleNext={()=> handleNext(setNextToken,setToken,token)}
            handlePrev={()=> handlePrev(setNextToken,setTokens,tokens)}
            length={tokens.length}
            token={token}
          />
        </div>
      </div>
    </div>
)}

export default Transactions;

const searchPayments = /* GraphQL */ `query SearchPayments(
    $filter: SearchablePaymentFilterInput
    $sort: [SearchablePaymentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePaymentAggregationInput]
  ) {
    searchPayments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        buyerId
        userId
        amount
        currency
        status
        paymentIntentId
        paymentIntent
        createdAt
        buyer{
            name
        }
      }
      nextToken
      total
    }
  }
  `;