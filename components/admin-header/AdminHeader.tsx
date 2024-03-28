'use client';
import { API, Auth } from 'aws-amplify';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const AdminHeader = () => {
    const [user, setUser] = useState<any>(null)
    const path = usePathname()

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(async (user: any) => {
            const userData: any = await API.graphql<any>({
                query: getUser,
                variables: {
                    id: user.attributes.sub
                }
            })
            const data = userData.data?.getUser;
            if(!data?.role)  {
                window.location.href = "/not-authorized"
                return
            }
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data))
        }).catch((error: any) => {
            console.error('error', error)
            Auth.signOut()
            window.localStorage.clear()
            window.location.href = "/not-authorized"
        })
    }, [])



    async function handleLogout() {
        try {
            await Auth.signOut()
            window.localStorage.clear()
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0 p-3">
                {user ?

                    <>
                        <p className='mt-3 ms-auto'>Welcome, {user?.name}</p>
                        <li className="dropdown ms-4">
                            <a
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {user?.photo ? (
                                    <img
                                        src={user?.photo}
                                        width={200}
                                        alt=""
                                        className="avatar avatar-md rounded-circle"
                                    />
                                ) : (
                                    <img
                                        src="https://wtx-cdn.s3.amazonaws.com/img/profile.png"
                                        width={200}
                                        alt=""
                                        className="avatar avatar-md rounded-circle"
                                    />
                                )}
                            </a>
                            <div className="dropdown-menu dropdown-menu-end p-0">
                                <div className="border-top px-1 py-1">
                                    <ul className="list-unstyled py-3">
                                        <li>
                                            <a className="dropdown-item" style={{ cursor: "pointer" }} href="/app/profile">
                                                Profile
                                            </a>
                                        </li>
                                        <li >
                                            <button className="dropdown-item" style={{ cursor: "pointer" }} onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </li>
                                        {/* <LogoutPage /> */}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </> : <>
                        {path === "/" ? <a href='/register' className='ms-auto btn btn-dark'>Signup</a> :
                            <a href='/login' className='ms-auto btn btn-dark'>Login</a>
                        }
                    </>}
            </ul>
        </div>
    );
};

export default AdminHeader;


const getUser = /* GraphQL */ `query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      photo
      phone
      email
      role
    }
  }
  `;