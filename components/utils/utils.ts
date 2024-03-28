import { API, Storage } from "aws-amplify";
import toast from "react-hot-toast";

export const LIMIT = 30


export function handleNext(setNextToken: any, setToken: any, token: string | null) {
    setNextToken(token);
    setToken(null);
}

export function handlePrev(setNextToken: any,setTokens: any,tokens: any ) {
    let temp: any = structuredClone(tokens);
    temp.pop();
    temp.pop();
    setTokens(temp);
    setNextToken(temp.at(-1));
}
export const selectColor = (theme:any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#ececec',
    primary: 'black',
  },
})

export const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
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


export const handleSearchCategories: any = (inputValue: any) =>
  new Promise((resolve) => {
      setTimeout(() => {
          resolve(filterCategories(inputValue));
      }, 1000);
  });

  const filterSubCategories = async (inputValue: any) => {
    let filter: any;
      filter = {
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

  export const handleSearchSubCategories: any = (inputValue: any) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterSubCategories(inputValue));
      }, 1000);
  });

export const toggleStatus = async (id: any, status: boolean , query:any ,state:any ,setState:any) => {
  if(checkAuthStatus() === false) return toast.error("User doesn't have access !")

  const loading = toast.loading("Loading...")
  try {
    await API.graphql({ query: query, variables: { input: { id, active: !status } } })
    let temp = structuredClone(state)
    const idx = temp.findIndex((item: any) => item.id === id)
    temp[idx].active = !status
    setState(temp)
    toast.success(`Status updated.`)
  } catch (error) {
    console.log(error)
    toast.error("Something went wrong !")
  }finally{toast.dismiss(loading)}
}

export const checkAuth = () =>{
  if (typeof window !== 'undefined' && window.localStorage) {
    let user = JSON.parse(window.localStorage.getItem("user") || '');
    if(user?.role === "VIEWER") return window.location.href = "/app/not-authorized"
  }
}
export const checkAuthStatus = () =>{
  if (typeof window !== 'undefined' && window.localStorage) {
    let user = JSON.parse(window.localStorage.getItem("user") || '');
    if(user?.role === "VIEWER") return false 
    else return true
  }
}

  
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