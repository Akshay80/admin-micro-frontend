'use client'
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { API, Auth, Storage } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import "react-phone-input-2/lib/style.css"
import PhoneInput from "react-phone-input-2"
const Onboarding = () => {

    const [spinner, showSpinner] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<any>({
        name: "",
        email: '',
        phone: '',
    })
 
    const [profileImg, setProfileImg] = useState<any>("")
    const [cognitoData,setCognitoData] = useState<any>({})

    const handleChangeProfile = async (e: any) => {
        const toastId = toast.loading('Uploading...');
        try {
        e.preventDefault()
        if (e.target.files) {
            const file = e.target.files[0]
            const result: any = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
            const url = await Storage.get(result.key, { level: 'public' })
            let imgUrl = url.split('?')[0]

            setProfileImg(imgUrl)
            toast.success("Uploaded")
        }
        } catch (error) {
            toast.error("Failed to Uploaded.Try Again !")
        }finally{toast.dismiss(toastId)}
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: e.target.value,
        }));
    }


    const handleSubmit = async () => {
        showSpinner(true)
        try {
            await API.graphql({
                query: createUser,
                variables: {
                    input: {
                        id: cognitoData?.sub,
                        name: formData?.name,
                        email: cognitoData?.email,
                        photo : profileImg || null
                    },
                },
            })
            toast.success("Profile Updated.")
            window.location.href = "/sso"
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong !")
        }finally {showSpinner(false)}
    }
  

    useEffect(() => {
        setLoading(true)
        Auth.currentAuthenticatedUser().then((res:any)=>{
            setFormData((prev:any)=>({...prev,email : res.attributes.email}))
            setCognitoData(res?.attributes)
        }).catch(e=>{
            console.log(e)
        }).finally(()=>setLoading(false))
    }, [])

    if (loading) return <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
        <div className="spinner-border primary" role="status">
        </div>
    </div>


    return (
        <section className='row my-5'>
            <div className="col-md-6 mx-auto">
                <div>
                    <div>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                            <div className='form-group mt-3'>
                                <div>
                                    <div className='card p-3 my-3'>
                                        <h4 className='text-center bg-light p-2 rounded-1 mb-5'>Update Profile</h4>
                                        <div>
                                            {
                                                profileImg ?
                                                    <div className='pb-2'>
                                                        <img src={profileImg} alt='' className='avatar avatar-md rounded-circle' style={{ width: '110px', height: '106px', objectFit: "cover" }} />
                                                    </div>
                                                    :
                                                    <h1>
                                                        <img src='https://cdn.worldtradex.com/img/profile.png' alt='' className='avatar avatar-md rounded-circle' style={{ width: '110px', height: '106px' }} />
                                                    </h1>
                                            }
                                        </div>
                                        <div className='col-lg-6 mb-3'>
                                            <label className='text-dark'>Profile Image</label>
                                            <input name='image' className='form-control' accept='image/*' width={100} type='file' id='profile' onChange={(e) => handleChangeProfile(e)} />
                                        </div>

                                        <div className='form-group mb-3'>
                                            <label className='text-dark'>Name <span className='text-danger'>*</span></label>
                                            <input type='text' required className='form-control' value={formData?.name} onChange={(e) => handleChange(e, 'name')} placeholder='Name' />
                                        </div>
                                        <div className='form-group mb-3'>
                                            <label className='text-dark'>Email <span className='text-danger'>*</span></label>
                                            <input disabled type='text' required className='form-control' value={formData?.email} onChange={(e) => handleChange(e, 'email')} placeholder='Email' />
                                        </div>

                                        <div className='my-1 text-dark mb-3'>
                                            <label>Business Phone</label>
                                            <div className='input-group'>
                                                <PhoneInput
                                                    inputProps={{
                                                        name: "phone",
                                                        required: false,
                                                        autoFocus: false,
                                                    }}
                                                    country={"us"}
                                                    value={formData?.business_phone}
                                                    onChange={(phone: any) => setFormData((prev: any) => ({ ...prev, business_phone: "+" + phone }))}
                                                />
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    <div className='mt-3'>
                                        <Spinner show={spinner}>
                                            <button className='btn btn-dark w-100' type='submit'>Create Account</button>
                                        </Spinner>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Onboarding;

const createUser = /* GraphQL */ `mutation CreateUser(
    $input: CreateUserInput!
  ) {
    createUser(input: $input) {
      id
    }
  }
`