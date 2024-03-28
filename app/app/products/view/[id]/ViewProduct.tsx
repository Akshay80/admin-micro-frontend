//@ts-nocheck
'use client'

import { GraphQLQuery } from '@aws-amplify/api';
import { API, Storage } from 'aws-amplify';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';

const ViewProduct = () => {
  const {id} = useParams()
  const [loading,setLoading] = useState(id ? true : false)
  const [submit,setSubmit]  = useState(false)

  const [formData, setFormData] = useState<any>({
    category: {},
    subcategory: {},
    productName: '',
    productImage: '',
    imageVideos: [],
    description: '',
    unitType: '',
    availableQuantity: '',
    saleType: 'saleByQuantity',
    taxExempt: '',
    actualPrice: '',
    discountedPrice: '',
    certificates: [],
    dispatchTime: ''
  })

  const [medias,setMedias] = useState([])

  const [attributes, setAttributes] = useState([
    {
      name: "Manufactured Date",
      value: "",
      type: "date",
    },
    {
      name: "Expiry Date",
      value: "",
      type: "date",
    },
    {
      name: "SKU",
      value: "",
    },
    {
      name: "Brand",
      value: "",
    },

    {
      name: "Storage Type",
      value: "",
      type: "select",
    },
    {
      name: "Shelf Life",
      value: "",
      type: "select",
    },
    {
      name: "Place of Origin",
      value: "",
      type: "select",
    },
    {
      name: "Product Type",
      value: "",
      type: "select",
    },
    {
      name: "Cultivation Type",
      value: "",
      type: "select",
    },
    {
      name: "Variety",
      value: "",
      type: "select",
    },
    {
      name: "Packing",
      value: "",
      type: "select",
    },
  ])

  const [newAttr, setNewAttr] = useState({
    name: "",
    value: "",
    notEditable: true,
  });

  const [keywords,setKeywords] = useState([])

  const [tierPrice,setTierPrice] = useState<any>([{
    minQty: "",
    maxQty: "",
    price: "",
    discountPrice: "",
  }])


  const selectColor = (theme:any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      text: "orangered",
      primary25: "#f0f0f0",
      primary: "#00000",
    },
  })

  const handleChange = async (e: any) => {
    if (e.target.name === 'productImage') {
      const {type , url}:any = await handleUploadFile(e)
      setFormData((prev:any) => ({ ...prev, [e.target.name]: url }))
      return
    }

    if (e.target.name === 'imageVideos') {
      const {type , url}: any = await handleUploadFile(e)
      if (url) {
        const temp: any = structuredClone(medias)
        temp.push({ id: url, name: url.split('/')[url.split('/')?.length - 1], type: type, url: url })
        setMedias(temp)
      }
      return
    }

    if (e.target.name === 'certificates') {
      const {type , url}: any = await handleUploadFile(e)
      if (url) {
        const temp: any = []
        if (formData?.certificates?.length > 0) {
          formData?.certificates?.forEach((item: any) => {
            if (item) {
              temp.push({ id: item?.url, name: item?.url.split('/')[item?.url.split('/')?.length - 1], type: type, url: item?.url })
            }
          })
        }
        temp.push({ id: url, name: url.split('/')[url.split('/')?.length - 1], type: type, url: url })
        setFormData((prev: any) => ({ ...prev, [e.target.name]: temp }))
      }
      return
    }
    setFormData((prev:any) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setSubmit(true)
    const toastId =toast.loading("Loading...")

    try {
      let input:any = {
        active: false,
        attributes: JSON.stringify(attributes),
        description: formData?.description,
        documents: JSON.stringify(formData?.certificates),
        image: formData?.productImage,
        images: JSON.stringify(medias),
        keywords:keywords?.map((item:any)=>item.value),
        listPrice:  formData?.saleType === "saleByQuantity" ? Number(formData?.discountedPrice) : Number(tierPrice.at(-1).discountPrice),
        name: formData?.productName,
        productCategoryId: formData?.category?.value,
        productSubCategoryId: formData?.subcategory?.value,
        // sellerId: currentSellerId,
        taxExempt: formData?.taxExempt === 'no' ? false : true,
        unitPrice: formData?.saleType === "saleByQuantity" ? Number(formData?.actualPrice) : Number(tierPrice.at(-1).price),
        unitType: formData?.unitType,
        tierPrice: formData?.saleType === "saleByQuantity" ? null : JSON.stringify(tierPrice),
        stock:formData?.availableQuantity,
        leadTime:formData?.dispatchTime
      }
      if(id) input = {...input,id:id}
      await API.graphql<GraphQLQuery<any>>({
        query: id ? updateProduct : createProduct,
        variables: {
          input: input
        }
      })

      window.location.href = "/app/product"
      toast.success(`Product ${id ? "updated" : "added"} successfully.`)

    } catch (error) {
      toast.dismiss(toastId)
      toast.error("Something went wrong !")
      console.log(error)
    }finally{{
      toast.dismiss(toastId)
      setSubmit(false)}}
  }

  const removeCertificate = (id: any) => {
    const filter = formData.certificates?.filter((item: any) => item !== id)
    setFormData((prev:any) => ({ ...prev, certificates: filter }))
  }

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let toastID = toast.loading("Uploading...")
    try {
    e.preventDefault()
    if (e.target.files) {
      const file = e.target.files[0]
      const stored = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
      const url = await Storage.get(stored.key, { level: 'public' })
      const splitUrl = url.split('?')[0]
      return {type : file?.type.substring(0, file?.type.indexOf("/")) , url : splitUrl}
    }
    } catch (error) {
      toast.error("Failed to Upload.Try again !")
    }finally{toast.dismiss(toastID)}
    
  }

  async function getProductData() {
    try {
      setLoading(true)
      let res :any = await API.graphql({query : getProduct ,variables : {id }})
      const data:any = res.data.getProduct
      setFormData({
        category: {label : data?.productCategory?.name, value : data?.productCategoryId},
        subcategory: {label : data?.productSubCategory?.name , value:data?.productSubCategoryId},
        productName: data?.name,
        productImage: data?.image,
        imageVideos: data?.images ? JSON.parse(data?.images) : [],
        description: data?.description,
        unitType: data?.unitType,
        availableQuantity: data?.stock,
        saleType: data?.tierPrice && JSON.parse(data?.tierPrice)?.length > 0 ? "saleByBulk" : "saleByQuantity",
        taxExempt: data?.taxExempt ? "yes" : "no",
        actualPrice: data?.unitPrice || 0,
        discountedPrice: data?.listPrice || 0,
        certificates: data?.documents ? JSON.parse(data?.documents) : [],
        dispatchTime: data?.leadTime
      })
      if(data?.images){
        setMedias(JSON.parse(data?.images))
      }
      if(data?.attributes){
        let temp = JSON.parse(data?.attributes)
        temp = temp.filter((item:any) => item.value !== "")
        setAttributes(temp)
      }
      let keys = data?.keywords.map((item:any)=>{
        return {label : item,value  : item}
      })
      setKeywords(keys)
      if(data?.tierPrice){
        setTierPrice(JSON.parse(data?.tierPrice))
      }
    } catch (error) {
      console.log(error)
    }finally{setLoading(false)}
  }


  const filterCategories = async (inputValue: any) => {
    let filter:any;
    if (inputValue.length !== 0) {
        filter = {
            or: [
                {name: {wildcard: "*" + inputValue + "*",},},
                {name: {matchPhrasePrefix: inputValue,},},
            ],
        };
    }

    let res: any = await API.graphql({
        query: searchProductCategories,
        variables: {
            filter: filter,
        },
    });
    let values = res.data.searchProductCategories.items.map((item: any) => {
        return { label: item.name, value: item.id };
    });
    return values;
};


  const handleSearchCategories: any = (inputValue: any) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterCategories(inputValue));
        }, 1000);
    });

  const filterSubCategories = async (inputValue: any) => {
    let filter: any;
      filter = {
        productCategoryId : {eq  : formData?.category?.value},
        or: [
          {name: {wildcard: "*" + inputValue + "*",},},
          {name: {matchPhrasePrefix: inputValue,},},
        ],
      }; 
    let res: any = await API.graphql({
      query: searchProductSubCategories,
      variables: {
        filter: filter,
      },
    });
    let values = res.data.searchProductSubCategories.items.map((item: any) => {
      return { label: item.name, value: item.id };
    });
    return values;
  };

  const handleSearchSubCategories: any = (inputValue: any) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterSubCategories(inputValue));
      }, 1000);
  });

 
