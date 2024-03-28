'use client'

import { checkAuth, handleSearchCategories, handleUploadFile, selectColor } from "../../../../components/utils/utils"
import { API } from "aws-amplify"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import AsyncSelect from 'react-select/async';

export default function CreateSubCategory() {
    const {id}:any = useParams()
    const [submitting,setSubmitting] = useState(false)
    const [subcategory,setSubCategory] = useState<any>({
      name : "",
      category:null,
      img:null
    })

    const handleUpload = async (e: any) => {
        try {
            if (!e.target.files[0].type.includes("image")) {
                toast.error("Only Images are allowed !")
                return;
            }
            const { url }: any = await handleUploadFile(e)
            setSubCategory((prev:any)=>({...prev,img : url}))
        } catch (error) {

        }
    }

    const handleSubmit = async (e:any) =>{
        e.preventDefault()
        setSubmitting(true)
        let loader = toast.loading("Loading...")
        try {
            let input:any = {
                id : subcategory?.name.split(" ").join("-").toLowerCase(),
                name :subcategory?.name,
                image : subcategory?.img || null,
                productCategoryId : subcategory?.category?.value,
                active : true
            }

            if(id) input = {...input , id}

            await API.graphql({query : id ? updateProductSubCategory: createProductSubCategory ,variables:{input }})
            toast.success(`Subcategory ${id ? "updated" : "created"} successfully.`)
            window.location.href = "/app/subcategories"
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
            const res:any = await API.graphql({query : getProductSubCategory, variables:{id }})
            const data = res.data.getProductSubCategory
            setSubCategory({name : data?.name,img:data?.image,category :{label : data?.productCategory?.name , value : data?.productCategoryId} })
            console.log(res)
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
            <h3 className="my-3">{id ? "Edit" :  "Add"} Subcategory</h3>
            <div className="card p-5">
                <form onSubmit={handleSubmit}>
                      <div className="form-group pb-3">
                          <label className="form-label">Subcategory Name <span className="text-danger">*</span></label>
                          <input required value={subcategory?.name} className="form-control " type="text" placeholder ="Subcategory Name" name="productImage" onChange={(e)=>setSubCategory((prev:any)=>({...prev,name:e.target.value}))}/>
                      </div>
                      <div className="form-group pb-3">
                          <label className="form-label">Category Name <span className="text-danger">*</span></label>
                          <AsyncSelect defaultValue={subcategory?.category} key={subcategory?.category} theme={selectColor} required placeholder="Select Category" cacheOptions loadOptions={handleSearchCategories} defaultOptions onChange={(e)=>{
                          setSubCategory((prev:any)=>({...prev,category : e}))
                        }}/>
                      </div>
                      <div className="form-group pb-3">
                          <label className="form-label">Image</label>
                          <input className="form-control" accept="image/*" type="file" name="productImage" onChange={handleUpload}/>
                        {subcategory?.img &&  <img src={subcategory?.img } height={100} width={160} className="rounded mt-2" style={{objectFit:"cover"}} alt="categoryimg" />}
                      </div>
                      <div className="d-flex gap-2">
                      <button type="button" className="btn btn-light ms-auto" onClick={()=>window.location.href = "/app/subcategories"}>Go Back</button>
                      <button type="submit" className="btn btn-primary" disabled={submitting}>Save</button>
                      </div>
                </form>
            </div>
        </div>
    </div>
  )
}

const createProductSubCategory = /* GraphQL */ `mutation CreateProductSubCategory(
  $input: CreateProductSubCategoryInput!
  $condition: ModelProductSubCategoryConditionInput
) {
  createProductSubCategory(input: $input, condition: $condition) {
    id
    }
}
`;

const getProductSubCategory = /* GraphQL */ `query GetProductSubCategory($id: ID!) {
    getProductSubCategory(id: $id) {
      id
      name
      image
      active
      sort
      productCategoryId
      productCategory {
        name
        image
      }
    }
  }
  `;

   const updateProductSubCategory = /* GraphQL */ `mutation UpdateProductSubCategory(
    $input: UpdateProductSubCategoryInput!
  ) {
    updateProductSubCategory(input: $input) {
      id
    }
  }
  `;

  const searchProductCategories = /* GraphQL */ `query SearchProductCategories(
    $filter: SearchableProductCategoryFilterInput
    $sort: [SearchableProductCategorySortInput]
    $limit: Int
    $nextToken: String
    ) {
    searchProductCategories(
        filter: $filter
        sort: $sort
        limit: $limit
        nextToken: $nextToken
    ) {
        items {
        id
        name
        }
    }
    }
    `