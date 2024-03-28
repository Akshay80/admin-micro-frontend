'use client'

import { checkAuth, handleUploadFile } from "../../../../components/utils/utils"
import { API } from "aws-amplify"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function CreateCategory() {
    const {id}:any = useParams()

    const [name,setName] = useState("")
    const [img,setImg] = useState<any>(null)
    const [submitting,setSubmitting] = useState(false)
    const handleUpload = async (e: any) => {
        try {
            if (!e.target.files[0].type.includes("image")) {
                toast.error("Only Images are allowed !")
                return;
            }
            const { url }: any = await handleUploadFile(e)
            setImg(url)
        } catch (error) {

        }
    }

    const handleSubmit = async (e:any) =>{
        e.preventDefault()
        setSubmitting(true)
        let loader = toast.loading("Loading...")
        try {
            let input:any = {
                id : name.split(" ").join("-").toLowerCase(),
                name ,
                image : img || null,
                active : true
            }

            if(id) input = {...input , id}

            await API.graphql({query : id ? updateProductCategory: createProductCategory ,variables:{input }})
            toast.success(`Category ${id ? "updated" : "created"} successfully.`)
            window.location.href = "/app/categories"
        } catch (error) {
           console.log(error) 
           toast.error("Something went wrong!")
        }finally{
            toast.dismiss(loader)
            setSubmitting(false)}
    }

    const getCategory = async ()=>{
        const loader = toast.loading("Loading...")
        try {
            const res:any = await API.graphql({query : getProductCategory, variables:{id }})
            const data = res.data.getProductCategory
            setName(data.name)
            setImg(data.image)
        } catch (error) {
            console.log(error)
        }finally{toast.dismiss(loader)}
    }

    useEffect(() => {
      checkAuth()
        id && getCategory()
    }, [id])
    
  return (
    <div className="row">
        <div className="col-8 mx-auto">
           <h3 className="my-3">{id ? "Edit" :  "Add"} Category</h3>
            <div className="card p-5">
                <form onSubmit={handleSubmit}>
                      <div className="form-group pb-3">
                          <label className="form-label">Category Name <span className="text-danger">*</span></label>
                          <input required value={name} className="form-control " type="text" placeholder ="Category Name" name="productImage" onChange={(e)=>setName(e.target.value)}/>
                      </div>
                      <div className="form-group pb-3">
                          <label className="form-label">Image</label>
                          <input className="form-control" accept="image/*" type="file" name="productImage" onChange={handleUpload}/>
                        {img &&  <img src={img} height={100} width={160} className="rounded mt-2" style={{objectFit:"cover"}} alt="categoryimg" />}
                      </div>
                      <div className="d-flex gap-2">
                      <button type="button" className="btn btn-light ms-auto" onClick={()=>window.location.href = "/app/categories"}>Go back</button>
                      <button type="submit" className="btn btn-primary" disabled={submitting}>Save</button>
                      </div>
                </form>
            </div>
        </div>
    </div>
  )
}

const createProductCategory = /* GraphQL */ `mutation CreateProductCategory(
    $input: CreateProductCategoryInput!
  ) {
    createProductCategory(input: $input) {
      id
    }
  }
  `;

  const getProductCategory = /* GraphQL */ `query GetProductCategory($id: ID!) {
    getProductCategory(id: $id) {
        id
        name
        image
    }
  }`

  const updateProductCategory = /* GraphQL */ `mutation UpdateProductCategory(
    $input: UpdateProductCategoryInput!
  ) {
    updateProductCategory(input: $input) {
      id
    }
  }
  `