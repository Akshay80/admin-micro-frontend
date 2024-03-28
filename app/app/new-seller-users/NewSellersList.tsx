"use client"
import { useState } from "react";
import Select from 'react-select'
import { selectColor } from '../../../components/utils/utils';
import SellerList from "./SellerList";
import BuyerList from "./BuyerList";

const NewSellerList = () => {

    // buyer 
    const [selectUser, setSelectUser] = useState<any>({ label: "Seller", value:"Seller"})    

    // const handleVerify = async (id: any, verified: boolean) => {
    //     try {
    //         if (checkAuthStatus() === false) return toast.error("User doesn't have access !")
    //         await API.graphql({ query: updateSeller, variables: { input: { id, verified: verified, active: verified } } })
    //         let temp = structuredClone(sellers)
    //         let idx = temp.findIndex((x: any) => x.id === id)
    //         temp[idx].verified = verified
    //         temp[idx].active = verified
    //         setSellers(temp)
    //         toast.success(`Seller ${verified ? "Verified" : "Rejected"}.`)
    //     } catch (e) {
    //         console.log(e)
    //         toast.error("Something went wrong !")
    //     }
    // }

    // const fetchSellers = async () => {
    //     let filter: any = {}
    //     if (search) {
    //         filter = { name: { matchPhrasePrefix: `${search}` } }
    //     }
    //     if (selectFilter !== null && selectFilter !== undefined) {
    //         filter = { active: { eq: selectFilter } }
    //         if (selectFilter === false) filter = { active: { ne: true } }
    //     }
    //     if (search && (selectFilter !== null && selectFilter !== undefined)) {
    //         filter = { name: { matchPhrasePrefix: `${search}` }, active: { eq: selectFilter } }
    //         if (selectFilter === false) filter = { name: { matchPhrasePrefix: `${search}` }, active: { ne: true } }
    //     }

    //     try {
    //         const res = await API.graphql<any>({
    //             query: searchSellers,
    //             variables: { limit: LIMIT, filter: filter, nextToken, sort: { direction: "desc", field: "createdAt" } },
    //         });

    //         setToken(res.data.searchSellers.nextToken);
    //         setTokens((prev): any => [...prev!, res.data.searchSellers.nextToken]);

    //         setSellers(res?.data?.searchSellers?.items)
    //         setIsLoading(false)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // useEffect(() => {
    //     setIsLoading(true)
    //     setToken(null)
    //     let timer = setTimeout(() => {
    //         fetchSellers();
    //     }, 600)

    //     return () => clearTimeout(timer)
    // }, [search, nextToken, selectFilter]);

    return (
        <div className="row">
            <div className="d-flex justify-content-between">
                <div className=""><h3 className='my-3'>New Registered</h3></div>
                <div className="col-auto ms-auto">
                    <Select
                        isClearable
                        placeholder="Select Users"
                        options={[{ label: "Seller", value:"Seller"}, { label: "Buyer", value:"Buyer"}]}
                        onChange={setSelectUser}
                        theme={selectColor}
                    />
                </div>
            </div>
            <div className="col-xl-12 col-12 mb-5">
              {selectUser?.label === 'Seller' || selectUser?.label === null ? <SellerList /> : <BuyerList /> } 
            </div>
        </div>
    )
}

export default NewSellerList;

