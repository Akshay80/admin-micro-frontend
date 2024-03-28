'use client'
import Spinner from '../../../../../libs/shared/ui/src/components/spinner/spinner';
import { checkAuthStatus } from '../../../../../components/utils/utils';
import { API } from 'aws-amplify';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const SellerProfile = () => {
    const [seller, setSeller] = useState<any>({})
    const [address, setAddress] = useState<any>({})
    const [imgs, setImgs] = useState<any>([])
    const [certificates,setCertificates] = useState<any>([])
    const [spinner, showSpinner] = useState<boolean>(true)
    const [docx,setDocx] = useState<any>([])
    const {id} = useParams()


    const fetchSeller = async () => {
        showSpinner(true)
        try {
          const res = await API.graphql<any>({
            query: customGetSeller,
            variables: { id }
          });

          const data = res.data.getSeller
          setSeller(data)
          if(data?.documents) setDocx(JSON.parse(data?.documents))
          if(data?.address) setAddress(JSON?.parse(data?.address))
          if(data?.images) setImgs(JSON?.parse(data?.images)?.gallery)
          if(data?.images) setCertificates(JSON?.parse(data?.images)?.certificates)
        } catch (error) {
            console.log("error", error);
        }finally{showSpinner(false)}
    };
    const handleVerify = async (verified:boolean) =>{
      try{
      if(checkAuthStatus() === false) return toast.error("User doesn't have access !")
        await API.graphql({query : updateSeller, variables:{input :{id,verified : verified,active:verified}}})
        setSeller((prev:any)=>({...prev,verified : verified}))
        toast.success(`Seller ${verified ? "Verified" : "Rejected"}.`)
      }catch(e){
        console.log(e)
        toast.error("Something went wrong !")
      }
    }
  

    useEffect(() => {
        fetchSeller()
    }, [id])

    return (
      <Spinner show={spinner}>
        <div className='row' style={{marginBottom:"3rem"}}>
          <div className='col-8 mx-auto'>
            {seller?.verified === null && (
              <div className='d-flex my-2 gap-2'>
              <button className='btn btn-primary ms-auto' onClick={()=>handleVerify(true)}>Verify</button>
              <button className='btn btn-danger' onClick={()=>handleVerify(false)}>Reject</button>
            </div>
            )}
            
            <div className='card'>
              <div className='p-5 p-5 d-flex flex-row  flex-wrap gap-3'>
              <div className='flex-grow-1'>
                <h2>{seller?.name}</h2>
                <div className='mt-5'>
                  <p className='m-0'>Email : {seller?.email}</p>
                  <p className='m-0'>Phone : {seller?.phone}</p>
                  <div>Address
                    <div className='p-3 card' style={{width:"fit-content"}}>
                      {address?.address_line1 ? <>
                        <p className='m-0'>{address?.address_line1}</p>
                      <p className='m-0'>{address?.address_line2}</p>
                      <p className='m-0'>{address?.city}</p>
                      <p className='m-0'>{address?.state}</p>
                      <p className='m-0'>{address?.country}</p>
                      <p className='m-0'>{address?.postal_code}</p>
                      </> : <p>No Address found</p>}
                      </div>
                  </div>
                  
                </div>
              </div>
              <img src={seller?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"} className='img-fluid rounded' style={{objectFit:"cover"}} height={300} width={360} alt="seller-profile" />
              </div>
             {seller?.verified && <div className='text-success text-center bg-light p-2'><i className="bi bi-patch-check-fill"></i> Verified</div>} 
             {seller?.verified === null && <div className='text-center text-warning p-2'><i className="bi bi-hourglass-bottom"></i> Pending</div>} 
             {seller?.verified === false && <div className='text-center bg-danger text-white p-2'><i className="bi bi-exclamation-circle-fill"></i> Rejected</div>} 
            </div>
            {seller?.profile && (
              <>
                <h4 className='mt-3'>About the Company</h4>
                <p className='card p-3'>{seller?.profile}</p>
              </>
            )}
            {docx?.length > 0 && (
              <>
                <h4 className='mt-3'>KYC Documents</h4>
                <div>
                  {docx.map((doc: any, idx: any) => (
                    <div key={idx} className='card p-4 my-2 text-center' style={{width:"fit-content"}}>
                      <p className='m-0'>{doc?.documentName}</p>
                      <div className='d-flex flex-row gap-2'>
                        {doc?.medias?.map((item: any) => (
                          <div key={item?.url}>
                            <a target='_blank' href={item?.url}>{item?.type === "image" ? <img src={item?.url} alt="cert" className=' rounded' height={100} width={200} style={{objectFit:'cover'}}/>
                              : <img src={"https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png"} alt="cert" className='img-fluid rounded' width={100} />}</a>
                          </div>
                        ))}
                      </div>
                      <p className='m-0'>{doc?.documentNumber}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {certificates?.length > 0 && (
              <>
                <h4 className='mt-3'>Awards and Achievements</h4>
                <div className='d-flex flex-wrap gap-3'>
                  {certificates?.map((item: any) => (
                    <div key={item?.url}>
                      <a target='_blank' href={item?.url}><img src={item?.type === "image" ? item?.url : "https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png"} alt="cert" style={item?.type === "image" ? { objectFit: "cover" } : { objectFit: "contain" }} className='rounded' height={100} width={200} /></a>
                    </div>
                  ))}
                </div>
              </>
            )}
            {imgs?.length > 0 && (
              <>
                <h4 className='mt-3'>Other Images and Videos</h4>
                <div className='d-flex gap-1 flex-wrap'>
                  {imgs?.map((item: any, index: any) => (
                    (item?.type === 'video') ?
                      <a href={item?.url} target='_blank' key={index}>
                        <video autoPlay muted loop className='d-block ' style={{ width: '200px', height: '100px' }}>
                          <source src={item?.url} type='video/mp4' />
                        </video>
                      </a>
                      :
                      <div key={index}>
                        <div className='d-flex gap-2' >
                          <a href={item?.url} target='_blank'>
                            <img alt='product_image' src={item?.url} height={100} width={160} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} />
                          </a>
                        </div>
                      </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Spinner>
    )
}

export default SellerProfile

const customGetSeller = `
  query GetSeller($id: ID!) {
    getSeller(id: $id) {
      active
      verified
      name
      images
      profile
      rating
      updatedAt
      createdAt
      documents
      email
      id
      image
      address
      phone
      products {
        items {
          active
          createdAt
          productCategory {
            name
          }
          id
          image
          listPrice
          name
          tierPrice
          unitPrice
        }
      }
    }
  }
`;
const updateSeller = /* GraphQL */ `mutation UpdateSeller(
  $input: UpdateSellerInput!
  $condition: ModelSellerConditionInput
) {
  updateSeller(input: $input, condition: $condition) {
    id
  }
}
` 