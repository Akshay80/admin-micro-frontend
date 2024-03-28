"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import Spinner from "../../../libs/shared/ui/src/components/spinner/spinner";
import { API, Amplify, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import awsmobile from '@/aws-exports';
import { updateUser } from '../users/UserList';
import toast from 'react-hot-toast';
import { handleUploadFile } from '../../../components/utils/utils';
// import profiles from '../../public/Images/profile.svg'

const customGetUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
  }
`;


const Profile = () => {
    const [spinner, showSpinner] = useState<boolean>(true)
    const [profile, setProfile] = useState<any>({})
    const [password,setPassword] = useState<any>({old :"" ,new : "",confirm :""})

    useEffect(() => {
        Amplify.configure(awsmobile)
        handleGetUser()
    }, [])

    const handleGetUser = async () => {
        try {
            showSpinner(true)
        let user: any = await Auth.currentAuthenticatedUser()
        const currentUser = await API.graphql<any>({
            query: customGetUser,
            variables: {
                id: user?.username
            }
        })
        const data:any = currentUser.data?.getUser
        setProfile({
            id : data?.id,
            name: data?.name,
            photo: data?.photo,
            email: data?.email,
            role: data?.role,
        })
        } catch (error) {
            console.log(error)
            window.location.href = "/"
        }finally{showSpinner(false)}
        
    }

    const changeProfile = async(e:any) =>{
        try {
            const {type , url}:any  =await handleUploadFile(e)
            setProfile((prev:any)=>({...prev,photo:url}))
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e:any)=>{
        try {
            e.preventDefault()
            await API.graphql({query : updateUser,variables:{ input : {id : profile?.id,name : profile?.name,photo : profile?.photo}}})
            toast.success("Profile Updated")
            window.location.reload()
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong.")
        }
    }

    async function changePassword(e:any) {
        try {
        e.preventDefault()
        if(password?.new !== password?.confirm) return toast.error("Confirm Password doesn't match !")
          const user = await Auth.currentAuthenticatedUser();
          await Auth.changePassword(user, password?.old, password?.new);
          toast.success("Password changed successfully.")
        } catch (err:any) {
          console.log(err);
          toast.error(err.message)
        }
      }

    return (
            <section className="pt-5">
                <nav className="header">
                    <div className="container">
                        <div className="header-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="col">
                                    <h1 className="header-title">My Profile</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-7 col-lg-6'>
                            <div className='card mt-5'>
                                <div className='card-body'>
                                    <Spinner show={spinner}>
                                        <form onSubmit={handleSubmit}>
                                        <div className='d-flex'>
                                            <div className='mx-auto position-relative'>
                                                <img src={profile?.photo!} alt="profile" height={100} width={100} style={{ objectFit: "cover", borderRadius: "50%" }} />
                                                <label htmlFor="img-upload">
                                                <i className="bi bi-pencil-fill position-absolute bottom-0 end-0 text-success" style={{cursor:"pointer"}}></i>
                                                </label>
                                                <input type="file" id="img-upload" hidden onChange={(e)=>changeProfile(e)}/>
                                            </div>
                                        </div>
                                            <div className='form-group py-3'>
                                                <label className='form-label'>
                                                    Full Name<span className='text-danger'>*</span>
                                                </label>
                                                <input className='form-control' type='text' name='name' placeholder='e.g. John Doe' value={profile?.name} onChange={(e)=>setProfile((prev:any)=>({...prev,name:e.target.value}))}/>
                                            </div>
                                            <div className='form-group pb-3'>
                                                <label className='form-label'>Role<span className='text-danger'>*</span></label>
                                                <input className='form-control bg-light' type='text' name='title' value={profile?.role ? profile?.role : 'No Role'} disabled />
                                            </div>
                                            <div className='form-group pb-3'>
                                                <label className='form-label'>
                                                    Email Address<span className='text-danger'>*</span>
                                                </label>
                                                <input className='form-control bg-light' disabled type='text' name='email' placeholder='e.g. address@example.com' value={profile?.email} />
                                            </div>
                                            <div className='d-flex'>
                                            <button  className='btn btn-primary ms-auto'>Save</button> 
                                            </div>
                                        </form>
                                    </Spinner>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 col-lg-6 d-none d-lg-flex'>
                        <form className='card p-5 d-flex flex-col gap-2 mt-5' onSubmit={changePassword}>
                            <h4>Change Password</h4>
                            <label >Old Password <span className='text-danger'>*</span></label>
                            <input required className='form-control' value={password?.old} placeholder ="*******" type="text" onChange={(e)=>setPassword((prev:any)=>({...prev,old:e.target.value}))}/>
                            <label >New Password <span className='text-danger'>*</span></label>
                            <input required className='form-control' value={password?.new} onChange={(e)=>setPassword((prev:any)=>({...prev,new:e.target.value}))} placeholder="*******" type="text" />
                            <label >Confirm New Password <span className='text-danger'>*</span></label>
                            <input required className='form-control' value={password?.confirm} onChange={(e)=>setPassword((prev:any)=>({...prev,confirm:e.target.value}))} placeholder="*******" type="text" />
                            <button className='btn btn-primary'>Change</button>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Profile