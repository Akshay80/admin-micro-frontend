/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const searchProductCategories = /* GraphQL */ `query SearchProductCategories(
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
      productType
      name
      image
      active
      sort
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
` as GeneratedQuery<
  APITypes.SearchProductCategoriesQueryVariables,
  APITypes.SearchProductCategoriesQuery
>;
export const searchProductSubCategories = /* GraphQL */ `query SearchProductSubCategories(
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
      image
      active
      sort
      productCategoryId
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
` as GeneratedQuery<
  APITypes.SearchProductSubCategoriesQueryVariables,
  APITypes.SearchProductSubCategoriesQuery
>;
export const searchOrders = /* GraphQL */ `query SearchOrders(
  $filter: SearchableOrderFilterInput
  $sort: [SearchableOrderSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableOrderAggregationInput]
) {
  searchOrders(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
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
` as GeneratedQuery<
  APITypes.SearchOrdersQueryVariables,
  APITypes.SearchOrdersQuery
>;
export const searchPayments = /* GraphQL */ `query SearchPayments(
  $filter: SearchablePaymentFilterInput
  $sort: [SearchablePaymentSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchablePaymentAggregationInput]
) {
  searchPayments(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      buyerId
      userId
      amount
      currency
      status
      paymentIntentId
      paymentIntent
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
` as GeneratedQuery<
  APITypes.SearchPaymentsQueryVariables,
  APITypes.SearchPaymentsQuery
>;
export const searchBuyers = /* GraphQL */ `query SearchBuyers(
  $filter: SearchableBuyerFilterInput
  $sort: [SearchableBuyerSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableBuyerAggregationInput]
) {
  searchBuyers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
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
` as GeneratedQuery<
  APITypes.SearchBuyersQueryVariables,
  APITypes.SearchBuyersQuery
>;
export const searchSellers = /* GraphQL */ `query SearchSellers(
  $filter: SearchableSellerFilterInput
  $sort: [SearchableSellerSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableSellerAggregationInput]
) {
  searchSellers(
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
      details
      productDetails
      industryId
      businessId
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
` as GeneratedQuery<
  APITypes.SearchSellersQueryVariables,
  APITypes.SearchSellersQuery
>;
export const searchProducts = /* GraphQL */ `query SearchProducts(
  $filter: SearchableProductFilterInput
  $sort: [SearchableProductSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableProductAggregationInput]
) {
  searchProducts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
      productCategoryId
      productSubCategoryId
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
` as GeneratedQuery<
  APITypes.SearchProductsQueryVariables,
  APITypes.SearchProductsQuery
>;
export const searchProductFeedbacks = /* GraphQL */ `query SearchProductFeedbacks(
  $filter: SearchableProductFeedbackFilterInput
  $sort: [SearchableProductFeedbackSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableProductFeedbackAggregationInput]
) {
  searchProductFeedbacks(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      productId
      buyerUserId
      comment
      isVerified
      rating
      media
      createdAt
      updatedAt
      productFeedbackSellerId
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
` as GeneratedQuery<
  APITypes.SearchProductFeedbacksQueryVariables,
  APITypes.SearchProductFeedbacksQuery
>;
export const searchUsers = /* GraphQL */ `query SearchUsers(
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
      userTypeId
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
` as GeneratedQuery<
  APITypes.SearchUsersQueryVariables,
  APITypes.SearchUsersQuery
>;
export const searchSellerUsers = /* GraphQL */ `query SearchSellerUsers(
  $filter: SearchableSellerUserFilterInput
  $sort: [SearchableSellerUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableSellerUserAggregationInput]
) {
  searchSellerUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      sellerId
      userId
      role
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
` as GeneratedQuery<
  APITypes.SearchSellerUsersQueryVariables,
  APITypes.SearchSellerUsersQuery
>;
export const searchBuyerUsers = /* GraphQL */ `query SearchBuyerUsers(
  $filter: SearchableBuyerUserFilterInput
  $sort: [SearchableBuyerUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableBuyerUserAggregationInput]
) {
  searchBuyerUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      buyerId
      userId
      role
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
` as GeneratedQuery<
  APITypes.SearchBuyerUsersQueryVariables,
  APITypes.SearchBuyerUsersQuery
