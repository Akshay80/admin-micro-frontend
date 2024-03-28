/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const processCart = /* GraphQL */ `mutation ProcessCart($id: ID!, $userId: ID!, $note: String) {
  processCart(id: $id, userId: $userId, note: $note)
}
` as GeneratedMutation<
  APITypes.ProcessCartMutationVariables,
  APITypes.ProcessCartMutation
>;
export const createProductCategory = /* GraphQL */ `mutation CreateProductCategory(
  $input: CreateProductCategoryInput!
  $condition: ModelProductCategoryConditionInput
) {
  createProductCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductCategoryMutationVariables,
  APITypes.CreateProductCategoryMutation
>;
export const updateProductCategory = /* GraphQL */ `mutation UpdateProductCategory(
  $input: UpdateProductCategoryInput!
  $condition: ModelProductCategoryConditionInput
) {
  updateProductCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductCategoryMutationVariables,
  APITypes.UpdateProductCategoryMutation
>;
export const deleteProductCategory = /* GraphQL */ `mutation DeleteProductCategory(
  $input: DeleteProductCategoryInput!
  $condition: ModelProductCategoryConditionInput
) {
  deleteProductCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductCategoryMutationVariables,
  APITypes.DeleteProductCategoryMutation
>;
export const createProductSubCategory = /* GraphQL */ `mutation CreateProductSubCategory(
  $input: CreateProductSubCategoryInput!
  $condition: ModelProductSubCategoryConditionInput
) {
  createProductSubCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductSubCategoryMutationVariables,
  APITypes.CreateProductSubCategoryMutation
>;
export const updateProductSubCategory = /* GraphQL */ `mutation UpdateProductSubCategory(
  $input: UpdateProductSubCategoryInput!
  $condition: ModelProductSubCategoryConditionInput
) {
  updateProductSubCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductSubCategoryMutationVariables,
  APITypes.UpdateProductSubCategoryMutation
>;
export const deleteProductSubCategory = /* GraphQL */ `mutation DeleteProductSubCategory(
  $input: DeleteProductSubCategoryInput!
  $condition: ModelProductSubCategoryConditionInput
) {
  deleteProductSubCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductSubCategoryMutationVariables,
  APITypes.DeleteProductSubCategoryMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createPayment = /* GraphQL */ `mutation CreatePayment(
  $input: CreatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  createPayment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePaymentMutationVariables,
  APITypes.CreatePaymentMutation
>;
export const updatePayment = /* GraphQL */ `mutation UpdatePayment(
  $input: UpdatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  updatePayment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePaymentMutationVariables,
  APITypes.UpdatePaymentMutation
>;
export const deletePayment = /* GraphQL */ `mutation DeletePayment(
  $input: DeletePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  deletePayment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePaymentMutationVariables,
  APITypes.DeletePaymentMutation
>;
export const createCart = /* GraphQL */ `mutation CreateCart(
  $input: CreateCartInput!
  $condition: ModelCartConditionInput
) {
  createCart(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $input: UpdateCartInput!
  $condition: ModelCartConditionInput
) {
  updateCart(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $input: DeleteCartInput!
  $condition: ModelCartConditionInput
) {
  deleteCart(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
export const createBuyer = /* GraphQL */ `mutation CreateBuyer(
  $input: CreateBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  createBuyer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBuyerMutationVariables,
  APITypes.CreateBuyerMutation
>;
export const updateBuyer = /* GraphQL */ `mutation UpdateBuyer(
  $input: UpdateBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  updateBuyer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBuyerMutationVariables,
  APITypes.UpdateBuyerMutation
>;
export const deleteBuyer = /* GraphQL */ `mutation DeleteBuyer(
  $input: DeleteBuyerInput!
  $condition: ModelBuyerConditionInput
) {
  deleteBuyer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBuyerMutationVariables,
  APITypes.DeleteBuyerMutation
>;
export const createSeller = /* GraphQL */ `mutation CreateSeller(
  $input: CreateSellerInput!
  $condition: ModelSellerConditionInput
) {
  createSeller(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSellerMutationVariables,
  APITypes.CreateSellerMutation
>;
export const updateSeller = /* GraphQL */ `mutation UpdateSeller(
  $input: UpdateSellerInput!
  $condition: ModelSellerConditionInput
) {
  updateSeller(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSellerMutationVariables,
  APITypes.UpdateSellerMutation
>;
export const deleteSeller = /* GraphQL */ `mutation DeleteSeller(
  $input: DeleteSellerInput!
  $condition: ModelSellerConditionInput
) {
  deleteSeller(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSellerMutationVariables,
  APITypes.DeleteSellerMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createProductFeedback = /* GraphQL */ `mutation CreateProductFeedback(
  $input: CreateProductFeedbackInput!
  $condition: ModelProductFeedbackConditionInput
) {
  createProductFeedback(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductFeedbackMutationVariables,
  APITypes.CreateProductFeedbackMutation
>;
export const updateProductFeedback = /* GraphQL */ `mutation UpdateProductFeedback(
  $input: UpdateProductFeedbackInput!
  $condition: ModelProductFeedbackConditionInput
) {
  updateProductFeedback(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductFeedbackMutationVariables,
  APITypes.UpdateProductFeedbackMutation
>;
export const deleteProductFeedback = /* GraphQL */ `mutation DeleteProductFeedback(
  $input: DeleteProductFeedbackInput!
  $condition: ModelProductFeedbackConditionInput
) {
  deleteProductFeedback(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductFeedbackMutationVariables,
  APITypes.DeleteProductFeedbackMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSellerUser = /* GraphQL */ `mutation CreateSellerUser(
  $input: CreateSellerUserInput!
  $condition: ModelSellerUserConditionInput
) {
  createSellerUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSellerUserMutationVariables,
  APITypes.CreateSellerUserMutation
>;
export const updateSellerUser = /* GraphQL */ `mutation UpdateSellerUser(
  $input: UpdateSellerUserInput!
  $condition: ModelSellerUserConditionInput
) {
  updateSellerUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSellerUserMutationVariables,
  APITypes.UpdateSellerUserMutation
>;
export const deleteSellerUser = /* GraphQL */ `mutation DeleteSellerUser(
  $input: DeleteSellerUserInput!
  $condition: ModelSellerUserConditionInput
) {
  deleteSellerUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSellerUserMutationVariables,
  APITypes.DeleteSellerUserMutation
>;
export const createBuyerUser = /* GraphQL */ `mutation CreateBuyerUser(
  $input: CreateBuyerUserInput!
  $condition: ModelBuyerUserConditionInput
) {
  createBuyerUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBuyerUserMutationVariables,
  APITypes.CreateBuyerUserMutation
>;
export const updateBuyerUser = /* GraphQL */ `mutation UpdateBuyerUser(
  $input: UpdateBuyerUserInput!
  $condition: ModelBuyerUserConditionInput
) {
  updateBuyerUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBuyerUserMutationVariables,
  APITypes.UpdateBuyerUserMutation
>;
export const deleteBuyerUser = /* GraphQL */ `mutation DeleteBuyerUser(
  $input: DeleteBuyerUserInput!
  $condition: ModelBuyerUserConditionInput
) {
  deleteBuyerUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBuyerUserMutationVariables,
  APITypes.DeleteBuyerUserMutation
>;
export const createUserDevice = /* GraphQL */ `mutation CreateUserDevice(
  $input: CreateUserDeviceInput!
  $condition: ModelUserDeviceConditionInput
) {
  createUserDevice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserDeviceMutationVariables,
  APITypes.CreateUserDeviceMutation
>;
export const updateUserDevice = /* GraphQL */ `mutation UpdateUserDevice(
  $input: UpdateUserDeviceInput!
  $condition: ModelUserDeviceConditionInput
) {
  updateUserDevice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserDeviceMutationVariables,
  APITypes.UpdateUserDeviceMutation
>;
export const deleteUserDevice = /* GraphQL */ `mutation DeleteUserDevice(
  $input: DeleteUserDeviceInput!
  $condition: ModelUserDeviceConditionInput
) {
  deleteUserDevice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserDeviceMutationVariables,
  APITypes.DeleteUserDeviceMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createChat = /* GraphQL */ `mutation CreateChat(
  $input: CreateChatInput!
  $condition: ModelChatConditionInput
) {
  createChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChatMutationVariables,
  APITypes.CreateChatMutation
>;
export const updateChat = /* GraphQL */ `mutation UpdateChat(
  $input: UpdateChatInput!
  $condition: ModelChatConditionInput
) {
  updateChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChatMutationVariables,
  APITypes.UpdateChatMutation
>;
export const deleteChat = /* GraphQL */ `mutation DeleteChat(
  $input: DeleteChatInput!
  $condition: ModelChatConditionInput
) {
  deleteChat(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChatMutationVariables,
  APITypes.DeleteChatMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createIndustry = /* GraphQL */ `mutation CreateIndustry(
  $input: CreateIndustryInput!
  $condition: ModelIndustryConditionInput
) {
  createIndustry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIndustryMutationVariables,
  APITypes.CreateIndustryMutation
>;
export const updateIndustry = /* GraphQL */ `mutation UpdateIndustry(
  $input: UpdateIndustryInput!
  $condition: ModelIndustryConditionInput
) {
  updateIndustry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIndustryMutationVariables,
  APITypes.UpdateIndustryMutation
>;
export const deleteIndustry = /* GraphQL */ `mutation DeleteIndustry(
  $input: DeleteIndustryInput!
  $condition: ModelIndustryConditionInput
) {
  deleteIndustry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIndustryMutationVariables,
  APITypes.DeleteIndustryMutation
>;
export const createBusiness = /* GraphQL */ `mutation CreateBusiness(
  $input: CreateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  createBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBusinessMutationVariables,
  APITypes.CreateBusinessMutation
>;
export const updateBusiness = /* GraphQL */ `mutation UpdateBusiness(
  $input: UpdateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  updateBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBusinessMutationVariables,
  APITypes.UpdateBusinessMutation
>;
export const deleteBusiness = /* GraphQL */ `mutation DeleteBusiness(
  $input: DeleteBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  deleteBusiness(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBusinessMutationVariables,
  APITypes.DeleteBusinessMutation
>;
export const createUserType = /* GraphQL */ `mutation CreateUserType(
  $input: CreateUserTypeInput!
  $condition: ModelUserTypeConditionInput
) {
  createUserType(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserTypeMutationVariables,
  APITypes.CreateUserTypeMutation
>;
export const updateUserType = /* GraphQL */ `mutation UpdateUserType(
  $input: UpdateUserTypeInput!
  $condition: ModelUserTypeConditionInput
) {
  updateUserType(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserTypeMutationVariables,
  APITypes.UpdateUserTypeMutation
>;
export const deleteUserType = /* GraphQL */ `mutation DeleteUserType(
  $input: DeleteUserTypeInput!
  $condition: ModelUserTypeConditionInput
) {
  deleteUserType(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserTypeMutationVariables,
  APITypes.DeleteUserTypeMutation
>;
export const createQuote = /* GraphQL */ `mutation CreateQuote(
  $input: CreateQuoteInput!
  $condition: ModelQuoteConditionInput
) {
  createQuote(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateQuoteMutationVariables,
  APITypes.CreateQuoteMutation
>;
export const updateQuote = /* GraphQL */ `mutation UpdateQuote(
  $input: UpdateQuoteInput!
  $condition: ModelQuoteConditionInput
) {
  updateQuote(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateQuoteMutationVariables,
  APITypes.UpdateQuoteMutation
>;
export const deleteQuote = /* GraphQL */ `mutation DeleteQuote(
  $input: DeleteQuoteInput!
  $condition: ModelQuoteConditionInput
) {
  deleteQuote(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteQuoteMutationVariables,
  APITypes.DeleteQuoteMutation
>;
