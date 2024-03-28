/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserDevice = /* GraphQL */ `subscription OnCreateUserDevice(
  $filter: ModelSubscriptionUserDeviceFilterInput
) {
  onCreateUserDevice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserDeviceSubscriptionVariables,
  APITypes.OnCreateUserDeviceSubscription
>;
export const onUpdateUserDevice = /* GraphQL */ `subscription OnUpdateUserDevice(
  $filter: ModelSubscriptionUserDeviceFilterInput
) {
  onUpdateUserDevice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserDeviceSubscriptionVariables,
  APITypes.OnUpdateUserDeviceSubscription
>;
export const onDeleteUserDevice = /* GraphQL */ `subscription OnDeleteUserDevice(
  $filter: ModelSubscriptionUserDeviceFilterInput
) {
  onDeleteUserDevice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserDeviceSubscriptionVariables,
  APITypes.OnDeleteUserDeviceSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateChat = /* GraphQL */ `subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
  onCreateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
  onUpdateChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
  onDeleteChat(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateIndustry = /* GraphQL */ `subscription OnCreateIndustry($filter: ModelSubscriptionIndustryFilterInput) {
  onCreateIndustry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIndustrySubscriptionVariables,
  APITypes.OnCreateIndustrySubscription
>;
export const onUpdateIndustry = /* GraphQL */ `subscription OnUpdateIndustry($filter: ModelSubscriptionIndustryFilterInput) {
  onUpdateIndustry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIndustrySubscriptionVariables,
  APITypes.OnUpdateIndustrySubscription
>;
export const onDeleteIndustry = /* GraphQL */ `subscription OnDeleteIndustry($filter: ModelSubscriptionIndustryFilterInput) {
  onDeleteIndustry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIndustrySubscriptionVariables,
  APITypes.OnDeleteIndustrySubscription
>;
export const onCreateBusiness = /* GraphQL */ `subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onCreateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessSubscriptionVariables,
  APITypes.OnCreateBusinessSubscription
>;
export const onUpdateBusiness = /* GraphQL */ `subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onUpdateBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessSubscriptionVariables,
  APITypes.OnUpdateBusinessSubscription
>;
export const onDeleteBusiness = /* GraphQL */ `subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
  onDeleteBusiness(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessSubscriptionVariables,
  APITypes.OnDeleteBusinessSubscription
>;
export const onCreateUserType = /* GraphQL */ `subscription OnCreateUserType($filter: ModelSubscriptionUserTypeFilterInput) {
  onCreateUserType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserTypeSubscriptionVariables,
  APITypes.OnCreateUserTypeSubscription
>;
export const onUpdateUserType = /* GraphQL */ `subscription OnUpdateUserType($filter: ModelSubscriptionUserTypeFilterInput) {
  onUpdateUserType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserTypeSubscriptionVariables,
  APITypes.OnUpdateUserTypeSubscription
>;
export const onDeleteUserType = /* GraphQL */ `subscription OnDeleteUserType($filter: ModelSubscriptionUserTypeFilterInput) {
  onDeleteUserType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserTypeSubscriptionVariables,
  APITypes.OnDeleteUserTypeSubscription
>;
export const onCreateQuote = /* GraphQL */ `subscription OnCreateQuote($filter: ModelSubscriptionQuoteFilterInput) {
  onCreateQuote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuoteSubscriptionVariables,
  APITypes.OnCreateQuoteSubscription
>;
export const onUpdateQuote = /* GraphQL */ `subscription OnUpdateQuote($filter: ModelSubscriptionQuoteFilterInput) {
  onUpdateQuote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuoteSubscriptionVariables,
  APITypes.OnUpdateQuoteSubscription
>;
export const onDeleteQuote = /* GraphQL */ `subscription OnDeleteQuote($filter: ModelSubscriptionQuoteFilterInput) {
  onDeleteQuote(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuoteSubscriptionVariables,
  APITypes.OnDeleteQuoteSubscription
>;