>;
export const searchChats = /* GraphQL */ `query SearchChats(
  $filter: SearchableChatFilterInput
  $sort: [SearchableChatSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableChatAggregationInput]
) {
  searchChats(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      buyerId
      sellerId
      createdAt
      updatedAt
      chatMessageId
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
` as GeneratedQuery<
  APITypes.SearchChatsQueryVariables,
  APITypes.SearchChatsQuery
>;
export const searchMessages = /* GraphQL */ `query SearchMessages(
  $filter: SearchableMessageFilterInput
  $sort: [SearchableMessageSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMessageAggregationInput]
) {
  searchMessages(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
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
` as GeneratedQuery<
  APITypes.SearchMessagesQueryVariables,
  APITypes.SearchMessagesQuery
>;
export const searchIndustries = /* GraphQL */ `query SearchIndustries(
  $filter: SearchableIndustryFilterInput
  $sort: [SearchableIndustrySortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableIndustryAggregationInput]
) {
  searchIndustries(
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
` as GeneratedQuery<
  APITypes.SearchIndustriesQueryVariables,
  APITypes.SearchIndustriesQuery
>;
export const searchBusinesses = /* GraphQL */ `query SearchBusinesses(
  $filter: SearchableBusinessFilterInput
  $sort: [SearchableBusinessSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableBusinessAggregationInput]
) {
  searchBusinesses(
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
` as GeneratedQuery<
  APITypes.SearchBusinessesQueryVariables,
  APITypes.SearchBusinessesQuery
>;
export const searchUserTypes = /* GraphQL */ `query SearchUserTypes(
  $filter: SearchableUserTypeFilterInput
  $sort: [SearchableUserTypeSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableUserTypeAggregationInput]
) {
  searchUserTypes(
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
      category
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
` as GeneratedQuery<
  APITypes.SearchUserTypesQueryVariables,
  APITypes.SearchUserTypesQuery
>;
export const searchQuotes = /* GraphQL */ `query SearchQuotes(
  $filter: SearchableQuoteFilterInput
  $sort: [SearchableQuoteSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableQuoteAggregationInput]
) {
  searchQuotes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      productId
      buyerId
      sellerId
      quantity
      amount
      media
      details
      status
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
` as GeneratedQuery<
  APITypes.SearchQuotesQueryVariables,
  APITypes.SearchQuotesQuery