//   useEffect(() => {
//     let currentSeller = JSON.parse(window.localStorage.getItem("seller") || '');
//     setCurrentSellerId(currentSeller.sellerId)
//   }, []);

  useEffect(() => {
    if (id) {
      getProductData()
    }
  }, [id])


  if (loading) return <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
    <div className="spinner-border primary" role="status">
    </div>
  </div>

  return (
    <div className='row'>
    <div className='col-md-8 mx-auto'>
      <div className="row mb-8">
        <div className="col-md-12">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              {/* <h2>{id ? "View" : "Create"} Product</h2> */}
              <h2>Product Details</h2>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label">Category</label>
               <AsyncSelect isDisabled defaultValue={formData?.category} theme={selectColor} required placeholder="Select Category" cacheOptions loadOptions={handleSearchCategories} defaultOptions onChange={(e)=>{
                setFormData((prev:any)=>({...prev,category : e}))
               }}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label">Subcategory</label>
                 <AsyncSelect isDisabled theme={selectColor} key={formData?.category?.value} placeholder="Select Subcategory" cacheOptions loadOptions={handleSearchSubCategories} required defaultOptions defaultValue={formData?.subcategory} onChange={(e)=>{
                setFormData((prev:any)=>({...prev,subcategory : e}))
               }}/>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group pb-3">
              <label className="form-label">Product Name</label>
              <input className="form-control" disabled  type="text" name="productName" value={formData?.productName} onChange={handleChange} required />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group pb-3">
              <label className="form-label">Product Hero Image</label>
              {/* <input className="form-control " type="file" name="productImage" onChange={handleChange} required={!formData?.productImage} /> */}
            </div>
          </div>
          {formData?.productImage &&
            <div className="col-lg-12 pb-3">
              <a target='_blank' href={formData?.productImage } className="position-relative w-10 ">
                <img src={formData?.productImage} alt="Product Image" height={100} width={160} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }}></img>
              </a>
            </div>
          }
          <div className="col-lg-12">
            <div className="form-group pb-3">
              <label className="form-label">Other Images and Videos</label>
              {/* <input className="form-control " type="file" accept='image/*,video/*' name="imageVideos" onChange={handleChange} /> */}
            </div>
          </div>
          
            <div className="col-lg-12 pb-3 d-flex flex-wrap gap-2">
              {medias?.map((item: any, index: any) => (
                (item?.type === 'image') ?
                  <div key={index} className='position-relative '>
                      <a href={item?.url} target='_blank'>
                        <img alt='product_image' src={item?.url} height={100} width={160} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} />
                      </a>
                      {/* <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" key={item?.id} onClick={() => {
                        let temp = structuredClone(medias)
                        setMedias(temp.filter((x:any) => x?.url !== item?.url))
                      }}></i> */}
                  </div>
                  :
                  <div key={index} className='position-relative'>
                    <a href={item?.url} target='_blank' key={index}>
                      <video autoPlay muted loop className='d-block ' style={{ width: '160px', height: '100px' }}>
                        <source src={item?.url} type='video/mp4' />
                      </video>
                    </a>
                    {/* <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" key={item?.url} onClick={() => {
                      let temp = structuredClone(medias)
                      setMedias(temp.filter((x: any) => x?.url !== item?.url))
                    }}></i> */}
                  </div>
              ))}
          </div>
          <div className="col-lg-12">
            <div className="form-group pb-3">
              <label className="form-label">Product Description</label>
              <textarea disabled className="form-control"rows={7}  name="description" value={formData?.description} onChange={handleChange} required></textarea>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="col-lg-12">
            <label className="form-label">Key Specification</label>
            <p style={{ fontSize: '10px' }}>Product attributes are quantifiable or descriptive aspects of a product (such as, color). For example, if you were to create an attribute for color, with the values of blue, green, yellow, and so on, you may want to apply this attribute to shirts, which you sell in various colors (you can adjust a price or weight for any of existing attribute values). You can add attribute for your product using existing list of attributes, or if you need to create a new one.</p>
            <div className="row">
                {attributes?.map((item: any, index: any) => (
                  <div className="col-lg-6" key={index}>
                    <div className="form-group pb-3">
                      <label className="form-label">{item?.name}  </label>
                      {item?.type === "date" ? <input disabled className="form-control" required type="date" value={item.value}
                        onChange={(e) => {
                          let temp = [...attributes];
                          temp[index].value = e.target.value;
                          setAttributes(temp);
                        }}
                      /> : <input className="form-control" disabled   placeholder ={item?.name} type="text" value={item?.value}
                        onChange={(e) => {
                          let temp = [...attributes];
                          temp[index].value = e.target.value;
                          setAttributes(temp);
                        }}
                      />}
                      {/* {index > 10 && (
                      <div className='text-end text-danger cursor-pointer' onClick={()=>{
                        let temp = [...attributes]
                        temp = temp.filter((x: any,idx:number) => idx !== index)
                        setAttributes(temp)
                      }}><i className="bi bi-trash"></i></div> */}
                    {/* )} */}
                    </div>
              </div>
              ))}
            </div>
            {/* <div className='row'>
                <div className="col-lg-6">
                  <div className="form-group pb-3">
                    <label className="form-label">Attribute</label>
                    <input className="form-control" type="text" name="key" value={newAttr?.name} placeholder="Eg. Color" onChange={(e)=>setNewAttr((prev)=>({...prev,name : e.target.value}))} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group pb-3">
                    <label className="form-label">Value</label>
                    <input className="form-control" type="text" name="value" value={newAttr?.value} placeholder="Eg. Green" onChange={(e)=>setNewAttr((prev)=>({...prev,value : e.target.value}))} />
                  </div>
                </div>
                <div className="d-flex justify-content-end"><button className="btn btn-dark w-auto" type="button"
                disabled={newAttr?.name === "" || newAttr?.value === ""}
                onClick={()=>{
                  setAttributes((prev:any)=>([...prev,newAttr]))
                  setNewAttr({name: "",
                  value: "",
                  notEditable: true,})
                }}>Save</button></div>
              </div> */}
            </div>
        </div>

        <div className="col-lg-12 pt-3">
          <div className="form-group pb-3">
            <label className="form-label">Product Keywords</label>
            <CreatableSelect isDisabled required={true} isMulti theme={selectColor} defaultValue={keywords} onChange={(e:any)=>setKeywords(e)}/>
          </div>
        </div>
        <h4>Trade Information</h4>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label">Unit type</label>
              <select disabled className="form-control" name="unitType" value={formData?.unitType} onChange={handleChange} required  placeholder='Unit Type'>
                <option value={""} disabled>Select type</option>
                <option value={'KG'}>KG</option>
                <option value={'PACK'}>Pack</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label">Available Quantity</label>
              <input disabled className="form-control" type="number" name="availableQuantity" value={formData?.availableQuantity} onChange={handleChange} required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label">Sale Type </label><br />
              <div className="form-check form-check-inline">
                <input disabled className="form-check-input" type="radio" name="saleType" id="saleType1" value={'saleByQuantity'}
                  checked={formData?.saleType === 'saleByQuantity' ? true : false} onChange={handleChange} />
                <label className="form-check-label" htmlFor="saleType1">
                  Sale by quantity
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input disabled className="form-check-input" type="radio" name="saleType" id="saleType2" value={'saleByBulk'} checked={formData?.saleType === 'saleByBulk' ? true : false} onChange={handleChange} />
                <label className="form-check-label" htmlFor="saleType2">
                  Sale by bulk
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label m-0">Tax exempt </label>
              <p className="p-0 m-0" style={{ fontSize: '10px' }}>Determines whether this product is tax exempt (tax will not be applied to this product at checkout).</p>
              <div className="form-check form-check-inline mt-2">
                <input disabled className="form-check-input" type="radio" name="taxExempt" id="flexRadioDefault1" value='yes' onChange={handleChange}
                  checked={formData?.taxExempt === 'yes' ? true : false} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input disabled className="form-check-input" type="radio" name="taxExempt" id="flexRadioDefault2" value='no' onChange={handleChange} checked={formData?.taxExempt === 'no' ? true : false} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
          {formData?.saleType === "saleByQuantity"  ? 
          <>
           <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label">Actual Price </label>
              <input disabled className="form-control" type="number" name="actualPrice" value={formData?.actualPrice} onChange={handleChange} required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group pb-3">
              <label className="form-label">Discounted Price </label>
              <input disabled className="form-control" type="number" name="discountedPrice" value={formData?.discountedPrice} onChange={handleChange} required />
            </div>
          </div>
          </>
          : <div className='row p-2 bg-light rounded mx-2'>
              {tierPrice?.map((item: any,idx:any) => (
                <div className='row my-1' key={idx}>
                  <div className='col-md-3'>
                    <label className="form-label">Min Qty </label>
                    <input disabled className="form-control" type="number" value={item?.minQty}  onChange={(e)=>{
                      let temp = [...tierPrice]
                      tierPrice[idx].minQty = e.target.value
                      setTierPrice(temp)
                    }} required />
                  </div>
                  <div className='col-md-3'>
                    <label className="form-label">Max Qty </label>
                    <input disabled className="form-control" type="number" value={item?.maxQty} onChange={(e)=>{
                      let temp = [...tierPrice]
                      tierPrice[idx].maxQty = e.target.value
                      setTierPrice(temp)
                    }} required />
                  </div>
                  <div className='col-md-3'>
                    <label className="form-label">Actual Price </label>
                    <input disabled className="form-control" type="number" value={item?.price} onChange={(e)=>{
                      let temp = [...tierPrice]
                      tierPrice[idx].price = e.target.value
                      setTierPrice(temp)
                    }} required />
                  </div>
                  <div className='col-md-3'>
                    <label className="form-label">Discount Price</label>
                    <input disabled className="form-control" type="number" value={item?.discountPrice} onChange={(e)=>{
                      let temp = [...tierPrice]
                      tierPrice[idx].discountPrice = e.target.value
                      setTierPrice(temp)
                    }} required />
                  </div>
                  {idx !== 0 && (
                    <div className='text-end text-danger cursor-pointer' onClick={()=>{
                      let temp = [...tierPrice]
                      temp = temp.filter((x: any,index:number) => idx !== index)
                      setTierPrice(temp)
                    }}><i className="bi bi-trash"></i></div>
                    )}
                </div>
              ))}
              {/* <div className='text-end cursor-pointer mt-3' onClick={()=>{
                setTierPrice((prev:any)=>([...prev,{
                  minQty: +tierPrice.at(-1).maxQty + 1,
                  maxQty: "",
                  price: "",
                  discountPrice: "",
                }]))
              }}>Add More</div> */}
          </div>}
         
          <div className="col-lg-12 mt-2">
            <div className="form-group pb-3">
              <label className="form-label">Product Certificates</label>
              {/* <input className="form-control" type="file"accept='image/*,.pdf' name="certificates" onChange={handleChange} /> */}
            </div>
          </div>
          <div className="col-lg-12 pb-3 d-flex gap-1">
              {formData?.certificates?.map((item: any, i: any) => (
                <div key={i}>
                  {item?.type === "image" ?
                    <div className='position-relative '>
                      <a href={item?.url} target='_blank'>
                        <img alt='docx' src={item?.url} height={50} width={80} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} />
                      </a>
                      {/* <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" onClick={() => removeCertificate(item)}></i> */}

                    </div> :
                    <div className='position-relative '>
                      <a href={item?.url} target='_blank'>
                        <img alt='docx' src={"https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png"} height={50} width={50} style={{ cursor: 'pointer', objectFit: "contain", borderRadius: 7 }} />
                      </a>
                      {/* <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" onClick={() => removeCertificate(item)}></i> */}
                    </div>}
                </div>
              ))}
          </div>
          <h4>Logistics Information</h4>
          <div className="col-lg-12">
            <div className="form-group pb-3">
              <label className="form-label">Expected Dispatch time (Hrs) </label>
              <input disabled className="form-control" type="number" name="dispatchTime" value={formData?.dispatchTime} onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className='d-flex'>
           {/* <button className="btn btn-dark ms-auto" disabled={submit}>{id ? "Update" : "Save"} Product</button>    */}
        </div>
      </form>
    </div>
    </div>

  )
}

