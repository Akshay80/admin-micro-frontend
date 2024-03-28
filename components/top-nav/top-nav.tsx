/* eslint-disable */

"use client"
import { API, Amplify, Auth, graphqlOperation } from "aws-amplify";
import moment from "moment";
import awsExports from '@/aws-exports';
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
const searchUsers = /* GraphQL */ `
  query SearchUsers(
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
`;
export interface TopNavProps { }

export function TopNav(props: TopNavProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    Amplify.configure(awsExports);
    fetchUser();
  }, [])
  useEffect(() => {
    fetchUser();
  }, []);
  const router=useRouter();
  const signOut = async () => {
    await Auth.signOut({ global: true }).then((res) => {
      router.push("/");
    });
  };
  async function fetchUser() {
    try {
      const cognito = await Auth.currentAuthenticatedUser();
      const res = await API.graphql<any>(
        graphqlOperation(searchUsers, {
          filter: { id: { eq: cognito.username } },
        })
      );
      setEmail(res?.data?.searchUsers?.items[0]?.email);
      setName(res?.data?.searchUsers?.items[0]?.name);
      setImage(res?.data?.searchUsers?.items[0]?.photo)
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-glass">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <a
              className="text-inherit d-block d-xl-none me-4"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-text-indent-right"
                viewBox="0 0 16 16"
              >
                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
              </svg>
            </a>

            {/* <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
          </div>
          <div>
            <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
              <li className="dropdown-center ">
                <a
                  className="position-relative btn-icon btn-ghost-secondary btn rounded-circle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-bell fs-5"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
                    2<span className="visually-hidden">unread messages</span>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg p-0 border-0 ">
                  <div
                    className="border-bottom p-5 d-flex
              justify-content-between align-items-center"
                  >
                    <div>
                      <h5 className="mb-1">Notifications</h5>
                      <p className="mb-0 small">You have 2 unread messages</p>
                    </div>
                    <a href="#!" className="text-muted"></a>
                    <a
                      href="#"
                      className="btn btn-ghost-secondary btn-icon rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Mark all as read"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-check2-all text-success"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"></path>
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"></path>
                      </svg>
                    </a>
                  </div>
                  <div data-simplebar="init" style={{ height: '250px' }}>
                    <div
                      className="simplebar-wrapper"
                      style={{ margin: '0px' }}
                    >
                      <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                      </div>
                      <div className="simplebar-mask">
                        <div
                          className="simplebar-offset"
                          style={{ right: '0px', bottom: '0px' }}
                        >
                          <div
                            className="simplebar-content-wrapper"
                            role="region"
                            aria-label="scrollable content"
                            style={{ height: 'auto', overflow: 'hidden' }}
                          >
                            <div
                              className="simplebar-content"
                              style={{ padding: '0px' }}
                            >
                              <ul className="list-group list-group-flush notification-list-scroll fs-6">
                                <li className="list-group-item px-5 py-4 list-group-item-action active">
                                  <a href="#!" className="text-muted">
                                    <div className="d-flex">
                                      <img
                                        src="../assets/images/avatar/avatar-1.jpg"
                                        alt=""
                                        className="avatar avatar-md rounded-circle "
                                      />
                                      <div className="ms-4">
                                        <p className="mb-1">
                                          <span className="text-dark">
                                            Your order is placed
                                          </span>{' '}
                                          waiting for shipping
                                        </p>
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            fill="currentColor"
                                            className="bi bi-clock text-muted"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                          </svg>
                                          <small className="ms-2">
                                            1 minute ago
                                          </small>
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="list-group-item  px-5 py-4 list-group-item-action">
                                  <a href="#!" className="text-muted">
                                    <div className="d-flex">
                                      <img
                                        src="../assets/images/avatar/avatar-5.jpg"
                                        alt=""
                                        className="avatar avatar-md rounded-circle "
                                      />
                                      <div className="ms-4">
                                        <p className="mb-1">
                                          <span className="text-dark">
                                            Jitu Chauhan{' '}
                                          </span>{' '}
                                          answered to your pending order list
                                          with notes
                                        </p>
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            fill="currentColor"
                                            className="bi bi-clock text-muted"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                          </svg>
                                          <small className="ms-2">
                                            2 days ago
                                          </small>
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="list-group-item px-5 py-4 list-group-item-action">
                                  <a href="#!" className="text-muted">
                                    <div className="d-flex">
                                      <img
                                        src="../assets/images/avatar/avatar-2.jpg"
                                        alt=""
                                        className="avatar avatar-md rounded-circle "
                                      />
                                      <div className="ms-4">
                                        <p className="mb-1">
                                          <span className="text-dark">
                                            You have new messages
                                          </span>{' '}
                                          2 unread messages
                                        </p>
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            fill="currentColor"
                                            className="bi bi-clock text-muted"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                          </svg>
                                          <small className="ms-2">
                                            3 days ago
                                          </small>
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="simplebar-placeholder"
                        style={{ width: '0px', height: '0px' }}
                      ></div>
                    </div>
                    <div
                      className="simplebar-track simplebar-horizontal"
                      style={{ visibility: 'hidden' }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ width: '0px', display: 'none' }}
                      ></div>
                    </div>
                    <div
                      className="simplebar-track simplebar-vertical"
                      style={{ visibility: 'hidden' }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ height: '0px', display: 'none' }}
                      ></div>
                    </div>
                  </div>
                  <div className="border-top px-5 py-4 text-center">
                    <a href="/notifications" className=" ">
                      View All
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown ms-4">
                <a
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={image}
                    alt=""
                    className="avatar avatar-md rounded-circle"
                  />
                </a>

                <div className="dropdown-menu dropdown-menu-end p-0">
                  <div className="lh-1 px-5 py-4 border-bottom">
                    <h5 className="mb-1 h6">{name}</h5>
                    <small>{email}</small>
                  </div>

                  <ul className="list-unstyled px-2 py-3">
                    <li>
                      <a className="dropdown-item" href="/dashboard">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                    </li>
                  </ul>
                  <div className="border-top px-5 py-3">
                    <p className="cursor-pointer" onClick={signOut}>Log Out</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
