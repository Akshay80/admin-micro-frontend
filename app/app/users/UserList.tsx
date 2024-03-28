"use client"
import Pagination from '../../../components/pagination';
import TableHeader from '../../../components/table-header/TableHeader';
import { LIMIT, handleNext, handlePrev, selectColor } from '../../../components/utils/utils';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Select from 'react-select';


const Users = () => {
  const [users, setUsers] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [token, setToken] = useState(null);
  const [tokens, setTokens] = useState<[]>([]);
  const [nextToken, setNextToken] = useState(null);
  const [total, setTotal] = useState(0)
  const [allow,setAllow] = useState(false)

  const fetchUsers = async () => {
    let filter: any = {}
    if (search) {
      filter = {...filter, name: { matchPhrasePrefix: search },email: { matchPhrasePrefix: search } }
    }

    try {
      const res = await API.graphql<any>({
        query: searchUsers,
        variables: { limit: LIMIT, filter: filter, nextToken, sort: { direction: "desc", field: "createdAt" } },
      });
      setTotal(res.data.searchUsers.total)
      setToken(res.data.searchUsers.nextToken);
      setTokens((prev): any => [...prev!, res.data.searchUsers.nextToken]);

      setUsers(res?.data?.searchUsers?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  
  const toggleRole = async (role:string,id:string)=>{
    try {
      if(!allow) return toast.error("No access ...")
        await API.graphql({query : updateUser,variables:{input : {id,role}}})
        let idx = users.findIndex((item:any)=>item.id === id)
        let temp = structuredClone(users)
        temp[idx].role = role
        toast.success("User Role updated.")
    } catch (error) {
      console.log(error)
      toast.error("Failed to update role !")
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setToken(null)
    let timer = setTimeout(() => {
      fetchUsers();
    }, 600)

    return () => clearTimeout(timer)
  }, [search, nextToken]);


  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        let user = JSON.parse(window.localStorage.getItem("user") || '');
        if(user?.role === "OWNER") setAllow(true)
      } else {
        console.log("not avaialable");
      }
    } catch (error) {
      console.log(error)
    }
   
  }, []);

  if(!allow) return <p>Not Authorized...</p>

  return (
    <div className="row ">
      <div className='d-flex justify-content-between my-3'>
        <h3>Users</h3>
        {/* <button className='btn btn-primary' onClick={() => window.location.href = "/app/subcategories/create"}>Create Subcategory</button> */}
      </div>
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <TableHeader setSearch={setSearch} setTokens={setTokens}  search={search}/>
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
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.length > 0 ? users?.map((item: any) => (
                        <tr key={item?.id}>
                          <td><img src={item?.photo || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} alt='user_img' height={40} width={40} style={{ objectFit: "cover", borderRadius: 7 }} /> <span className='ms-2'>{item?.name}</span></td>

                          <td>{item?.email}</td>
                          <td>{item?.phone}</td>

                          <td><Select theme={selectColor} isDisabled={JSON.parse(window.localStorage.getItem("user") || '')?.role !== "OWNER"} defaultValue={{label: item?.role,value : item?.role}} 
                          options={[{ label: "OWNER", value: "OWNER" }, { label: "EDITOR", value: "EDITOR" }, { label: "VIEWER", value: "VIEWER" }]}
                          onChange={(e)=>{toggleRole(e?.value,item?.id)}}
                          /></td>
                        </tr>
                      )) :
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h4 className='m-0 text-muted py-4'>
                              No Users Found
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

export default Users;

export const searchUsers = /* GraphQL */ `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: [SearchableUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableUserAggregationInput]
) {
  searchUsers(
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
      photo
      phone
      email
      role
      deleted
    }
    nextToken
    total
    __typename
  }
}
`;


export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
  }
}
` ;