>;
export const getProductCategory = /* GraphQL */ `query GetProductCategory($id: ID!) {
  getProductCategory(id: $id) {
    id
    productType
    name
    image
    active
    sort
    productSubCategories {
      nextToken
      __typename
    }
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductCategoryQueryVariables,
  APITypes.GetProductCategoryQuery
>;
export const listProductCategories = /* GraphQL */ `query ListProductCategories(
  $filter: ModelProductCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductCategoriesQueryVariables,
  APITypes.ListProductCategoriesQuery
>;
export const getProductSubCategory = /* GraphQL */ `query GetProductSubCategory($id: ID!) {
  getProductSubCategory(id: $id) {
    id
    name
    image
    active
    sort
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
    products {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductSubCategoryQueryVariables,
  APITypes.GetProductSubCategoryQuery
>;
export const listProductSubCategories = /* GraphQL */ `query ListProductSubCategories(
  $filter: ModelProductSubCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductSubCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductSubCategoriesQueryVariables,
  APITypes.ListProductSubCategoriesQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    code
    items
    rating
    buyerId
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    paymentId
    payment {
      id
      buyerId
      userId
      amount
      currency
      status
      paymentIntentId
      paymentIntent
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    phone
    currency
    taxTotal
    deliveryTotal
    subTotal
    total
    reason
    pickupAddress
    billingAddress
    deliveryAddress
    orderStatus
    changeLog
    shipmentDetails
    orderDate
    extCarrierId
    serviceCode
    extShipmentId
    rateId
    specialInstructions
    deliveryInstructions
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getPayment = /* GraphQL */ `query GetPayment($id: ID!) {
  getPayment(id: $id) {
    id
    buyerId
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    userId
    user {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    amount
    currency
    status
    paymentIntentId
    paymentIntent
    orders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPaymentQueryVariables,
  APITypes.GetPaymentQuery
>;
export const listPayments = /* GraphQL */ `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buyerId
      userId
      amount
      currency
      status
      paymentIntentId
      paymentIntent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentsQueryVariables,
  APITypes.ListPaymentsQuery
>;
export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
    id
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    items
    subTotal
    taxTotal
    deliveryTotal
    total
    pickupAddress
    billingAddress
    deliveryAddress
    lock
    createdAt
    updatedAt
    cartBuyerId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      items
      subTotal
      taxTotal
      deliveryTotal
      total
      pickupAddress
      billingAddress
      deliveryAddress
      lock
      createdAt
      updatedAt
      cartBuyerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
export const getBuyer = /* GraphQL */ `query GetBuyer($id: ID!) {
  getBuyer(id: $id) {
    id
    buyerType
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
    categories
    cart {
      id
      items
      subTotal
      taxTotal
      deliveryTotal
      total
      pickupAddress
      billingAddress
      deliveryAddress
      lock
      createdAt
      updatedAt
      cartBuyerId
      __typename
    }
    rating
    age
    gender
    orders {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    messages {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    quotes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    buyerCartId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBuyerQueryVariables, APITypes.GetBuyerQuery>;
export const listBuyers = /* GraphQL */ `query ListBuyers(
  $filter: ModelBuyerFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuyersQueryVariables,
  APITypes.ListBuyersQuery
>;
export const getSeller = /* GraphQL */ `query GetSeller($id: ID!) {
  getSeller(id: $id) {
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
    details
    productDetails
    industryId
    industry {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    businessId
    business {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    products {
      nextToken
      __typename
    }
    orders {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    chats {
      nextToken
      __typename
    }
    messages {
      nextToken
      __typename
    }
    quotes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSellerQueryVariables, APITypes.GetSellerQuery>;
export const listSellers = /* GraphQL */ `query ListSellers(
  $filter: ModelSellerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSellers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSellersQueryVariables,
  APITypes.ListSellersQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
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
      details
      productDetails
      industryId
      businessId
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
    quotes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      productCategoryId
      productSubCategoryId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getProductFeedback = /* GraphQL */ `query GetProductFeedback($id: ID!) {
  getProductFeedback(id: $id) {
    id
    productId
    product {
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
      productCategoryId
      productSubCategoryId
      createdAt
      updatedAt
      __typename
    }
    buyerUserId
    buyerUser {
      id
      buyerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    comment
    isVerified
    rating
    media
    createdAt
    updatedAt
    productFeedbackSellerId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductFeedbackQueryVariables,
  APITypes.GetProductFeedbackQuery
>;
export const listProductFeedbacks = /* GraphQL */ `query ListProductFeedbacks(
  $filter: ModelProductFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      productId
      buyerUserId
      comment
      isVerified
      rating
      media
      createdAt
      updatedAt
      productFeedbackSellerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductFeedbacksQueryVariables,
  APITypes.ListProductFeedbacksQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    photo
    phone
    email
    role
    deleted
    userTypeId
    userType {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
    buyers {
      nextToken
      __typename
    }
    sellers {
      nextToken
      __typename
    }
    devices {
      nextToken
      __typename
    }
    notifications {
      nextToken
      __typename
    }
    orders {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSellerUser = /* GraphQL */ `query GetSellerUser($id: ID!) {
  getSellerUser(id: $id) {
    id
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    role
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSellerUserQueryVariables,
  APITypes.GetSellerUserQuery
>;
export const listSellerUsers = /* GraphQL */ `query ListSellerUsers(
  $filter: ModelSellerUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listSellerUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sellerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSellerUsersQueryVariables,
  APITypes.ListSellerUsersQuery
>;
export const getBuyerUser = /* GraphQL */ `query GetBuyerUser($id: ID!) {
  getBuyerUser(id: $id) {
    id
    buyerId
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    userId
    user {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    role
    productFeedbacks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBuyerUserQueryVariables,
  APITypes.GetBuyerUserQuery
>;
export const listBuyerUsers = /* GraphQL */ `query ListBuyerUsers(
  $filter: ModelBuyerUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuyerUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buyerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuyerUsersQueryVariables,
  APITypes.ListBuyerUsersQuery
>;
export const getUserDevice = /* GraphQL */ `query GetUserDevice($id: ID!) {
  getUserDevice(id: $id) {
    id
    userId
    type
    app
    name
    meta
    token
    arn
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserDeviceQueryVariables,
  APITypes.GetUserDeviceQuery
>;
export const listUserDevices = /* GraphQL */ `query ListUserDevices(
  $filter: ModelUserDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      type
      app
      name
      meta
      token
      arn
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserDevicesQueryVariables,
  APITypes.ListUserDevicesQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    userId
    type
    typeId
    app
    senderId
    sender {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    title
    meta
    message
    sent
    read
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      type
      typeId
      app
      senderId
      title
      meta
      message
      sent
      read
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const getChat = /* GraphQL */ `query GetChat($id: ID!) {
  getChat(id: $id) {
    id
    buyerId
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    message {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    chatMessageId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChatQueryVariables, APITypes.GetChatQuery>;
export const listChats = /* GraphQL */ `query ListChats(
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buyerId
      sellerId
      createdAt
      updatedAt
      chatMessageId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListChatsQueryVariables, APITypes.ListChatsQuery>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    chatId
    chat {
      id
      buyerId
      sellerId
      createdAt
      updatedAt
      chatMessageId
      __typename
    }
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    buyerId
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    parentMessage {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
    sender {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    senderReceiver
    content
    media
    readBy
    createdAt
    updatedAt
    messageParentMessageId
    messageSenderId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const getIndustry = /* GraphQL */ `query GetIndustry($id: ID!) {
  getIndustry(id: $id) {
    id
    name
    sellers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIndustryQueryVariables,
  APITypes.GetIndustryQuery
>;
export const listIndustries = /* GraphQL */ `query ListIndustries(
  $filter: ModelIndustryFilterInput
  $limit: Int
  $nextToken: String
) {
  listIndustries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIndustriesQueryVariables,
  APITypes.ListIndustriesQuery
>;
export const getBusiness = /* GraphQL */ `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
    id
    name
    sellers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessQueryVariables,
  APITypes.GetBusinessQuery
>;
export const listBusinesses = /* GraphQL */ `query ListBusinesses(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessesQueryVariables,
  APITypes.ListBusinessesQuery
>;
export const getUserType = /* GraphQL */ `query GetUserType($id: ID!) {
  getUserType(id: $id) {
    id
    name
    category
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserTypeQueryVariables,
  APITypes.GetUserTypeQuery
>;
export const listUserTypes = /* GraphQL */ `query ListUserTypes(
  $filter: ModelUserTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      category
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserTypesQueryVariables,
  APITypes.ListUserTypesQuery
>;
export const getQuote = /* GraphQL */ `query GetQuote($id: ID!) {
  getQuote(id: $id) {
    id
    productId
    product {
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
      productCategoryId
      productSubCategoryId
      createdAt
      updatedAt
      __typename
    }
    buyerId
    buyer {
      id
      buyerType
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
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    quantity
    amount
    media
    details
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetQuoteQueryVariables, APITypes.GetQuoteQuery>;
export const listQuotes = /* GraphQL */ `query ListQuotes(
  $filter: ModelQuoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      productId
      buyerId
      sellerId
      quantity
      amount
      media
      details
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuotesQueryVariables,
  APITypes.ListQuotesQuery
>;
export const productSubCategoriesByProductCategoryId = /* GraphQL */ `query ProductSubCategoriesByProductCategoryId(
  $productCategoryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductSubCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  productSubCategoriesByProductCategoryId(
    productCategoryId: $productCategoryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductSubCategoriesByProductCategoryIdQueryVariables,
  APITypes.ProductSubCategoriesByProductCategoryIdQuery
>;
export const ordersByBuyerId = /* GraphQL */ `query OrdersByBuyerId(
  $buyerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByBuyerId(
    buyerId: $buyerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByBuyerIdQueryVariables,
  APITypes.OrdersByBuyerIdQuery
>;
export const ordersBySellerId = /* GraphQL */ `query OrdersBySellerId(
  $sellerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersBySellerId(
    sellerId: $sellerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersBySellerIdQueryVariables,
  APITypes.OrdersBySellerIdQuery
>;
export const ordersByPaymentId = /* GraphQL */ `query OrdersByPaymentId(
  $paymentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByPaymentId(
    paymentId: $paymentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByPaymentIdQueryVariables,
  APITypes.OrdersByPaymentIdQuery
>;
export const ordersByUserId = /* GraphQL */ `query OrdersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByUserIdQueryVariables,
  APITypes.OrdersByUserIdQuery
>;
export const paymentsByBuyerId = /* GraphQL */ `query PaymentsByBuyerId(
  $buyerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  paymentsByBuyerId(
    buyerId: $buyerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyerId
      userId
      amount
      currency
      status
      paymentIntentId
      paymentIntent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PaymentsByBuyerIdQueryVariables,
  APITypes.PaymentsByBuyerIdQuery
>;
export const paymentsByUserId = /* GraphQL */ `query PaymentsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  paymentsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyerId
      userId
      amount
      currency
      status
      paymentIntentId
      paymentIntent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PaymentsByUserIdQueryVariables,
  APITypes.PaymentsByUserIdQuery
>;
export const paymentsByPaymentIntentId = /* GraphQL */ `query PaymentsByPaymentIntentId(
  $paymentIntentId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  paymentsByPaymentIntentId(
    paymentIntentId: $paymentIntentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyerId
      userId
      amount
      currency
      status
      paymentIntentId
      paymentIntent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PaymentsByPaymentIntentIdQueryVariables,
  APITypes.PaymentsByPaymentIntentIdQuery
>;
export const sellersByIndustryId = /* GraphQL */ `query SellersByIndustryId(
  $industryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSellerFilterInput
  $limit: Int
  $nextToken: String
) {
  sellersByIndustryId(
    industryId: $industryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SellersByIndustryIdQueryVariables,
  APITypes.SellersByIndustryIdQuery
>;
export const sellersByBusinessId = /* GraphQL */ `query SellersByBusinessId(
  $businessId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSellerFilterInput
  $limit: Int
  $nextToken: String
) {
  sellersByBusinessId(
    businessId: $businessId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      details
      productDetails
      industryId
      businessId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SellersByBusinessIdQueryVariables,
  APITypes.SellersByBusinessIdQuery
>;
export const productsBySellerId = /* GraphQL */ `query ProductsBySellerId(
  $sellerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  productsBySellerId(
    sellerId: $sellerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      productCategoryId
      productSubCategoryId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductsBySellerIdQueryVariables,
  APITypes.ProductsBySellerIdQuery
>;
export const productsByProductCategoryId = /* GraphQL */ `query ProductsByProductCategoryId(
  $productCategoryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  productsByProductCategoryId(
    productCategoryId: $productCategoryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      productCategoryId
      productSubCategoryId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductsByProductCategoryIdQueryVariables,
  APITypes.ProductsByProductCategoryIdQuery
>;
export const productsByProductSubCategoryId = /* GraphQL */ `query ProductsByProductSubCategoryId(
  $productSubCategoryId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  productsByProductSubCategoryId(
    productSubCategoryId: $productSubCategoryId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
      productCategoryId
      productSubCategoryId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductsByProductSubCategoryIdQueryVariables,
  APITypes.ProductsByProductSubCategoryIdQuery
>;
export const productFeedbacksByProductId = /* GraphQL */ `query ProductFeedbacksByProductId(
  $productId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  productFeedbacksByProductId(
    productId: $productId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productId
      buyerUserId
      comment
      isVerified
      rating
      media
      createdAt
      updatedAt
      productFeedbackSellerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductFeedbacksByProductIdQueryVariables,
  APITypes.ProductFeedbacksByProductIdQuery
>;
export const productFeedbacksByBuyerUserId = /* GraphQL */ `query ProductFeedbacksByBuyerUserId(
  $buyerUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  productFeedbacksByBuyerUserId(
    buyerUserId: $buyerUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productId
      buyerUserId
      comment
      isVerified
      rating
      media
      createdAt
      updatedAt
      productFeedbackSellerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductFeedbacksByBuyerUserIdQueryVariables,
  APITypes.ProductFeedbacksByBuyerUserIdQuery
>;
export const usersByUserTypeId = /* GraphQL */ `query UsersByUserTypeId(
  $userTypeId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByUserTypeId(
    userTypeId: $userTypeId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      photo
      phone
      email
      role
      deleted
      userTypeId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByUserTypeIdQueryVariables,
  APITypes.UsersByUserTypeIdQuery
>;
export const sellerUsersBySellerId = /* GraphQL */ `query SellerUsersBySellerId(
  $sellerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSellerUserFilterInput
  $limit: Int
  $nextToken: String
) {
  sellerUsersBySellerId(
    sellerId: $sellerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sellerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SellerUsersBySellerIdQueryVariables,
  APITypes.SellerUsersBySellerIdQuery
>;
export const sellerUsersByUserId = /* GraphQL */ `query SellerUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSellerUserFilterInput
  $limit: Int
  $nextToken: String
) {
  sellerUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sellerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SellerUsersByUserIdQueryVariables,
  APITypes.SellerUsersByUserIdQuery
>;
export const buyerUsersByBuyerId = /* GraphQL */ `query BuyerUsersByBuyerId(
  $buyerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuyerUserFilterInput
  $limit: Int
  $nextToken: String
) {
  buyerUsersByBuyerId(
    buyerId: $buyerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BuyerUsersByBuyerIdQueryVariables,
  APITypes.BuyerUsersByBuyerIdQuery
>;
export const buyerUsersByUserId = /* GraphQL */ `query BuyerUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBuyerUserFilterInput
  $limit: Int
  $nextToken: String
) {
  buyerUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BuyerUsersByUserIdQueryVariables,
  APITypes.BuyerUsersByUserIdQuery
>;
export const userDevicesByUserId = /* GraphQL */ `query UserDevicesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserDeviceFilterInput
  $limit: Int
  $nextToken: String
) {
  userDevicesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      type
      app
      name
      meta
      token
      arn
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserDevicesByUserIdQueryVariables,
  APITypes.UserDevicesByUserIdQuery
>;
export const notificationsByDate = /* GraphQL */ `query NotificationsByDate(
  $userId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByDate(
    userId: $userId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      type
      typeId
      app
      senderId
      title
      meta
      message
      sent
      read
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByDateQueryVariables,
  APITypes.NotificationsByDateQuery
>;
export const chatsByBuyerId = /* GraphQL */ `query ChatsByBuyerId(
  $buyerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  chatsByBuyerId(
    buyerId: $buyerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyerId
      sellerId
      createdAt
      updatedAt
      chatMessageId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatsByBuyerIdQueryVariables,
  APITypes.ChatsByBuyerIdQuery
>;
export const chatsBySellerId = /* GraphQL */ `query ChatsBySellerId(
  $sellerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatFilterInput
  $limit: Int
  $nextToken: String
) {
  chatsBySellerId(
    sellerId: $sellerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      buyerId
      sellerId
      createdAt
      updatedAt
      chatMessageId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatsBySellerIdQueryVariables,
  APITypes.ChatsBySellerIdQuery
>;
export const messagesByChatId = /* GraphQL */ `query MessagesByChatId(
  $chatId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByChatId(
    chatId: $chatId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByChatIdQueryVariables,
  APITypes.MessagesByChatIdQuery
>;
export const messagesBySellerId = /* GraphQL */ `query MessagesBySellerId(
  $sellerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesBySellerId(
    sellerId: $sellerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesBySellerIdQueryVariables,
  APITypes.MessagesBySellerIdQuery
>;
export const messagesByBuyerId = /* GraphQL */ `query MessagesByBuyerId(
  $buyerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByBuyerId(
    buyerId: $buyerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      chatId
      sellerId
      buyerId
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByBuyerIdQueryVariables,
  APITypes.MessagesByBuyerIdQuery
>;
export const quotesByProductId = /* GraphQL */ `query QuotesByProductId(
  $productId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQuoteFilterInput
  $limit: Int
  $nextToken: String
) {
  quotesByProductId(
    productId: $productId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productId
      buyerId
      sellerId
      quantity
      amount
      media
      details
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuotesByProductIdQueryVariables,
  APITypes.QuotesByProductIdQuery
>;
export const quotesByBuyerId = /* GraphQL */ `query QuotesByBuyerId(
  $buyerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQuoteFilterInput
  $limit: Int
  $nextToken: String
) {
  quotesByBuyerId(
    buyerId: $buyerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productId
      buyerId
      sellerId
      quantity
      amount
      media
      details
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuotesByBuyerIdQueryVariables,
  APITypes.QuotesByBuyerIdQuery
>;
export const quotesBySellerId = /* GraphQL */ `query QuotesBySellerId(
  $sellerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQuoteFilterInput
  $limit: Int
  $nextToken: String
) {
  quotesBySellerId(
    sellerId: $sellerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productId
      buyerId
      sellerId
      quantity
      amount
      media
      details
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuotesBySellerIdQueryVariables,
  APITypes.QuotesBySellerIdQuery
>;