export default ViewProduct;


const searchProductSubCategories = /* GraphQL */ `query SearchProductSubCategories(
    $filter: SearchableProductSubCategoryFilterInput
    $sort: [SearchableProductSubCategorySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProductSubCategoryAggregationInput]
  ) {
    searchProductSubCategories(
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
        productCategory{
          id
          name
        }
      }
    }
  }
  `

const createProduct = /* GraphQL */ `mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      code
      name
      description
      image
      images
      documents
      listPrice
      unitPrice
      tierPrice
      unitType
      taxCategoryId
      attributes
      weight
      active
      verified
      taxExempt
      keywords
      leadTime
      rating
      stock
      sellerId
      seller {
        id
        name
        profile
        image
        taxId
        active
        verified
        phone
        email
        website
        address
        attributes
        images
        documents
        rating
        bank
        age
        gender
        createdAt
        updatedAt
        __typename
      }
      productCategoryId
      productCategory {
        id
        productType
        name
        image
        active
        sort
        createdAt
        updatedAt
        __typename
      }
      productSubCategoryId
      productSubCategory {
        id
        name
        image
        active
        sort
        productCategoryId
        createdAt
        updatedAt
        __typename
      }
      feedbacks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `

const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      code
      name
      description
      image
      images
      documents
      listPrice
      unitPrice
      tierPrice
      unitType
      taxCategoryId
      attributes
      weight
      active
      verified
      taxExempt
      keywords
      leadTime
      rating
      stock
      sellerId
      seller {
        id
        name
      }
      productCategoryId
      productCategory {
        id
        productType
        name
        image
        active
        sort
      }
      productSubCategoryId
      productSubCategory {
        id
        name
        image
        active
        sort
        productCategoryId
        createdAt
      }
      createdAt
      updatedAt
      __typename
    }
  }
  ` 

const updateProduct = /* GraphQL */ `mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
    }
  }
  ` 

  const searchProductCategories = /* GraphQL */ `query SearchProductCategories(
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
        id
        name
        }
    }
    }
    `