/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductCategoryInput = {
  id?: string | null,
  productType?: ProductType | null,
  name?: string | null,
  image?: string | null,
  active?: boolean | null,
  sort?: number | null,
};

export enum ProductType {
  AGRICULTURE = "AGRICULTURE",
  COMMODITY = "COMMODITY",
}


export type ModelProductCategoryConditionInput = {
  productType?: ModelProductTypeInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  sort?: ModelIntInput | null,
  and?: Array< ModelProductCategoryConditionInput | null > | null,
  or?: Array< ModelProductCategoryConditionInput | null > | null,
  not?: ModelProductCategoryConditionInput | null,
};

export type ModelProductTypeInput = {
  eq?: ProductType | null,
  ne?: ProductType | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ProductCategory = {
  __typename: "ProductCategory",
  id: string,
  productType?: ProductType | null,
  name?: string | null,
  image?: string | null,
  active?: boolean | null,
  sort?: number | null,
  productSubCategories?: ModelProductSubCategoryConnection | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductSubCategoryConnection = {
  __typename: "ModelProductSubCategoryConnection",
  items:  Array<ProductSubCategory | null >,
  nextToken?: string | null,
};

export type ProductSubCategory = {
  __typename: "ProductSubCategory",
  id: string,
  name?: string | null,
  image?: string | null,
  active?: boolean | null,
  sort?: number | null,
  productCategoryId: string,
  productCategory?: ProductCategory | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  code?: string | null,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  images?: string | null,
  documents?: string | null,
  listPrice?: number | null,
  unitPrice?: number | null,
  tierPrice?: string | null,
  unitType?: UnitType | null,
  taxCategoryId?: string | null,
  attributes?: string | null,
  weight?: number | null,
  active?: boolean | null,
  verified?: boolean | null,
  taxExempt?: boolean | null,
  keywords?: Array< string | null > | null,
  leadTime?: string | null,
  rating?: number | null,
  stock?: number | null,
  sellerId: string,
  seller?: Seller | null,
  productCategoryId: string,
  productCategory?: ProductCategory | null,
  productSubCategoryId: string,
  productSubCategory?: ProductSubCategory | null,
  feedbacks?: ModelProductFeedbackConnection | null,
  quotes?: ModelQuoteConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum UnitType {
  KG = "KG",
  PACK = "PACK",
}


export type Seller = {
  __typename: "Seller",
  id: string,
  name?: string | null,
  profile?: string | null,
  image?: string | null,
  taxId?: string | null,
  active?: boolean | null,
  verified?: boolean | null,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  address?: string | null,
  attributes?: string | null,
  images?: string | null,
  documents?: string | null,
  rating?: number | null,
  bank?: string | null,
  age?: number | null,
  gender?: Gender | null,
  details?: string | null,
  productDetails?: string | null,
  industryId?: string | null,
  industry?: Industry | null,
  businessId?: string | null,
  business?: Business | null,
  products?: ModelProductConnection | null,
  orders?: ModelOrderConnection | null,
  users?: ModelSellerUserConnection | null,
  chats?: ModelChatConnection | null,
  messages?: ModelMessageConnection | null,
  quotes?: ModelQuoteConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}


export type Industry = {
  __typename: "Industry",
  id: string,
  name?: string | null,
  sellers?: ModelSellerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSellerConnection = {
  __typename: "ModelSellerConnection",
  items:  Array<Seller | null >,
  nextToken?: string | null,
};

export type Business = {
  __typename: "Business",
  id: string,
  name?: string | null,
  sellers?: ModelSellerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  code?: string | null,
  items?: string | null,
  rating?: number | null,
  buyerId: string,
  buyer?: Buyer | null,
  sellerId: string,
  seller?: Seller | null,
  paymentId: string,
  payment?: Payment | null,
  userId: string,
  user?: User | null,
  phone?: string | null,
  currency?: string | null,
  taxTotal?: number | null,
  deliveryTotal?: number | null,
  subTotal?: number | null,
  total?: number | null,
  reason?: string | null,
  pickupAddress?: string | null,
  billingAddress?: string | null,
  deliveryAddress?: string | null,
  orderStatus?: OrderStatus | null,
  changeLog?: string | null,
  shipmentDetails?: string | null,
  orderDate: string,
  extCarrierId?: string | null,
  serviceCode?: string | null,
  extShipmentId?: string | null,
  rateId?: string | null,
  specialInstructions?: string | null,
  deliveryInstructions?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Buyer = {
  __typename: "Buyer",
  id: string,
  buyerType?: BuyerType | null,
  name?: string | null,
  profile?: string | null,
  image?: string | null,
  taxId?: string | null,
  active?: boolean | null,
  verified?: boolean | null,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  address?: string | null,
  attributes?: string | null,
  images?: string | null,
  documents?: string | null,
  categories?: Array< string | null > | null,
  cart?: Cart | null,
  rating?: number | null,
  age?: number | null,
  gender?: Gender | null,
  orders?: ModelOrderConnection | null,
  users?: ModelBuyerUserConnection | null,
  chats?: ModelChatConnection | null,
  messages?: ModelMessageConnection | null,
  payments?: ModelPaymentConnection | null,
  quotes?: ModelQuoteConnection | null,
  createdAt: string,
  updatedAt: string,
  buyerCartId?: string | null,
};

export enum BuyerType {
  ONLINE_RETAILER = "ONLINE_RETAILER",
  OFFLINE_RETAILER = "OFFLINE_RETAILER",
  MANUFACTURER = "MANUFACTURER",
  WHOLESALER = "WHOLESALER",
  SERVICE_PROVIDER = "SERVICE_PROVIDER",
  INDIVIDUAL = "INDIVIDUAL",
  OTHERS = "OTHERS",
}


export type Cart = {
  __typename: "Cart",
  id: string,
  buyer?: Buyer | null,
  items?: string | null,
  subTotal?: number | null,
  taxTotal?: number | null,
  deliveryTotal?: number | null,
  total?: number | null,
  pickupAddress?: string | null,
  billingAddress?: string | null,
  deliveryAddress?: string | null,
  lock?: boolean | null,
  createdAt: string,
  updatedAt: string,
  cartBuyerId?: string | null,
};

export type ModelBuyerUserConnection = {
  __typename: "ModelBuyerUserConnection",
  items:  Array<BuyerUser | null >,
  nextToken?: string | null,
};

export type BuyerUser = {
  __typename: "BuyerUser",
  id: string,
  buyerId: string,
  buyer?: Buyer | null,
  userId: string,
  user?: User | null,
  role?: Role | null,
  productFeedbacks?: ModelProductFeedbackConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  photo?: string | null,
  phone?: string | null,
  email?: string | null,
  role?: Role | null,
  deleted?: boolean | null,
  userTypeId?: string | null,
  userType?: UserType | null,
  buyers?: ModelBuyerUserConnection | null,
  sellers?: ModelSellerUserConnection | null,
  devices?: ModelUserDeviceConnection | null,
  notifications?: ModelNotificationConnection | null,
  orders?: ModelOrderConnection | null,
  payments?: ModelPaymentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum Role {
  OWNER = "OWNER",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}


export type UserType = {
  __typename: "UserType",
  id: string,
  name?: string | null,
  category?: string | null,
  users?: ModelUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSellerUserConnection = {
  __typename: "ModelSellerUserConnection",
  items:  Array<SellerUser | null >,
  nextToken?: string | null,
};

export type SellerUser = {
  __typename: "SellerUser",
  id: string,
  sellerId: string,
  seller?: Seller | null,
  userId: string,
  user?: User | null,
  role?: Role | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserDeviceConnection = {
  __typename: "ModelUserDeviceConnection",
  items:  Array<UserDevice | null >,
  nextToken?: string | null,
};

export type UserDevice = {
  __typename: "UserDevice",
  id: string,
  userId: string,
  type?: DeviceType | null,
  app?: App | null,
  name?: string | null,
  meta?: string | null,
  token?: string | null,
  arn?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum DeviceType {
  IOS = "IOS",
  ANDROID = "ANDROID",
}


export enum App {
  SELLER = "SELLER",
  BUYER = "BUYER",
}


export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  userId: string,
  type?: NotificationType | null,
  typeId?: string | null,
  app?: App | null,
  senderId: string,
  sender?: User | null,
  title?: string | null,
  meta?: string | null,
  message?: string | null,
  sent: boolean,
  read: boolean,
  createdAt: string,
  updatedAt: string,
};

export enum NotificationType {
  OFFER = "OFFER",
  GENERAL = "GENERAL",
  ORDER = "ORDER",
  CHAT = "CHAT",
}


export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
};

export type Payment = {
  __typename: "Payment",
  id: string,
  buyerId: string,
  buyer?: Buyer | null,
  userId: string,
  user?: User | null,
  amount?: number | null,
  currency?: string | null,
  status?: PaymentStatus | null,
  paymentIntentId?: string | null,
  paymentIntent?: string | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum PaymentStatus {
  INITIATED = "INITIATED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  REFUND_PROCESSING = "REFUND_PROCESSING",
  REFUNDED = "REFUNDED",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
}


export type ModelProductFeedbackConnection = {
  __typename: "ModelProductFeedbackConnection",
  items:  Array<ProductFeedback | null >,
  nextToken?: string | null,
};

export type ProductFeedback = {
  __typename: "ProductFeedback",
  id: string,
  productId: string,
  product?: Product | null,
  buyerUserId: string,
  buyerUser?: BuyerUser | null,
  seller?: Seller | null,
  comment?: string | null,
  isVerified?: boolean | null,
  rating?: number | null,
  media?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  productFeedbackSellerId?: string | null,
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

export type Chat = {
  __typename: "Chat",
  id: string,
  buyerId: string,
  buyer?: Buyer | null,
  sellerId: string,
  seller?: Seller | null,
  message?: Message | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  chatMessageId?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  chatId: string,
  chat?: Chat | null,
  sellerId?: string | null,
  seller?: Seller | null,
  buyerId?: string | null,
  buyer?: Buyer | null,
  parentMessage?: Message | null,
  sender: User,
  senderReceiver?: string | null,
  content?: string | null,
  media?: string | null,
  readBy?: string | null,
  createdAt: string,
  updatedAt: string,
  messageParentMessageId?: string | null,
  messageSenderId: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelQuoteConnection = {
  __typename: "ModelQuoteConnection",
  items:  Array<Quote | null >,
  nextToken?: string | null,
};

export type Quote = {
  __typename: "Quote",
  id: string,
  productId: string,
  product?: Product | null,
  buyerId: string,
  buyer?: Buyer | null,
  sellerId: string,
  seller?: Seller | null,
  quantity?: number | null,
  amount?: number | null,
  media?: string | null,
  details?: string | null,
  status?: QuoteStatus | null,
  createdAt: string,
  updatedAt: string,
};

export enum QuoteStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}


export enum OrderStatus {
  OPEN = "OPEN",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CANCEL_REQUESTED = "CANCEL_REQUESTED",
  CANCEL_ACCEPTED = "CANCEL_ACCEPTED",
  CANCEL_REJECTED = "CANCEL_REJECTED",
  RETURN_REQUESTED = "RETURN_REQUESTED",
  RETURN_ACCEPTED = "RETURN_ACCEPTED",
  RETURN_REJECTED = "RETURN_REJECTED",
  RETURNED = "RETURNED",
  CLOSED = "CLOSED",
  CANCELLED = "CANCELLED",
}


export type UpdateProductCategoryInput = {
  id: string,
  productType?: ProductType | null,
  name?: string | null,
  image?: string | null,
  active?: boolean | null,
  sort?: number | null,
};

export type DeleteProductCategoryInput = {
  id: string,
};

export type CreateProductSubCategoryInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  active?: boolean | null,
  sort?: number | null,
  productCategoryId: string,
};

export type ModelProductSubCategoryConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  sort?: ModelIntInput | null,
  productCategoryId?: ModelIDInput | null,
  and?: Array< ModelProductSubCategoryConditionInput | null > | null,
  or?: Array< ModelProductSubCategoryConditionInput | null > | null,
  not?: ModelProductSubCategoryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductSubCategoryInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  active?: boolean | null,
  sort?: number | null,
  productCategoryId?: string | null,
};

export type DeleteProductSubCategoryInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  code?: string | null,
  items?: string | null,
  rating?: number | null,
  buyerId: string,
  sellerId: string,
  paymentId: string,
  userId: string,
  phone?: string | null,
  currency?: string | null,
  taxTotal?: number | null,
  deliveryTotal?: number | null,
  subTotal?: number | null,
  total?: number | null,
  reason?: string | null,
  pickupAddress?: string | null,
  billingAddress?: string | null,
  deliveryAddress?: string | null,
  orderStatus?: OrderStatus | null,
  changeLog?: string | null,
  shipmentDetails?: string | null,
  orderDate: string,
  extCarrierId?: string | null,
  serviceCode?: string | null,
  extShipmentId?: string | null,
  rateId?: string | null,
  specialInstructions?: string | null,
  deliveryInstructions?: string | null,
};

export type ModelOrderConditionInput = {
  code?: ModelStringInput | null,
  items?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  buyerId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  paymentId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  taxTotal?: ModelFloatInput | null,
  deliveryTotal?: ModelFloatInput | null,
  subTotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  reason?: ModelStringInput | null,
  pickupAddress?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  deliveryAddress?: ModelStringInput | null,
  orderStatus?: ModelOrderStatusInput | null,
  changeLog?: ModelStringInput | null,
  shipmentDetails?: ModelStringInput | null,
  orderDate?: ModelStringInput | null,
  extCarrierId?: ModelStringInput | null,
  serviceCode?: ModelStringInput | null,
  extShipmentId?: ModelStringInput | null,
  rateId?: ModelStringInput | null,
  specialInstructions?: ModelStringInput | null,
  deliveryInstructions?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type UpdateOrderInput = {
  id: string,
  code?: string | null,
  items?: string | null,
  rating?: number | null,
  buyerId?: string | null,
  sellerId?: string | null,
  paymentId?: string | null,
  userId?: string | null,
  phone?: string | null,
  currency?: string | null,
  taxTotal?: number | null,
  deliveryTotal?: number | null,
  subTotal?: number | null,
  total?: number | null,
  reason?: string | null,
  pickupAddress?: string | null,
  billingAddress?: string | null,
  deliveryAddress?: string | null,
  orderStatus?: OrderStatus | null,
  changeLog?: string | null,
  shipmentDetails?: string | null,
  orderDate?: string | null,
  extCarrierId?: string | null,
  serviceCode?: string | null,
  extShipmentId?: string | null,
  rateId?: string | null,
  specialInstructions?: string | null,
  deliveryInstructions?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreatePaymentInput = {
  id?: string | null,
  buyerId: string,
  userId: string,
  amount?: number | null,
  currency?: string | null,
  status?: PaymentStatus | null,
  paymentIntentId?: string | null,
  paymentIntent?: string | null,
};

export type ModelPaymentConditionInput = {
  buyerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  status?: ModelPaymentStatusInput | null,
  paymentIntentId?: ModelStringInput | null,
  paymentIntent?: ModelStringInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
};

export type ModelPaymentStatusInput = {
  eq?: PaymentStatus | null,
  ne?: PaymentStatus | null,
};

export type UpdatePaymentInput = {
  id: string,
  buyerId?: string | null,
  userId?: string | null,
  amount?: number | null,
  currency?: string | null,
  status?: PaymentStatus | null,
  paymentIntentId?: string | null,
  paymentIntent?: string | null,
};

export type DeletePaymentInput = {
  id: string,
};

export type CreateCartInput = {
  id?: string | null,
  items?: string | null,
  subTotal?: number | null,
  taxTotal?: number | null,
  deliveryTotal?: number | null,
  total?: number | null,
  pickupAddress?: string | null,
  billingAddress?: string | null,
  deliveryAddress?: string | null,
  lock?: boolean | null,
  cartBuyerId?: string | null,
};

export type ModelCartConditionInput = {
  items?: ModelStringInput | null,
  subTotal?: ModelFloatInput | null,
  taxTotal?: ModelFloatInput | null,
  deliveryTotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  pickupAddress?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  deliveryAddress?: ModelStringInput | null,
  lock?: ModelBooleanInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
  cartBuyerId?: ModelIDInput | null,
};

export type UpdateCartInput = {
  id: string,
  items?: string | null,
  subTotal?: number | null,
  taxTotal?: number | null,
  deliveryTotal?: number | null,
  total?: number | null,
  pickupAddress?: string | null,
  billingAddress?: string | null,
  deliveryAddress?: string | null,
  lock?: boolean | null,
  cartBuyerId?: string | null,
};

export type DeleteCartInput = {
  id: string,
};

export type CreateBuyerInput = {
  id?: string | null,
  buyerType?: BuyerType | null,
  name?: string | null,
  profile?: string | null,
  image?: string | null,
  taxId?: string | null,
  active?: boolean | null,
  verified?: boolean | null,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  address?: string | null,
  attributes?: string | null,
  images?: string | null,
  documents?: string | null,
  categories?: Array< string | null > | null,
  rating?: number | null,
  age?: number | null,
  gender?: Gender | null,
  buyerCartId?: string | null,
};

export type ModelBuyerConditionInput = {
  buyerType?: ModelBuyerTypeInput | null,
  name?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  image?: ModelStringInput | null,
  taxId?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  website?: ModelStringInput | null,
  address?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  images?: ModelStringInput | null,
  documents?: ModelStringInput | null,
  categories?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  and?: Array< ModelBuyerConditionInput | null > | null,
  or?: Array< ModelBuyerConditionInput | null > | null,
  not?: ModelBuyerConditionInput | null,
  buyerCartId?: ModelIDInput | null,
};

export type ModelBuyerTypeInput = {
  eq?: BuyerType | null,
  ne?: BuyerType | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type UpdateBuyerInput = {
  id: string,
  buyerType?: BuyerType | null,
  name?: string | null,
  profile?: string | null,
  image?: string | null,
  taxId?: string | null,
  active?: boolean | null,
  verified?: boolean | null,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  address?: string | null,
  attributes?: string | null,
  images?: string | null,
  documents?: string | null,
  categories?: Array< string | null > | null,
  rating?: number | null,
  age?: number | null,
  gender?: Gender | null,
  buyerCartId?: string | null,
};

export type DeleteBuyerInput = {
  id: string,
};

export type CreateSellerInput = {
  id?: string | null,
  name?: string | null,
  profile?: string | null,
  image?: string | null,
  taxId?: string | null,
  active?: boolean | null,
  verified?: boolean | null,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  address?: string | null,
  attributes?: string | null,
  images?: string | null,
  documents?: string | null,
  rating?: number | null,
  bank?: string | null,
  age?: number | null,
  gender?: Gender | null,
  details?: string | null,
  productDetails?: string | null,
  industryId?: string | null,
  businessId?: string | null,
};

export type ModelSellerConditionInput = {
  name?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  image?: ModelStringInput | null,
  taxId?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  website?: ModelStringInput | null,
  address?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  images?: ModelStringInput | null,
  documents?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  bank?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  details?: ModelStringInput | null,
  productDetails?: ModelStringInput | null,
  industryId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelSellerConditionInput | null > | null,
  or?: Array< ModelSellerConditionInput | null > | null,
  not?: ModelSellerConditionInput | null,
};

export type UpdateSellerInput = {
  id: string,
  name?: string | null,
  profile?: string | null,
  image?: string | null,
  taxId?: string | null,
  active?: boolean | null,
  verified?: boolean | null,
  phone?: string | null,
  email?: string | null,
  website?: string | null,
  address?: string | null,
  attributes?: string | null,
  images?: string | null,
  documents?: string | null,
  rating?: number | null,
  bank?: string | null,
  age?: number | null,
  gender?: Gender | null,
  details?: string | null,
  productDetails?: string | null,
  industryId?: string | null,
  businessId?: string | null,
};

export type DeleteSellerInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  code?: string | null,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  images?: string | null,
  documents?: string | null,
  listPrice?: number | null,
  unitPrice?: number | null,
  tierPrice?: string | null,
  unitType?: UnitType | null,
  taxCategoryId?: string | null,
  attributes?: string | null,
  weight?: number | null,
  active?: boolean | null,
  verified?: boolean | null,
  taxExempt?: boolean | null,
  keywords?: Array< string | null > | null,
  leadTime?: string | null,
  rating?: number | null,
  stock?: number | null,
  sellerId: string,
  productCategoryId: string,
  productSubCategoryId: string,
};

export type ModelProductConditionInput = {
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  documents?: ModelStringInput | null,
  listPrice?: ModelFloatInput | null,
  unitPrice?: ModelFloatInput | null,
  tierPrice?: ModelStringInput | null,
  unitType?: ModelUnitTypeInput | null,
  taxCategoryId?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  taxExempt?: ModelBooleanInput | null,
  keywords?: ModelStringInput | null,
  leadTime?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  stock?: ModelIntInput | null,
  sellerId?: ModelIDInput | null,
  productCategoryId?: ModelIDInput | null,
  productSubCategoryId?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelUnitTypeInput = {
  eq?: UnitType | null,
  ne?: UnitType | null,
};

export type UpdateProductInput = {
  id: string,
  code?: string | null,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  images?: string | null,
  documents?: string | null,
  listPrice?: number | null,
  unitPrice?: number | null,
  tierPrice?: string | null,
  unitType?: UnitType | null,
  taxCategoryId?: string | null,
  attributes?: string | null,
  weight?: number | null,
  active?: boolean | null,
  verified?: boolean | null,
  taxExempt?: boolean | null,
  keywords?: Array< string | null > | null,
  leadTime?: string | null,
  rating?: number | null,
  stock?: number | null,
  sellerId?: string | null,
  productCategoryId?: string | null,
  productSubCategoryId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateProductFeedbackInput = {
  id?: string | null,
  productId: string,
  buyerUserId: string,
  comment?: string | null,
  isVerified?: boolean | null,
  rating?: number | null,
  media?: Array< string | null > | null,
  productFeedbackSellerId?: string | null,
};

export type ModelProductFeedbackConditionInput = {
  productId?: ModelIDInput | null,
  buyerUserId?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  rating?: ModelIntInput | null,
  media?: ModelStringInput | null,
  and?: Array< ModelProductFeedbackConditionInput | null > | null,
  or?: Array< ModelProductFeedbackConditionInput | null > | null,
  not?: ModelProductFeedbackConditionInput | null,
  productFeedbackSellerId?: ModelIDInput | null,
};

export type UpdateProductFeedbackInput = {
  id: string,
  productId?: string | null,
  buyerUserId?: string | null,
  comment?: string | null,
  isVerified?: boolean | null,
  rating?: number | null,
  media?: Array< string | null > | null,
  productFeedbackSellerId?: string | null,
};

export type DeleteProductFeedbackInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  photo?: string | null,
  phone?: string | null,
  email?: string | null,
  role?: Role | null,
  deleted?: boolean | null,
  userTypeId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  deleted?: ModelBooleanInput | null,
  userTypeId?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelRoleInput = {
  eq?: Role | null,
  ne?: Role | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  photo?: string | null,
  phone?: string | null,
  email?: string | null,
  role?: Role | null,
  deleted?: boolean | null,
  userTypeId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSellerUserInput = {
  id?: string | null,
  sellerId: string,
  userId: string,
  role?: Role | null,
};

export type ModelSellerUserConditionInput = {
  sellerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelSellerUserConditionInput | null > | null,
  or?: Array< ModelSellerUserConditionInput | null > | null,
  not?: ModelSellerUserConditionInput | null,
};

export type UpdateSellerUserInput = {
  id: string,
  sellerId?: string | null,
  userId?: string | null,
  role?: Role | null,
};

export type DeleteSellerUserInput = {
  id: string,
};

export type CreateBuyerUserInput = {
  id?: string | null,
  buyerId: string,
  userId: string,
  role?: Role | null,
};

export type ModelBuyerUserConditionInput = {
  buyerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelBuyerUserConditionInput | null > | null,
  or?: Array< ModelBuyerUserConditionInput | null > | null,
  not?: ModelBuyerUserConditionInput | null,
};

export type UpdateBuyerUserInput = {
  id: string,
  buyerId?: string | null,
  userId?: string | null,
  role?: Role | null,
};

export type DeleteBuyerUserInput = {
  id: string,
};

export type CreateUserDeviceInput = {
  id?: string | null,
  userId: string,
  type?: DeviceType | null,
  app?: App | null,
  name?: string | null,
  meta?: string | null,
  token?: string | null,
  arn?: string | null,
};

export type ModelUserDeviceConditionInput = {
  userId?: ModelIDInput | null,
  type?: ModelDeviceTypeInput | null,
  app?: ModelAppInput | null,
  name?: ModelStringInput | null,
  meta?: ModelStringInput | null,
  token?: ModelStringInput | null,
  arn?: ModelStringInput | null,
  and?: Array< ModelUserDeviceConditionInput | null > | null,
  or?: Array< ModelUserDeviceConditionInput | null > | null,
  not?: ModelUserDeviceConditionInput | null,
};

export type ModelDeviceTypeInput = {
  eq?: DeviceType | null,
  ne?: DeviceType | null,
};

export type ModelAppInput = {
  eq?: App | null,
  ne?: App | null,
};

export type UpdateUserDeviceInput = {
  id: string,
  userId?: string | null,
  type?: DeviceType | null,
  app?: App | null,
  name?: string | null,
  meta?: string | null,
  token?: string | null,
  arn?: string | null,
};

export type DeleteUserDeviceInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  userId: string,
  type?: NotificationType | null,
  typeId?: string | null,
  app?: App | null,
  senderId: string,
  title?: string | null,
  meta?: string | null,
  message?: string | null,
  sent: boolean,
  read: boolean,
  createdAt?: string | null,
};

export type ModelNotificationConditionInput = {
  userId?: ModelIDInput | null,
  type?: ModelNotificationTypeInput | null,
  typeId?: ModelStringInput | null,
  app?: ModelAppInput | null,
  senderId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  meta?: ModelStringInput | null,
  message?: ModelStringInput | null,
  sent?: ModelBooleanInput | null,
  read?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type ModelNotificationTypeInput = {
  eq?: NotificationType | null,
  ne?: NotificationType | null,
};

export type UpdateNotificationInput = {
  id: string,
  userId?: string | null,
  type?: NotificationType | null,
  typeId?: string | null,
  app?: App | null,
  senderId?: string | null,
  title?: string | null,
  meta?: string | null,
  message?: string | null,
  sent?: boolean | null,
  read?: boolean | null,
  createdAt?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateChatInput = {
  id?: string | null,
  buyerId: string,
  sellerId: string,
  chatMessageId?: string | null,
};

export type ModelChatConditionInput = {
  buyerId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
  chatMessageId?: ModelIDInput | null,
};

export type UpdateChatInput = {
  id: string,
  buyerId?: string | null,
  sellerId?: string | null,
  chatMessageId?: string | null,
};

export type DeleteChatInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  chatId: string,
  sellerId?: string | null,
  buyerId?: string | null,
  senderReceiver?: string | null,
  content?: string | null,
  media?: string | null,
  readBy?: string | null,
  messageParentMessageId?: string | null,
  messageSenderId: string,
};

export type ModelMessageConditionInput = {
  chatId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  senderReceiver?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  readBy?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  messageParentMessageId?: ModelIDInput | null,
  messageSenderId?: ModelIDInput | null,
};

export type UpdateMessageInput = {
  id: string,
  chatId?: string | null,
  sellerId?: string | null,
  buyerId?: string | null,
  senderReceiver?: string | null,
  content?: string | null,
  media?: string | null,
  readBy?: string | null,
  messageParentMessageId?: string | null,
  messageSenderId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateIndustryInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelIndustryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelIndustryConditionInput | null > | null,
  or?: Array< ModelIndustryConditionInput | null > | null,
  not?: ModelIndustryConditionInput | null,
};

export type UpdateIndustryInput = {
  id: string,
  name?: string | null,
};

export type DeleteIndustryInput = {
  id: string,
};

export type CreateBusinessInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelBusinessConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBusinessConditionInput | null > | null,
  or?: Array< ModelBusinessConditionInput | null > | null,
  not?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessInput = {
  id: string,
  name?: string | null,
};

export type DeleteBusinessInput = {
  id: string,
};

export type CreateUserTypeInput = {
  id?: string | null,
  name?: string | null,
  category?: string | null,
};

export type ModelUserTypeConditionInput = {
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelUserTypeConditionInput | null > | null,
  or?: Array< ModelUserTypeConditionInput | null > | null,
  not?: ModelUserTypeConditionInput | null,
};

export type UpdateUserTypeInput = {
  id: string,
  name?: string | null,
  category?: string | null,
};

export type DeleteUserTypeInput = {
  id: string,
};

export type CreateQuoteInput = {
  id?: string | null,
  productId: string,
  buyerId: string,
  sellerId: string,
  quantity?: number | null,
  amount?: number | null,
  media?: string | null,
  details?: string | null,
  status?: QuoteStatus | null,
};

export type ModelQuoteConditionInput = {
  productId?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  amount?: ModelFloatInput | null,
  media?: ModelStringInput | null,
  details?: ModelStringInput | null,
  status?: ModelQuoteStatusInput | null,
  and?: Array< ModelQuoteConditionInput | null > | null,
  or?: Array< ModelQuoteConditionInput | null > | null,
  not?: ModelQuoteConditionInput | null,
};

export type ModelQuoteStatusInput = {
  eq?: QuoteStatus | null,
  ne?: QuoteStatus | null,
};

export type UpdateQuoteInput = {
  id: string,
  productId?: string | null,
  buyerId?: string | null,
  sellerId?: string | null,
  quantity?: number | null,
  amount?: number | null,
  media?: string | null,
  details?: string | null,
  status?: QuoteStatus | null,
};

export type DeleteQuoteInput = {
  id: string,
};

export type SearchableProductCategoryFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  image?: SearchableStringFilterInput | null,
  active?: SearchableBooleanFilterInput | null,
  sort?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  productType?: SearchableStringFilterInput | null,
  and?: Array< SearchableProductCategoryFilterInput | null > | null,
  or?: Array< SearchableProductCategoryFilterInput | null > | null,
  not?: SearchableProductCategoryFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableProductCategorySortInput = {
  field?: SearchableProductCategorySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProductCategorySortableFields {
  id = "id",
  name = "name",
  image = "image",
  active = "active",
  sort = "sort",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableProductCategoryAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProductCategoryAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableProductCategoryAggregateField {
  id = "id",
  productType = "productType",
  name = "name",
  image = "image",
  active = "active",
  sort = "sort",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProductCategoryConnection = {
  __typename: "SearchableProductCategoryConnection",
  items:  Array<ProductCategory | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type SearchableProductSubCategoryFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  image?: SearchableStringFilterInput | null,
  active?: SearchableBooleanFilterInput | null,
  sort?: SearchableIntFilterInput | null,
  productCategoryId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableProductSubCategoryFilterInput | null > | null,
  or?: Array< SearchableProductSubCategoryFilterInput | null > | null,
  not?: SearchableProductSubCategoryFilterInput | null,
};

export type SearchableProductSubCategorySortInput = {
  field?: SearchableProductSubCategorySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProductSubCategorySortableFields {
  id = "id",
  name = "name",
  image = "image",
  active = "active",
  sort = "sort",
  productCategoryId = "productCategoryId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProductSubCategoryAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProductSubCategoryAggregateField,
};

export enum SearchableProductSubCategoryAggregateField {
  id = "id",
  name = "name",
  image = "image",
  active = "active",
  sort = "sort",
  productCategoryId = "productCategoryId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProductSubCategoryConnection = {
  __typename: "SearchableProductSubCategoryConnection",
  items:  Array<ProductSubCategory | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableOrderFilterInput = {
  id?: SearchableIDFilterInput | null,
  code?: SearchableStringFilterInput | null,
  items?: SearchableStringFilterInput | null,
  rating?: SearchableIntFilterInput | null,
  buyerId?: SearchableIDFilterInput | null,
  sellerId?: SearchableIDFilterInput | null,
  paymentId?: SearchableIDFilterInput | null,
  userId?: SearchableIDFilterInput | null,
  phone?: SearchableStringFilterInput | null,
  currency?: SearchableStringFilterInput | null,
  taxTotal?: SearchableFloatFilterInput | null,
  deliveryTotal?: SearchableFloatFilterInput | null,
  subTotal?: SearchableFloatFilterInput | null,
  total?: SearchableFloatFilterInput | null,
  reason?: SearchableStringFilterInput | null,
  pickupAddress?: SearchableStringFilterInput | null,
  billingAddress?: SearchableStringFilterInput | null,
  deliveryAddress?: SearchableStringFilterInput | null,
  changeLog?: SearchableStringFilterInput | null,
  shipmentDetails?: SearchableStringFilterInput | null,
  orderDate?: SearchableStringFilterInput | null,
  extCarrierId?: SearchableStringFilterInput | null,
  serviceCode?: SearchableStringFilterInput | null,
  extShipmentId?: SearchableStringFilterInput | null,
  rateId?: SearchableStringFilterInput | null,
  specialInstructions?: SearchableStringFilterInput | null,
  deliveryInstructions?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  orderStatus?: SearchableStringFilterInput | null,
  and?: Array< SearchableOrderFilterInput | null > | null,
  or?: Array< SearchableOrderFilterInput | null > | null,
  not?: SearchableOrderFilterInput | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableOrderSortInput = {
  field?: SearchableOrderSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableOrderSortableFields {
  id = "id",
  code = "code",
  items = "items",
  rating = "rating",
  buyerId = "buyerId",
  sellerId = "sellerId",
  paymentId = "paymentId",
  userId = "userId",
  phone = "phone",
  currency = "currency",
  taxTotal = "taxTotal",
  deliveryTotal = "deliveryTotal",
  subTotal = "subTotal",
  total = "total",
  reason = "reason",
  pickupAddress = "pickupAddress",
  billingAddress = "billingAddress",
  deliveryAddress = "deliveryAddress",
  changeLog = "changeLog",
  shipmentDetails = "shipmentDetails",
  orderDate = "orderDate",
  extCarrierId = "extCarrierId",
  serviceCode = "serviceCode",
  extShipmentId = "extShipmentId",
  rateId = "rateId",
  specialInstructions = "specialInstructions",
  deliveryInstructions = "deliveryInstructions",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableOrderAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableOrderAggregateField,
};

export enum SearchableOrderAggregateField {
  id = "id",
  code = "code",
  items = "items",
  rating = "rating",
  buyerId = "buyerId",
  sellerId = "sellerId",
  paymentId = "paymentId",
  userId = "userId",
  phone = "phone",
  currency = "currency",
  taxTotal = "taxTotal",
  deliveryTotal = "deliveryTotal",
  subTotal = "subTotal",
  total = "total",
  reason = "reason",
  pickupAddress = "pickupAddress",
  billingAddress = "billingAddress",
  deliveryAddress = "deliveryAddress",
  orderStatus = "orderStatus",
  changeLog = "changeLog",
  shipmentDetails = "shipmentDetails",
  orderDate = "orderDate",
  extCarrierId = "extCarrierId",
  serviceCode = "serviceCode",
  extShipmentId = "extShipmentId",
  rateId = "rateId",
  specialInstructions = "specialInstructions",
  deliveryInstructions = "deliveryInstructions",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableOrderConnection = {
  __typename: "SearchableOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchablePaymentFilterInput = {
  id?: SearchableIDFilterInput | null,
  buyerId?: SearchableIDFilterInput | null,
  userId?: SearchableIDFilterInput | null,
  amount?: SearchableFloatFilterInput | null,
  currency?: SearchableStringFilterInput | null,
  paymentIntentId?: SearchableStringFilterInput | null,
  paymentIntent?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  and?: Array< SearchablePaymentFilterInput | null > | null,
  or?: Array< SearchablePaymentFilterInput | null > | null,
  not?: SearchablePaymentFilterInput | null,
};

export type SearchablePaymentSortInput = {
  field?: SearchablePaymentSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePaymentSortableFields {
  id = "id",
  buyerId = "buyerId",
  userId = "userId",
  amount = "amount",
  currency = "currency",
  paymentIntentId = "paymentIntentId",
  paymentIntent = "paymentIntent",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePaymentAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchablePaymentAggregateField,
};

export enum SearchablePaymentAggregateField {
  id = "id",
  buyerId = "buyerId",
  userId = "userId",
  amount = "amount",
  currency = "currency",
  status = "status",
  paymentIntentId = "paymentIntentId",
  paymentIntent = "paymentIntent",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchablePaymentConnection = {
  __typename: "SearchablePaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableBuyerFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  profile?: SearchableStringFilterInput | null,
  image?: SearchableStringFilterInput | null,
  taxId?: SearchableStringFilterInput | null,
  active?: SearchableBooleanFilterInput | null,
  verified?: SearchableBooleanFilterInput | null,
  phone?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  website?: SearchableStringFilterInput | null,
  address?: SearchableStringFilterInput | null,
  attributes?: SearchableStringFilterInput | null,
  images?: SearchableStringFilterInput | null,
  documents?: SearchableStringFilterInput | null,
  categories?: SearchableStringFilterInput | null,
  rating?: SearchableFloatFilterInput | null,
  age?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  buyerCartId?: SearchableIDFilterInput | null,
  buyerType?: SearchableStringFilterInput | null,
  gender?: SearchableStringFilterInput | null,
  and?: Array< SearchableBuyerFilterInput | null > | null,
  or?: Array< SearchableBuyerFilterInput | null > | null,
  not?: SearchableBuyerFilterInput | null,
};

export type SearchableBuyerSortInput = {
  field?: SearchableBuyerSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBuyerSortableFields {
  id = "id",
  name = "name",
  profile = "profile",
  image = "image",
  taxId = "taxId",
  active = "active",
  verified = "verified",
  phone = "phone",
  email = "email",
  website = "website",
  address = "address",
  attributes = "attributes",
  images = "images",
  documents = "documents",
  categories = "categories",
  rating = "rating",
  age = "age",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  buyerCartId = "buyerCartId",
}


export type SearchableBuyerAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableBuyerAggregateField,
};

export enum SearchableBuyerAggregateField {
  id = "id",
  buyerType = "buyerType",
  name = "name",
  profile = "profile",
  image = "image",
  taxId = "taxId",
  active = "active",
  verified = "verified",
  phone = "phone",
  email = "email",
  website = "website",
  address = "address",
  attributes = "attributes",
  images = "images",
  documents = "documents",
  categories = "categories",
  rating = "rating",
  age = "age",
  gender = "gender",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  buyerCartId = "buyerCartId",
}


export type SearchableBuyerConnection = {
  __typename: "SearchableBuyerConnection",
  items:  Array<Buyer | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableSellerFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  profile?: SearchableStringFilterInput | null,
  image?: SearchableStringFilterInput | null,
  taxId?: SearchableStringFilterInput | null,
  active?: SearchableBooleanFilterInput | null,
  verified?: SearchableBooleanFilterInput | null,
  phone?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  website?: SearchableStringFilterInput | null,
  address?: SearchableStringFilterInput | null,
  attributes?: SearchableStringFilterInput | null,
  images?: SearchableStringFilterInput | null,
  documents?: SearchableStringFilterInput | null,
  rating?: SearchableFloatFilterInput | null,
  bank?: SearchableStringFilterInput | null,
  age?: SearchableIntFilterInput | null,
  details?: SearchableStringFilterInput | null,
  productDetails?: SearchableStringFilterInput | null,
  industryId?: SearchableIDFilterInput | null,
  businessId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  gender?: SearchableStringFilterInput | null,
  and?: Array< SearchableSellerFilterInput | null > | null,
  or?: Array< SearchableSellerFilterInput | null > | null,
  not?: SearchableSellerFilterInput | null,
};

export type SearchableSellerSortInput = {
  field?: SearchableSellerSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableSellerSortableFields {
  id = "id",
  name = "name",
  profile = "profile",
  image = "image",
  taxId = "taxId",
  active = "active",
  verified = "verified",
  phone = "phone",
  email = "email",
  website = "website",
  address = "address",
  attributes = "attributes",
  images = "images",
  documents = "documents",
  rating = "rating",
  bank = "bank",
  age = "age",
  details = "details",
  productDetails = "productDetails",
  industryId = "industryId",
  businessId = "businessId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableSellerAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableSellerAggregateField,
};

export enum SearchableSellerAggregateField {
  id = "id",
  name = "name",
  profile = "profile",
  image = "image",
  taxId = "taxId",
  active = "active",
  verified = "verified",
  phone = "phone",
  email = "email",
  website = "website",
  address = "address",
  attributes = "attributes",
  images = "images",
  documents = "documents",
  rating = "rating",
  bank = "bank",
  age = "age",
  gender = "gender",
  details = "details",
  productDetails = "productDetails",
  industryId = "industryId",
  businessId = "businessId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableSellerConnection = {
  __typename: "SearchableSellerConnection",
  items:  Array<Seller | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableProductFilterInput = {
  id?: SearchableIDFilterInput | null,
  code?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  image?: SearchableStringFilterInput | null,
  images?: SearchableStringFilterInput | null,
  documents?: SearchableStringFilterInput | null,
  listPrice?: SearchableFloatFilterInput | null,
  unitPrice?: SearchableFloatFilterInput | null,
  tierPrice?: SearchableStringFilterInput | null,
  taxCategoryId?: SearchableStringFilterInput | null,
  attributes?: SearchableStringFilterInput | null,
  weight?: SearchableFloatFilterInput | null,
  active?: SearchableBooleanFilterInput | null,
  verified?: SearchableBooleanFilterInput | null,
  taxExempt?: SearchableBooleanFilterInput | null,
  keywords?: SearchableStringFilterInput | null,
  leadTime?: SearchableStringFilterInput | null,
  rating?: SearchableFloatFilterInput | null,
  stock?: SearchableIntFilterInput | null,
  sellerId?: SearchableIDFilterInput | null,
  productCategoryId?: SearchableIDFilterInput | null,
  productSubCategoryId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  unitType?: SearchableStringFilterInput | null,
  and?: Array< SearchableProductFilterInput | null > | null,
  or?: Array< SearchableProductFilterInput | null > | null,
  not?: SearchableProductFilterInput | null,
};

export type SearchableProductSortInput = {
  field?: SearchableProductSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProductSortableFields {
  id = "id",
  code = "code",
  name = "name",
  description = "description",
  image = "image",
  images = "images",
  documents = "documents",
  listPrice = "listPrice",
  unitPrice = "unitPrice",
  tierPrice = "tierPrice",
  taxCategoryId = "taxCategoryId",
  attributes = "attributes",
  weight = "weight",
  active = "active",
  verified = "verified",
  taxExempt = "taxExempt",
  keywords = "keywords",
  leadTime = "leadTime",
  rating = "rating",
  stock = "stock",
  sellerId = "sellerId",
  productCategoryId = "productCategoryId",
  productSubCategoryId = "productSubCategoryId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProductAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProductAggregateField,
};

export enum SearchableProductAggregateField {
  id = "id",
  code = "code",
  name = "name",
  description = "description",
  image = "image",
  images = "images",
  documents = "documents",
  listPrice = "listPrice",
  unitPrice = "unitPrice",
  tierPrice = "tierPrice",
  unitType = "unitType",
  taxCategoryId = "taxCategoryId",
  attributes = "attributes",
  weight = "weight",
  active = "active",
  verified = "verified",
  taxExempt = "taxExempt",
  keywords = "keywords",
  leadTime = "leadTime",
  rating = "rating",
  stock = "stock",
  sellerId = "sellerId",
  productCategoryId = "productCategoryId",
  productSubCategoryId = "productSubCategoryId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProductConnection = {
  __typename: "SearchableProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableProductFeedbackFilterInput = {
  id?: SearchableIDFilterInput | null,
  productId?: SearchableIDFilterInput | null,
  buyerUserId?: SearchableIDFilterInput | null,
  comment?: SearchableStringFilterInput | null,
  isVerified?: SearchableBooleanFilterInput | null,
  rating?: SearchableIntFilterInput | null,
  media?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  productFeedbackSellerId?: SearchableIDFilterInput | null,
  and?: Array< SearchableProductFeedbackFilterInput | null > | null,
  or?: Array< SearchableProductFeedbackFilterInput | null > | null,
  not?: SearchableProductFeedbackFilterInput | null,
};

export type SearchableProductFeedbackSortInput = {
  field?: SearchableProductFeedbackSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProductFeedbackSortableFields {
  id = "id",
  productId = "productId",
  buyerUserId = "buyerUserId",
  comment = "comment",
  isVerified = "isVerified",
  rating = "rating",
  media = "media",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  productFeedbackSellerId = "productFeedbackSellerId",
}


export type SearchableProductFeedbackAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProductFeedbackAggregateField,
};

export enum SearchableProductFeedbackAggregateField {
  id = "id",
  productId = "productId",
  buyerUserId = "buyerUserId",
  comment = "comment",
  isVerified = "isVerified",
  rating = "rating",
  media = "media",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  productFeedbackSellerId = "productFeedbackSellerId",
}


export type SearchableProductFeedbackConnection = {
  __typename: "SearchableProductFeedbackConnection",
  items:  Array<ProductFeedback | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  photo?: SearchableStringFilterInput | null,
  phone?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  deleted?: SearchableBooleanFilterInput | null,
  userTypeId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  role?: SearchableStringFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  id = "id",
  name = "name",
  photo = "photo",
  phone = "phone",
  email = "email",
  deleted = "deleted",
  userTypeId = "userTypeId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUserAggregateField,
};

export enum SearchableUserAggregateField {
  id = "id",
  name = "name",
  photo = "photo",
  phone = "phone",
  email = "email",
  role = "role",
  deleted = "deleted",
  userTypeId = "userTypeId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserConnection = {
  __typename: "SearchableUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableSellerUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  sellerId?: SearchableIDFilterInput | null,
  userId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  role?: SearchableStringFilterInput | null,
  and?: Array< SearchableSellerUserFilterInput | null > | null,
  or?: Array< SearchableSellerUserFilterInput | null > | null,
  not?: SearchableSellerUserFilterInput | null,
};

export type SearchableSellerUserSortInput = {
  field?: SearchableSellerUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableSellerUserSortableFields {
  id = "id",
  sellerId = "sellerId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableSellerUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableSellerUserAggregateField,
};

export enum SearchableSellerUserAggregateField {
  id = "id",
  sellerId = "sellerId",
  userId = "userId",
  role = "role",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableSellerUserConnection = {
  __typename: "SearchableSellerUserConnection",
  items:  Array<SellerUser | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableBuyerUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  buyerId?: SearchableIDFilterInput | null,
  userId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  role?: SearchableStringFilterInput | null,
  and?: Array< SearchableBuyerUserFilterInput | null > | null,
  or?: Array< SearchableBuyerUserFilterInput | null > | null,
  not?: SearchableBuyerUserFilterInput | null,
};

export type SearchableBuyerUserSortInput = {
  field?: SearchableBuyerUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBuyerUserSortableFields {
  id = "id",
  buyerId = "buyerId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableBuyerUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableBuyerUserAggregateField,
};

export enum SearchableBuyerUserAggregateField {
  id = "id",
  buyerId = "buyerId",
  userId = "userId",
  role = "role",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableBuyerUserConnection = {
  __typename: "SearchableBuyerUserConnection",
  items:  Array<BuyerUser | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableChatFilterInput = {
  id?: SearchableIDFilterInput | null,
  buyerId?: SearchableIDFilterInput | null,
  sellerId?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  chatMessageId?: SearchableIDFilterInput | null,
  and?: Array< SearchableChatFilterInput | null > | null,
  or?: Array< SearchableChatFilterInput | null > | null,
  not?: SearchableChatFilterInput | null,
};

export type SearchableChatSortInput = {
  field?: SearchableChatSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableChatSortableFields {
  id = "id",
  buyerId = "buyerId",
  sellerId = "sellerId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  chatMessageId = "chatMessageId",
}


export type SearchableChatAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableChatAggregateField,
};

export enum SearchableChatAggregateField {
  id = "id",
  buyerId = "buyerId",
  sellerId = "sellerId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  chatMessageId = "chatMessageId",
}


export type SearchableChatConnection = {
  __typename: "SearchableChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableMessageFilterInput = {
  id?: SearchableIDFilterInput | null,
  chatId?: SearchableIDFilterInput | null,
  sellerId?: SearchableIDFilterInput | null,
  buyerId?: SearchableIDFilterInput | null,
  senderReceiver?: SearchableStringFilterInput | null,
  content?: SearchableStringFilterInput | null,
  media?: SearchableStringFilterInput | null,
  readBy?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  messageParentMessageId?: SearchableIDFilterInput | null,
  messageSenderId?: SearchableIDFilterInput | null,
  and?: Array< SearchableMessageFilterInput | null > | null,
  or?: Array< SearchableMessageFilterInput | null > | null,
  not?: SearchableMessageFilterInput | null,
};

export type SearchableMessageSortInput = {
  field?: SearchableMessageSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableMessageSortableFields {
  id = "id",
  chatId = "chatId",
  sellerId = "sellerId",
  buyerId = "buyerId",
  senderReceiver = "senderReceiver",
  content = "content",
  media = "media",
  readBy = "readBy",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  messageParentMessageId = "messageParentMessageId",
  messageSenderId = "messageSenderId",
}


export type SearchableMessageAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableMessageAggregateField,
};

export enum SearchableMessageAggregateField {
  id = "id",
  chatId = "chatId",
  sellerId = "sellerId",
  buyerId = "buyerId",
  senderReceiver = "senderReceiver",
  content = "content",
  media = "media",
  readBy = "readBy",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  messageParentMessageId = "messageParentMessageId",
  messageSenderId = "messageSenderId",
}


export type SearchableMessageConnection = {
  __typename: "SearchableMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableIndustryFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableIndustryFilterInput | null > | null,
  or?: Array< SearchableIndustryFilterInput | null > | null,
  not?: SearchableIndustryFilterInput | null,
};

export type SearchableIndustrySortInput = {
  field?: SearchableIndustrySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableIndustrySortableFields {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableIndustryAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableIndustryAggregateField,
};

export enum SearchableIndustryAggregateField {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableIndustryConnection = {
  __typename: "SearchableIndustryConnection",
  items:  Array<Industry | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableBusinessFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableBusinessFilterInput | null > | null,
  or?: Array< SearchableBusinessFilterInput | null > | null,
  not?: SearchableBusinessFilterInput | null,
};

export type SearchableBusinessSortInput = {
  field?: SearchableBusinessSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBusinessSortableFields {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableBusinessAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableBusinessAggregateField,
};

export enum SearchableBusinessAggregateField {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableBusinessConnection = {
  __typename: "SearchableBusinessConnection",
  items:  Array<Business | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableUserTypeFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  category?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableUserTypeFilterInput | null > | null,
  or?: Array< SearchableUserTypeFilterInput | null > | null,
  not?: SearchableUserTypeFilterInput | null,
};

export type SearchableUserTypeSortInput = {
  field?: SearchableUserTypeSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserTypeSortableFields {
  id = "id",
  name = "name",
  category = "category",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserTypeAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUserTypeAggregateField,
};

export enum SearchableUserTypeAggregateField {
  id = "id",
  name = "name",
  category = "category",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableUserTypeConnection = {
  __typename: "SearchableUserTypeConnection",
  items:  Array<UserType | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableQuoteFilterInput = {
  id?: SearchableIDFilterInput | null,
  productId?: SearchableIDFilterInput | null,
  buyerId?: SearchableIDFilterInput | null,
  sellerId?: SearchableIDFilterInput | null,
  quantity?: SearchableIntFilterInput | null,
  amount?: SearchableFloatFilterInput | null,
  media?: SearchableStringFilterInput | null,
  details?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  and?: Array< SearchableQuoteFilterInput | null > | null,
  or?: Array< SearchableQuoteFilterInput | null > | null,
  not?: SearchableQuoteFilterInput | null,
};

export type SearchableQuoteSortInput = {
  field?: SearchableQuoteSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableQuoteSortableFields {
  id = "id",
  productId = "productId",
  buyerId = "buyerId",
  sellerId = "sellerId",
  quantity = "quantity",
  amount = "amount",
  media = "media",
  details = "details",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableQuoteAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableQuoteAggregateField,
};

export enum SearchableQuoteAggregateField {
  id = "id",
  productId = "productId",
  buyerId = "buyerId",
  sellerId = "sellerId",
  quantity = "quantity",
  amount = "amount",
  media = "media",
  details = "details",
  status = "status",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableQuoteConnection = {
  __typename: "SearchableQuoteConnection",
  items:  Array<Quote | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelProductCategoryFilterInput = {
  id?: ModelIDInput | null,
  productType?: ModelProductTypeInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  sort?: ModelIntInput | null,
  and?: Array< ModelProductCategoryFilterInput | null > | null,
  or?: Array< ModelProductCategoryFilterInput | null > | null,
  not?: ModelProductCategoryFilterInput | null,
};

export type ModelProductCategoryConnection = {
  __typename: "ModelProductCategoryConnection",
  items:  Array<ProductCategory | null >,
  nextToken?: string | null,
};

export type ModelProductSubCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  sort?: ModelIntInput | null,
  productCategoryId?: ModelIDInput | null,
  and?: Array< ModelProductSubCategoryFilterInput | null > | null,
  or?: Array< ModelProductSubCategoryFilterInput | null > | null,
  not?: ModelProductSubCategoryFilterInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  items?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  buyerId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  paymentId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  taxTotal?: ModelFloatInput | null,
  deliveryTotal?: ModelFloatInput | null,
  subTotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  reason?: ModelStringInput | null,
  pickupAddress?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  deliveryAddress?: ModelStringInput | null,
  orderStatus?: ModelOrderStatusInput | null,
  changeLog?: ModelStringInput | null,
  shipmentDetails?: ModelStringInput | null,
  orderDate?: ModelStringInput | null,
  extCarrierId?: ModelStringInput | null,
  serviceCode?: ModelStringInput | null,
  extShipmentId?: ModelStringInput | null,
  rateId?: ModelStringInput | null,
  specialInstructions?: ModelStringInput | null,
  deliveryInstructions?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  status?: ModelPaymentStatusInput | null,
  paymentIntentId?: ModelStringInput | null,
  paymentIntent?: ModelStringInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  items?: ModelStringInput | null,
  subTotal?: ModelFloatInput | null,
  taxTotal?: ModelFloatInput | null,
  deliveryTotal?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  pickupAddress?: ModelStringInput | null,
  billingAddress?: ModelStringInput | null,
  deliveryAddress?: ModelStringInput | null,
  lock?: ModelBooleanInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
  cartBuyerId?: ModelIDInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type ModelBuyerFilterInput = {
  id?: ModelIDInput | null,
  buyerType?: ModelBuyerTypeInput | null,
  name?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  image?: ModelStringInput | null,
  taxId?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  website?: ModelStringInput | null,
  address?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  images?: ModelStringInput | null,
  documents?: ModelStringInput | null,
  categories?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  and?: Array< ModelBuyerFilterInput | null > | null,
  or?: Array< ModelBuyerFilterInput | null > | null,
  not?: ModelBuyerFilterInput | null,
  buyerCartId?: ModelIDInput | null,
};

export type ModelBuyerConnection = {
  __typename: "ModelBuyerConnection",
  items:  Array<Buyer | null >,
  nextToken?: string | null,
};

export type ModelSellerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  image?: ModelStringInput | null,
  taxId?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  website?: ModelStringInput | null,
  address?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  images?: ModelStringInput | null,
  documents?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  bank?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  details?: ModelStringInput | null,
  productDetails?: ModelStringInput | null,
  industryId?: ModelIDInput | null,
  businessId?: ModelIDInput | null,
  and?: Array< ModelSellerFilterInput | null > | null,
  or?: Array< ModelSellerFilterInput | null > | null,
  not?: ModelSellerFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  documents?: ModelStringInput | null,
  listPrice?: ModelFloatInput | null,
  unitPrice?: ModelFloatInput | null,
  tierPrice?: ModelStringInput | null,
  unitType?: ModelUnitTypeInput | null,
  taxCategoryId?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  active?: ModelBooleanInput | null,
  verified?: ModelBooleanInput | null,
  taxExempt?: ModelBooleanInput | null,
  keywords?: ModelStringInput | null,
  leadTime?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  stock?: ModelIntInput | null,
  sellerId?: ModelIDInput | null,
  productCategoryId?: ModelIDInput | null,
  productSubCategoryId?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductFeedbackFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  buyerUserId?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  rating?: ModelIntInput | null,
  media?: ModelStringInput | null,
  and?: Array< ModelProductFeedbackFilterInput | null > | null,
  or?: Array< ModelProductFeedbackFilterInput | null > | null,
  not?: ModelProductFeedbackFilterInput | null,
  productFeedbackSellerId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  deleted?: ModelBooleanInput | null,
  userTypeId?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelSellerUserFilterInput = {
  id?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelSellerUserFilterInput | null > | null,
  or?: Array< ModelSellerUserFilterInput | null > | null,
  not?: ModelSellerUserFilterInput | null,
};

export type ModelBuyerUserFilterInput = {
  id?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelBuyerUserFilterInput | null > | null,
  or?: Array< ModelBuyerUserFilterInput | null > | null,
  not?: ModelBuyerUserFilterInput | null,
};

export type ModelUserDeviceFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  type?: ModelDeviceTypeInput | null,
  app?: ModelAppInput | null,
  name?: ModelStringInput | null,
  meta?: ModelStringInput | null,
  token?: ModelStringInput | null,
  arn?: ModelStringInput | null,
  and?: Array< ModelUserDeviceFilterInput | null > | null,
  or?: Array< ModelUserDeviceFilterInput | null > | null,
  not?: ModelUserDeviceFilterInput | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  type?: ModelNotificationTypeInput | null,
  typeId?: ModelStringInput | null,
  app?: ModelAppInput | null,
  senderId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  meta?: ModelStringInput | null,
  message?: ModelStringInput | null,
  sent?: ModelBooleanInput | null,
  read?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
  chatMessageId?: ModelIDInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  chatId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  senderReceiver?: ModelStringInput | null,
  content?: ModelStringInput | null,
  media?: ModelStringInput | null,
  readBy?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  messageParentMessageId?: ModelIDInput | null,
  messageSenderId?: ModelIDInput | null,
};

export type ModelIndustryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelIndustryFilterInput | null > | null,
  or?: Array< ModelIndustryFilterInput | null > | null,
  not?: ModelIndustryFilterInput | null,
};

export type ModelIndustryConnection = {
  __typename: "ModelIndustryConnection",
  items:  Array<Industry | null >,
  nextToken?: string | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelBusinessConnection = {
  __typename: "ModelBusinessConnection",
  items:  Array<Business | null >,
  nextToken?: string | null,
};

export type ModelUserTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelUserTypeFilterInput | null > | null,
  or?: Array< ModelUserTypeFilterInput | null > | null,
  not?: ModelUserTypeFilterInput | null,
};

export type ModelUserTypeConnection = {
  __typename: "ModelUserTypeConnection",
  items:  Array<UserType | null >,
  nextToken?: string | null,
};

export type ModelQuoteFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  buyerId?: ModelIDInput | null,
  sellerId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  amount?: ModelFloatInput | null,
  media?: ModelStringInput | null,
  details?: ModelStringInput | null,
  status?: ModelQuoteStatusInput | null,
  and?: Array< ModelQuoteFilterInput | null > | null,
  or?: Array< ModelQuoteFilterInput | null > | null,
  not?: ModelQuoteFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionUserDeviceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  app?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  meta?: ModelSubscriptionStringInput | null,
  token?: ModelSubscriptionStringInput | null,
  arn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserDeviceFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDeviceFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  typeId?: ModelSubscriptionStringInput | null,
  app?: ModelSubscriptionStringInput | null,
  senderId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  meta?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  sent?: ModelSubscriptionBooleanInput | null,
  read?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionChatFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  buyerId?: ModelSubscriptionIDInput | null,
  sellerId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  chatId?: ModelSubscriptionIDInput | null,
  sellerId?: ModelSubscriptionIDInput | null,
  buyerId?: ModelSubscriptionIDInput | null,
  senderReceiver?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  readBy?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionIndustryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIndustryFilterInput | null > | null,
  or?: Array< ModelSubscriptionIndustryFilterInput | null > | null,
};

export type ModelSubscriptionBusinessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessFilterInput | null > | null,
};

export type ModelSubscriptionUserTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserTypeFilterInput | null > | null,
};

export type ModelSubscriptionQuoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  buyerId?: ModelSubscriptionIDInput | null,
  sellerId?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  media?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuoteFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ProcessCartMutationVariables = {
  id: string,
  userId: string,
  note?: string | null,
};

export type ProcessCartMutation = {
  processCart: string,
};

export type CreateProductCategoryMutationVariables = {
  input: CreateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type CreateProductCategoryMutation = {
  createProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    productType?: ProductType | null,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productSubCategories?:  {
      __typename: "ModelProductSubCategoryConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductCategoryMutationVariables = {
  input: UpdateProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type UpdateProductCategoryMutation = {
  updateProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    productType?: ProductType | null,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productSubCategories?:  {
      __typename: "ModelProductSubCategoryConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductCategoryMutationVariables = {
  input: DeleteProductCategoryInput,
  condition?: ModelProductCategoryConditionInput | null,
};

export type DeleteProductCategoryMutation = {
  deleteProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    productType?: ProductType | null,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productSubCategories?:  {
      __typename: "ModelProductSubCategoryConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductSubCategoryMutationVariables = {
  input: CreateProductSubCategoryInput,
  condition?: ModelProductSubCategoryConditionInput | null,
};

export type CreateProductSubCategoryMutation = {
  createProductSubCategory?:  {
    __typename: "ProductSubCategory",
    id: string,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductSubCategoryMutationVariables = {
  input: UpdateProductSubCategoryInput,
  condition?: ModelProductSubCategoryConditionInput | null,
};

export type UpdateProductSubCategoryMutation = {
  updateProductSubCategory?:  {
    __typename: "ProductSubCategory",
    id: string,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductSubCategoryMutationVariables = {
  input: DeleteProductSubCategoryInput,
  condition?: ModelProductSubCategoryConditionInput | null,
};

export type DeleteProductSubCategoryMutation = {
  deleteProductSubCategory?:  {
    __typename: "ProductSubCategory",
    id: string,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    code?: string | null,
    items?: string | null,
    rating?: number | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    paymentId: string,
    payment?:  {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    currency?: string | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    subTotal?: number | null,
    total?: number | null,
    reason?: string | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    orderStatus?: OrderStatus | null,
    changeLog?: string | null,
    shipmentDetails?: string | null,
    orderDate: string,
    extCarrierId?: string | null,
    serviceCode?: string | null,
    extShipmentId?: string | null,
    rateId?: string | null,
    specialInstructions?: string | null,
    deliveryInstructions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    code?: string | null,
    items?: string | null,
    rating?: number | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    paymentId: string,
    payment?:  {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    currency?: string | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    subTotal?: number | null,
    total?: number | null,
    reason?: string | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    orderStatus?: OrderStatus | null,
    changeLog?: string | null,
    shipmentDetails?: string | null,
    orderDate: string,
    extCarrierId?: string | null,
    serviceCode?: string | null,
    extShipmentId?: string | null,
    rateId?: string | null,
    specialInstructions?: string | null,
    deliveryInstructions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    code?: string | null,
    items?: string | null,
    rating?: number | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    paymentId: string,
    payment?:  {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    currency?: string | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    subTotal?: number | null,
    total?: number | null,
    reason?: string | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    orderStatus?: OrderStatus | null,
    changeLog?: string | null,
    shipmentDetails?: string | null,
    orderDate: string,
    extCarrierId?: string | null,
    serviceCode?: string | null,
    extShipmentId?: string | null,
    rateId?: string | null,
    specialInstructions?: string | null,
    deliveryInstructions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    amount?: number | null,
    currency?: string | null,
    status?: PaymentStatus | null,
    paymentIntentId?: string | null,
    paymentIntent?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    amount?: number | null,
    currency?: string | null,
    status?: PaymentStatus | null,
    paymentIntentId?: string | null,
    paymentIntent?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    amount?: number | null,
    currency?: string | null,
    status?: PaymentStatus | null,
    paymentIntentId?: string | null,
    paymentIntent?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    items?: string | null,
    subTotal?: number | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    total?: number | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    lock?: boolean | null,
    createdAt: string,
    updatedAt: string,
    cartBuyerId?: string | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    items?: string | null,
    subTotal?: number | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    total?: number | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    lock?: boolean | null,
    createdAt: string,
    updatedAt: string,
    cartBuyerId?: string | null,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    items?: string | null,
    subTotal?: number | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    total?: number | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    lock?: boolean | null,
    createdAt: string,
    updatedAt: string,
    cartBuyerId?: string | null,
  } | null,
};

export type CreateBuyerMutationVariables = {
  input: CreateBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type CreateBuyerMutation = {
  createBuyer?:  {
    __typename: "Buyer",
    id: string,
    buyerType?: BuyerType | null,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    categories?: Array< string | null > | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      items?: string | null,
      subTotal?: number | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      total?: number | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      lock?: boolean | null,
      createdAt: string,
      updatedAt: string,
      cartBuyerId?: string | null,
    } | null,
    rating?: number | null,
    age?: number | null,
    gender?: Gender | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    buyerCartId?: string | null,
  } | null,
};

export type UpdateBuyerMutationVariables = {
  input: UpdateBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type UpdateBuyerMutation = {
  updateBuyer?:  {
    __typename: "Buyer",
    id: string,
    buyerType?: BuyerType | null,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    categories?: Array< string | null > | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      items?: string | null,
      subTotal?: number | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      total?: number | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      lock?: boolean | null,
      createdAt: string,
      updatedAt: string,
      cartBuyerId?: string | null,
    } | null,
    rating?: number | null,
    age?: number | null,
    gender?: Gender | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    buyerCartId?: string | null,
  } | null,
};

export type DeleteBuyerMutationVariables = {
  input: DeleteBuyerInput,
  condition?: ModelBuyerConditionInput | null,
};

export type DeleteBuyerMutation = {
  deleteBuyer?:  {
    __typename: "Buyer",
    id: string,
    buyerType?: BuyerType | null,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    categories?: Array< string | null > | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      items?: string | null,
      subTotal?: number | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      total?: number | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      lock?: boolean | null,
      createdAt: string,
      updatedAt: string,
      cartBuyerId?: string | null,
    } | null,
    rating?: number | null,
    age?: number | null,
    gender?: Gender | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    buyerCartId?: string | null,
  } | null,
};

export type CreateSellerMutationVariables = {
  input: CreateSellerInput,
  condition?: ModelSellerConditionInput | null,
};

export type CreateSellerMutation = {
  createSeller?:  {
    __typename: "Seller",
    id: string,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    rating?: number | null,
    bank?: string | null,
    age?: number | null,
    gender?: Gender | null,
    details?: string | null,
    productDetails?: string | null,
    industryId?: string | null,
    industry?:  {
      __typename: "Industry",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessId?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSellerMutationVariables = {
  input: UpdateSellerInput,
  condition?: ModelSellerConditionInput | null,
};

export type UpdateSellerMutation = {
  updateSeller?:  {
    __typename: "Seller",
    id: string,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    rating?: number | null,
    bank?: string | null,
    age?: number | null,
    gender?: Gender | null,
    details?: string | null,
    productDetails?: string | null,
    industryId?: string | null,
    industry?:  {
      __typename: "Industry",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessId?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSellerMutationVariables = {
  input: DeleteSellerInput,
  condition?: ModelSellerConditionInput | null,
};

export type DeleteSellerMutation = {
  deleteSeller?:  {
    __typename: "Seller",
    id: string,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    rating?: number | null,
    bank?: string | null,
    age?: number | null,
    gender?: Gender | null,
    details?: string | null,
    productDetails?: string | null,
    industryId?: string | null,
    industry?:  {
      __typename: "Industry",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessId?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    code?: string | null,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    images?: string | null,
    documents?: string | null,
    listPrice?: number | null,
    unitPrice?: number | null,
    tierPrice?: string | null,
    unitType?: UnitType | null,
    taxCategoryId?: string | null,
    attributes?: string | null,
    weight?: number | null,
    active?: boolean | null,
    verified?: boolean | null,
    taxExempt?: boolean | null,
    keywords?: Array< string | null > | null,
    leadTime?: string | null,
    rating?: number | null,
    stock?: number | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productSubCategoryId: string,
    productSubCategory?:  {
      __typename: "ProductSubCategory",
      id: string,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      productCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    code?: string | null,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    images?: string | null,
    documents?: string | null,
    listPrice?: number | null,
    unitPrice?: number | null,
    tierPrice?: string | null,
    unitType?: UnitType | null,
    taxCategoryId?: string | null,
    attributes?: string | null,
    weight?: number | null,
    active?: boolean | null,
    verified?: boolean | null,
    taxExempt?: boolean | null,
    keywords?: Array< string | null > | null,
    leadTime?: string | null,
    rating?: number | null,
    stock?: number | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productSubCategoryId: string,
    productSubCategory?:  {
      __typename: "ProductSubCategory",
      id: string,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      productCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    code?: string | null,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    images?: string | null,
    documents?: string | null,
    listPrice?: number | null,
    unitPrice?: number | null,
    tierPrice?: string | null,
    unitType?: UnitType | null,
    taxCategoryId?: string | null,
    attributes?: string | null,
    weight?: number | null,
    active?: boolean | null,
    verified?: boolean | null,
    taxExempt?: boolean | null,
    keywords?: Array< string | null > | null,
    leadTime?: string | null,
    rating?: number | null,
    stock?: number | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productSubCategoryId: string,
    productSubCategory?:  {
      __typename: "ProductSubCategory",
      id: string,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      productCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductFeedbackMutationVariables = {
  input: CreateProductFeedbackInput,
  condition?: ModelProductFeedbackConditionInput | null,
};

export type CreateProductFeedbackMutation = {
  createProductFeedback?:  {
    __typename: "ProductFeedback",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerUserId: string,
    buyerUser?:  {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?: string | null,
    isVerified?: boolean | null,
    rating?: number | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    productFeedbackSellerId?: string | null,
  } | null,
};

export type UpdateProductFeedbackMutationVariables = {
  input: UpdateProductFeedbackInput,
  condition?: ModelProductFeedbackConditionInput | null,
};

export type UpdateProductFeedbackMutation = {
  updateProductFeedback?:  {
    __typename: "ProductFeedback",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerUserId: string,
    buyerUser?:  {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?: string | null,
    isVerified?: boolean | null,
    rating?: number | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    productFeedbackSellerId?: string | null,
  } | null,
};

export type DeleteProductFeedbackMutationVariables = {
  input: DeleteProductFeedbackInput,
  condition?: ModelProductFeedbackConditionInput | null,
};

export type DeleteProductFeedbackMutation = {
  deleteProductFeedback?:  {
    __typename: "ProductFeedback",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerUserId: string,
    buyerUser?:  {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?: string | null,
    isVerified?: boolean | null,
    rating?: number | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    productFeedbackSellerId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    photo?: string | null,
    phone?: string | null,
    email?: string | null,
    role?: Role | null,
    deleted?: boolean | null,
    userTypeId?: string | null,
    userType?:  {
      __typename: "UserType",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    sellers?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelUserDeviceConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    photo?: string | null,
    phone?: string | null,
    email?: string | null,
    role?: Role | null,
    deleted?: boolean | null,
    userTypeId?: string | null,
    userType?:  {
      __typename: "UserType",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    sellers?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelUserDeviceConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    photo?: string | null,
    phone?: string | null,
    email?: string | null,
    role?: Role | null,
    deleted?: boolean | null,
    userTypeId?: string | null,
    userType?:  {
      __typename: "UserType",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    sellers?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelUserDeviceConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSellerUserMutationVariables = {
  input: CreateSellerUserInput,
  condition?: ModelSellerUserConditionInput | null,
};

export type CreateSellerUserMutation = {
  createSellerUser?:  {
    __typename: "SellerUser",
    id: string,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSellerUserMutationVariables = {
  input: UpdateSellerUserInput,
  condition?: ModelSellerUserConditionInput | null,
};

export type UpdateSellerUserMutation = {
  updateSellerUser?:  {
    __typename: "SellerUser",
    id: string,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSellerUserMutationVariables = {
  input: DeleteSellerUserInput,
  condition?: ModelSellerUserConditionInput | null,
};

export type DeleteSellerUserMutation = {
  deleteSellerUser?:  {
    __typename: "SellerUser",
    id: string,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBuyerUserMutationVariables = {
  input: CreateBuyerUserInput,
  condition?: ModelBuyerUserConditionInput | null,
};

export type CreateBuyerUserMutation = {
  createBuyerUser?:  {
    __typename: "BuyerUser",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    productFeedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBuyerUserMutationVariables = {
  input: UpdateBuyerUserInput,
  condition?: ModelBuyerUserConditionInput | null,
};

export type UpdateBuyerUserMutation = {
  updateBuyerUser?:  {
    __typename: "BuyerUser",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    productFeedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBuyerUserMutationVariables = {
  input: DeleteBuyerUserInput,
  condition?: ModelBuyerUserConditionInput | null,
};

export type DeleteBuyerUserMutation = {
  deleteBuyerUser?:  {
    __typename: "BuyerUser",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    productFeedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserDeviceMutationVariables = {
  input: CreateUserDeviceInput,
  condition?: ModelUserDeviceConditionInput | null,
};

export type CreateUserDeviceMutation = {
  createUserDevice?:  {
    __typename: "UserDevice",
    id: string,
    userId: string,
    type?: DeviceType | null,
    app?: App | null,
    name?: string | null,
    meta?: string | null,
    token?: string | null,
    arn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserDeviceMutationVariables = {
  input: UpdateUserDeviceInput,
  condition?: ModelUserDeviceConditionInput | null,
};

export type UpdateUserDeviceMutation = {
  updateUserDevice?:  {
    __typename: "UserDevice",
    id: string,
    userId: string,
    type?: DeviceType | null,
    app?: App | null,
    name?: string | null,
    meta?: string | null,
    token?: string | null,
    arn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserDeviceMutationVariables = {
  input: DeleteUserDeviceInput,
  condition?: ModelUserDeviceConditionInput | null,
};

export type DeleteUserDeviceMutation = {
  deleteUserDevice?:  {
    __typename: "UserDevice",
    id: string,
    userId: string,
    type?: DeviceType | null,
    app?: App | null,
    name?: string | null,
    meta?: string | null,
    token?: string | null,
    arn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    type?: NotificationType | null,
    typeId?: string | null,
    app?: App | null,
    senderId: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title?: string | null,
    meta?: string | null,
    message?: string | null,
    sent: boolean,
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    type?: NotificationType | null,
    typeId?: string | null,
    app?: App | null,
    senderId: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title?: string | null,
    meta?: string | null,
    message?: string | null,
    sent: boolean,
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    type?: NotificationType | null,
    typeId?: string | null,
    app?: App | null,
    senderId: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title?: string | null,
    meta?: string | null,
    message?: string | null,
    sent: boolean,
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatMessageId?: string | null,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat?:  {
    __typename: "Chat",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatMessageId?: string | null,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat?:  {
    __typename: "Chat",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatMessageId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    chatId: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null,
    sellerId?: string | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    parentMessage?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    sender:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    senderReceiver?: string | null,
    content?: string | null,
    media?: string | null,
    readBy?: string | null,
    createdAt: string,
    updatedAt: string,
    messageParentMessageId?: string | null,
    messageSenderId: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    chatId: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null,
    sellerId?: string | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    parentMessage?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    sender:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    senderReceiver?: string | null,
    content?: string | null,
    media?: string | null,
    readBy?: string | null,
    createdAt: string,
    updatedAt: string,
    messageParentMessageId?: string | null,
    messageSenderId: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    chatId: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null,
    sellerId?: string | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    parentMessage?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    sender:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    senderReceiver?: string | null,
    content?: string | null,
    media?: string | null,
    readBy?: string | null,
    createdAt: string,
    updatedAt: string,
    messageParentMessageId?: string | null,
    messageSenderId: string,
  } | null,
};

export type CreateIndustryMutationVariables = {
  input: CreateIndustryInput,
  condition?: ModelIndustryConditionInput | null,
};

export type CreateIndustryMutation = {
  createIndustry?:  {
    __typename: "Industry",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIndustryMutationVariables = {
  input: UpdateIndustryInput,
  condition?: ModelIndustryConditionInput | null,
};

export type UpdateIndustryMutation = {
  updateIndustry?:  {
    __typename: "Industry",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIndustryMutationVariables = {
  input: DeleteIndustryInput,
  condition?: ModelIndustryConditionInput | null,
};

export type DeleteIndustryMutation = {
  deleteIndustry?:  {
    __typename: "Industry",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness?:  {
    __typename: "Business",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessMutation = {
  updateBusiness?:  {
    __typename: "Business",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type DeleteBusinessMutation = {
  deleteBusiness?:  {
    __typename: "Business",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserTypeMutationVariables = {
  input: CreateUserTypeInput,
  condition?: ModelUserTypeConditionInput | null,
};

export type CreateUserTypeMutation = {
  createUserType?:  {
    __typename: "UserType",
    id: string,
    name?: string | null,
    category?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserTypeMutationVariables = {
  input: UpdateUserTypeInput,
  condition?: ModelUserTypeConditionInput | null,
};

export type UpdateUserTypeMutation = {
  updateUserType?:  {
    __typename: "UserType",
    id: string,
    name?: string | null,
    category?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserTypeMutationVariables = {
  input: DeleteUserTypeInput,
  condition?: ModelUserTypeConditionInput | null,
};

export type DeleteUserTypeMutation = {
  deleteUserType?:  {
    __typename: "UserType",
    id: string,
    name?: string | null,
    category?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuoteMutationVariables = {
  input: CreateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type CreateQuoteMutation = {
  createQuote?:  {
    __typename: "Quote",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity?: number | null,
    amount?: number | null,
    media?: string | null,
    details?: string | null,
    status?: QuoteStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuoteMutationVariables = {
  input: UpdateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type UpdateQuoteMutation = {
  updateQuote?:  {
    __typename: "Quote",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity?: number | null,
    amount?: number | null,
    media?: string | null,
    details?: string | null,
    status?: QuoteStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuoteMutationVariables = {
  input: DeleteQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type DeleteQuoteMutation = {
  deleteQuote?:  {
    __typename: "Quote",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity?: number | null,
    amount?: number | null,
    media?: string | null,
    details?: string | null,
    status?: QuoteStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchProductCategoriesQueryVariables = {
  filter?: SearchableProductCategoryFilterInput | null,
  sort?: Array< SearchableProductCategorySortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProductCategoryAggregationInput | null > | null,
};

export type SearchProductCategoriesQuery = {
  searchProductCategories?:  {
    __typename: "SearchableProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchProductSubCategoriesQueryVariables = {
  filter?: SearchableProductSubCategoryFilterInput | null,
  sort?: Array< SearchableProductSubCategorySortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProductSubCategoryAggregationInput | null > | null,
};

export type SearchProductSubCategoriesQuery = {
  searchProductSubCategories?:  {
    __typename: "SearchableProductSubCategoryConnection",
    items:  Array< {
      __typename: "ProductSubCategory",
      id: string,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      productCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchOrdersQueryVariables = {
  filter?: SearchableOrderFilterInput | null,
  sort?: Array< SearchableOrderSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableOrderAggregationInput | null > | null,
};

export type SearchOrdersQuery = {
  searchOrders?:  {
    __typename: "SearchableOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      code?: string | null,
      items?: string | null,
      rating?: number | null,
      buyerId: string,
      sellerId: string,
      paymentId: string,
      userId: string,
      phone?: string | null,
      currency?: string | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      subTotal?: number | null,
      total?: number | null,
      reason?: string | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      orderStatus?: OrderStatus | null,
      changeLog?: string | null,
      shipmentDetails?: string | null,
      orderDate: string,
      extCarrierId?: string | null,
      serviceCode?: string | null,
      extShipmentId?: string | null,
      rateId?: string | null,
      specialInstructions?: string | null,
      deliveryInstructions?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchPaymentsQueryVariables = {
  filter?: SearchablePaymentFilterInput | null,
  sort?: Array< SearchablePaymentSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchablePaymentAggregationInput | null > | null,
};

export type SearchPaymentsQuery = {
  searchPayments?:  {
    __typename: "SearchablePaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchBuyersQueryVariables = {
  filter?: SearchableBuyerFilterInput | null,
  sort?: Array< SearchableBuyerSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableBuyerAggregationInput | null > | null,
};

export type SearchBuyersQuery = {
  searchBuyers?:  {
    __typename: "SearchableBuyerConnection",
    items:  Array< {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchSellersQueryVariables = {
  filter?: SearchableSellerFilterInput | null,
  sort?: Array< SearchableSellerSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableSellerAggregationInput | null > | null,
};

export type SearchSellersQuery = {
  searchSellers?:  {
    __typename: "SearchableSellerConnection",
    items:  Array< {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchProductsQueryVariables = {
  filter?: SearchableProductFilterInput | null,
  sort?: Array< SearchableProductSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProductAggregationInput | null > | null,
};

export type SearchProductsQuery = {
  searchProducts?:  {
    __typename: "SearchableProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchProductFeedbacksQueryVariables = {
  filter?: SearchableProductFeedbackFilterInput | null,
  sort?: Array< SearchableProductFeedbackSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProductFeedbackAggregationInput | null > | null,
};

export type SearchProductFeedbacksQuery = {
  searchProductFeedbacks?:  {
    __typename: "SearchableProductFeedbackConnection",
    items:  Array< {
      __typename: "ProductFeedback",
      id: string,
      productId: string,
      buyerUserId: string,
      comment?: string | null,
      isVerified?: boolean | null,
      rating?: number | null,
      media?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      productFeedbackSellerId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: Array< SearchableUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUserAggregationInput | null > | null,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "SearchableUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchSellerUsersQueryVariables = {
  filter?: SearchableSellerUserFilterInput | null,
  sort?: Array< SearchableSellerUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableSellerUserAggregationInput | null > | null,
};

export type SearchSellerUsersQuery = {
  searchSellerUsers?:  {
    __typename: "SearchableSellerUserConnection",
    items:  Array< {
      __typename: "SellerUser",
      id: string,
      sellerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchBuyerUsersQueryVariables = {
  filter?: SearchableBuyerUserFilterInput | null,
  sort?: Array< SearchableBuyerUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableBuyerUserAggregationInput | null > | null,
};

export type SearchBuyerUsersQuery = {
  searchBuyerUsers?:  {
    __typename: "SearchableBuyerUserConnection",
    items:  Array< {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchChatsQueryVariables = {
  filter?: SearchableChatFilterInput | null,
  sort?: Array< SearchableChatSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableChatAggregationInput | null > | null,
};

export type SearchChatsQuery = {
  searchChats?:  {
    __typename: "SearchableChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchMessagesQueryVariables = {
  filter?: SearchableMessageFilterInput | null,
  sort?: Array< SearchableMessageSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableMessageAggregationInput | null > | null,
};

export type SearchMessagesQuery = {
  searchMessages?:  {
    __typename: "SearchableMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchIndustriesQueryVariables = {
  filter?: SearchableIndustryFilterInput | null,
  sort?: Array< SearchableIndustrySortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableIndustryAggregationInput | null > | null,
};

export type SearchIndustriesQuery = {
  searchIndustries?:  {
    __typename: "SearchableIndustryConnection",
    items:  Array< {
      __typename: "Industry",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchBusinessesQueryVariables = {
  filter?: SearchableBusinessFilterInput | null,
  sort?: Array< SearchableBusinessSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableBusinessAggregationInput | null > | null,
};

export type SearchBusinessesQuery = {
  searchBusinesses?:  {
    __typename: "SearchableBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchUserTypesQueryVariables = {
  filter?: SearchableUserTypeFilterInput | null,
  sort?: Array< SearchableUserTypeSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUserTypeAggregationInput | null > | null,
};

export type SearchUserTypesQuery = {
  searchUserTypes?:  {
    __typename: "SearchableUserTypeConnection",
    items:  Array< {
      __typename: "UserType",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchQuotesQueryVariables = {
  filter?: SearchableQuoteFilterInput | null,
  sort?: Array< SearchableQuoteSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableQuoteAggregationInput | null > | null,
};

export type SearchQuotesQuery = {
  searchQuotes?:  {
    __typename: "SearchableQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      productId: string,
      buyerId: string,
      sellerId: string,
      quantity?: number | null,
      amount?: number | null,
      media?: string | null,
      details?: string | null,
      status?: QuoteStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetProductCategoryQueryVariables = {
  id: string,
};

export type GetProductCategoryQuery = {
  getProductCategory?:  {
    __typename: "ProductCategory",
    id: string,
    productType?: ProductType | null,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productSubCategories?:  {
      __typename: "ModelProductSubCategoryConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductSubCategoryQueryVariables = {
  id: string,
};

export type GetProductSubCategoryQuery = {
  getProductSubCategory?:  {
    __typename: "ProductSubCategory",
    id: string,
    name?: string | null,
    image?: string | null,
    active?: boolean | null,
    sort?: number | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductSubCategoriesQueryVariables = {
  filter?: ModelProductSubCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductSubCategoriesQuery = {
  listProductSubCategories?:  {
    __typename: "ModelProductSubCategoryConnection",
    items:  Array< {
      __typename: "ProductSubCategory",
      id: string,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      productCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    code?: string | null,
    items?: string | null,
    rating?: number | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    paymentId: string,
    payment?:  {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    currency?: string | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    subTotal?: number | null,
    total?: number | null,
    reason?: string | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    orderStatus?: OrderStatus | null,
    changeLog?: string | null,
    shipmentDetails?: string | null,
    orderDate: string,
    extCarrierId?: string | null,
    serviceCode?: string | null,
    extShipmentId?: string | null,
    rateId?: string | null,
    specialInstructions?: string | null,
    deliveryInstructions?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      code?: string | null,
      items?: string | null,
      rating?: number | null,
      buyerId: string,
      sellerId: string,
      paymentId: string,
      userId: string,
      phone?: string | null,
      currency?: string | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      subTotal?: number | null,
      total?: number | null,
      reason?: string | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      orderStatus?: OrderStatus | null,
      changeLog?: string | null,
      shipmentDetails?: string | null,
      orderDate: string,
      extCarrierId?: string | null,
      serviceCode?: string | null,
      extShipmentId?: string | null,
      rateId?: string | null,
      specialInstructions?: string | null,
      deliveryInstructions?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    amount?: number | null,
    currency?: string | null,
    status?: PaymentStatus | null,
    paymentIntentId?: string | null,
    paymentIntent?: string | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    items?: string | null,
    subTotal?: number | null,
    taxTotal?: number | null,
    deliveryTotal?: number | null,
    total?: number | null,
    pickupAddress?: string | null,
    billingAddress?: string | null,
    deliveryAddress?: string | null,
    lock?: boolean | null,
    createdAt: string,
    updatedAt: string,
    cartBuyerId?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      items?: string | null,
      subTotal?: number | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      total?: number | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      lock?: boolean | null,
      createdAt: string,
      updatedAt: string,
      cartBuyerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuyerQueryVariables = {
  id: string,
};

export type GetBuyerQuery = {
  getBuyer?:  {
    __typename: "Buyer",
    id: string,
    buyerType?: BuyerType | null,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    categories?: Array< string | null > | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      items?: string | null,
      subTotal?: number | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      total?: number | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      lock?: boolean | null,
      createdAt: string,
      updatedAt: string,
      cartBuyerId?: string | null,
    } | null,
    rating?: number | null,
    age?: number | null,
    gender?: Gender | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    buyerCartId?: string | null,
  } | null,
};

export type ListBuyersQueryVariables = {
  filter?: ModelBuyerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuyersQuery = {
  listBuyers?:  {
    __typename: "ModelBuyerConnection",
    items:  Array< {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSellerQueryVariables = {
  id: string,
};

export type GetSellerQuery = {
  getSeller?:  {
    __typename: "Seller",
    id: string,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    taxId?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    website?: string | null,
    address?: string | null,
    attributes?: string | null,
    images?: string | null,
    documents?: string | null,
    rating?: number | null,
    bank?: string | null,
    age?: number | null,
    gender?: Gender | null,
    details?: string | null,
    productDetails?: string | null,
    industryId?: string | null,
    industry?:  {
      __typename: "Industry",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    businessId?: string | null,
    business?:  {
      __typename: "Business",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelChatConnection",
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSellersQueryVariables = {
  filter?: ModelSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSellersQuery = {
  listSellers?:  {
    __typename: "ModelSellerConnection",
    items:  Array< {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    code?: string | null,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    images?: string | null,
    documents?: string | null,
    listPrice?: number | null,
    unitPrice?: number | null,
    tierPrice?: string | null,
    unitType?: UnitType | null,
    taxCategoryId?: string | null,
    attributes?: string | null,
    weight?: number | null,
    active?: boolean | null,
    verified?: boolean | null,
    taxExempt?: boolean | null,
    keywords?: Array< string | null > | null,
    leadTime?: string | null,
    rating?: number | null,
    stock?: number | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productCategoryId: string,
    productCategory?:  {
      __typename: "ProductCategory",
      id: string,
      productType?: ProductType | null,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    productSubCategoryId: string,
    productSubCategory?:  {
      __typename: "ProductSubCategory",
      id: string,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      productCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    feedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    quotes?:  {
      __typename: "ModelQuoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductFeedbackQueryVariables = {
  id: string,
};

export type GetProductFeedbackQuery = {
  getProductFeedback?:  {
    __typename: "ProductFeedback",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerUserId: string,
    buyerUser?:  {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?: string | null,
    isVerified?: boolean | null,
    rating?: number | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    productFeedbackSellerId?: string | null,
  } | null,
};

export type ListProductFeedbacksQueryVariables = {
  filter?: ModelProductFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductFeedbacksQuery = {
  listProductFeedbacks?:  {
    __typename: "ModelProductFeedbackConnection",
    items:  Array< {
      __typename: "ProductFeedback",
      id: string,
      productId: string,
      buyerUserId: string,
      comment?: string | null,
      isVerified?: boolean | null,
      rating?: number | null,
      media?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      productFeedbackSellerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    photo?: string | null,
    phone?: string | null,
    email?: string | null,
    role?: Role | null,
    deleted?: boolean | null,
    userTypeId?: string | null,
    userType?:  {
      __typename: "UserType",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyers?:  {
      __typename: "ModelBuyerUserConnection",
      nextToken?: string | null,
    } | null,
    sellers?:  {
      __typename: "ModelSellerUserConnection",
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelUserDeviceConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSellerUserQueryVariables = {
  id: string,
};

export type GetSellerUserQuery = {
  getSellerUser?:  {
    __typename: "SellerUser",
    id: string,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSellerUsersQueryVariables = {
  filter?: ModelSellerUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSellerUsersQuery = {
  listSellerUsers?:  {
    __typename: "ModelSellerUserConnection",
    items:  Array< {
      __typename: "SellerUser",
      id: string,
      sellerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBuyerUserQueryVariables = {
  id: string,
};

export type GetBuyerUserQuery = {
  getBuyerUser?:  {
    __typename: "BuyerUser",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    role?: Role | null,
    productFeedbacks?:  {
      __typename: "ModelProductFeedbackConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBuyerUsersQueryVariables = {
  filter?: ModelBuyerUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuyerUsersQuery = {
  listBuyerUsers?:  {
    __typename: "ModelBuyerUserConnection",
    items:  Array< {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserDeviceQueryVariables = {
  id: string,
};

export type GetUserDeviceQuery = {
  getUserDevice?:  {
    __typename: "UserDevice",
    id: string,
    userId: string,
    type?: DeviceType | null,
    app?: App | null,
    name?: string | null,
    meta?: string | null,
    token?: string | null,
    arn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserDevicesQueryVariables = {
  filter?: ModelUserDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserDevicesQuery = {
  listUserDevices?:  {
    __typename: "ModelUserDeviceConnection",
    items:  Array< {
      __typename: "UserDevice",
      id: string,
      userId: string,
      type?: DeviceType | null,
      app?: App | null,
      name?: string | null,
      meta?: string | null,
      token?: string | null,
      arn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    type?: NotificationType | null,
    typeId?: string | null,
    app?: App | null,
    senderId: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title?: string | null,
    meta?: string | null,
    message?: string | null,
    sent: boolean,
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      userId: string,
      type?: NotificationType | null,
      typeId?: string | null,
      app?: App | null,
      senderId: string,
      title?: string | null,
      meta?: string | null,
      message?: string | null,
      sent: boolean,
      read: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatMessageId?: string | null,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    chatId: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null,
    sellerId?: string | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    parentMessage?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    sender:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    senderReceiver?: string | null,
    content?: string | null,
    media?: string | null,
    readBy?: string | null,
    createdAt: string,
    updatedAt: string,
    messageParentMessageId?: string | null,
    messageSenderId: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIndustryQueryVariables = {
  id: string,
};

export type GetIndustryQuery = {
  getIndustry?:  {
    __typename: "Industry",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIndustriesQueryVariables = {
  filter?: ModelIndustryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIndustriesQuery = {
  listIndustries?:  {
    __typename: "ModelIndustryConnection",
    items:  Array< {
      __typename: "Industry",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness?:  {
    __typename: "Business",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinessesQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesQuery = {
  listBusinesses?:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserTypeQueryVariables = {
  id: string,
};

export type GetUserTypeQuery = {
  getUserType?:  {
    __typename: "UserType",
    id: string,
    name?: string | null,
    category?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserTypesQueryVariables = {
  filter?: ModelUserTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserTypesQuery = {
  listUserTypes?:  {
    __typename: "ModelUserTypeConnection",
    items:  Array< {
      __typename: "UserType",
      id: string,
      name?: string | null,
      category?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuoteQueryVariables = {
  id: string,
};

export type GetQuoteQuery = {
  getQuote?:  {
    __typename: "Quote",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity?: number | null,
    amount?: number | null,
    media?: string | null,
    details?: string | null,
    status?: QuoteStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuotesQueryVariables = {
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuotesQuery = {
  listQuotes?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      productId: string,
      buyerId: string,
      sellerId: string,
      quantity?: number | null,
      amount?: number | null,
      media?: string | null,
      details?: string | null,
      status?: QuoteStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductSubCategoriesByProductCategoryIdQueryVariables = {
  productCategoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductSubCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductSubCategoriesByProductCategoryIdQuery = {
  productSubCategoriesByProductCategoryId?:  {
    __typename: "ModelProductSubCategoryConnection",
    items:  Array< {
      __typename: "ProductSubCategory",
      id: string,
      name?: string | null,
      image?: string | null,
      active?: boolean | null,
      sort?: number | null,
      productCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByBuyerIdQueryVariables = {
  buyerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByBuyerIdQuery = {
  ordersByBuyerId?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      code?: string | null,
      items?: string | null,
      rating?: number | null,
      buyerId: string,
      sellerId: string,
      paymentId: string,
      userId: string,
      phone?: string | null,
      currency?: string | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      subTotal?: number | null,
      total?: number | null,
      reason?: string | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      orderStatus?: OrderStatus | null,
      changeLog?: string | null,
      shipmentDetails?: string | null,
      orderDate: string,
      extCarrierId?: string | null,
      serviceCode?: string | null,
      extShipmentId?: string | null,
      rateId?: string | null,
      specialInstructions?: string | null,
      deliveryInstructions?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersBySellerIdQueryVariables = {
  sellerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersBySellerIdQuery = {
  ordersBySellerId?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      code?: string | null,
      items?: string | null,
      rating?: number | null,
      buyerId: string,
      sellerId: string,
      paymentId: string,
      userId: string,
      phone?: string | null,
      currency?: string | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      subTotal?: number | null,
      total?: number | null,
      reason?: string | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      orderStatus?: OrderStatus | null,
      changeLog?: string | null,
      shipmentDetails?: string | null,
      orderDate: string,
      extCarrierId?: string | null,
      serviceCode?: string | null,
      extShipmentId?: string | null,
      rateId?: string | null,
      specialInstructions?: string | null,
      deliveryInstructions?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByPaymentIdQueryVariables = {
  paymentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByPaymentIdQuery = {
  ordersByPaymentId?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      code?: string | null,
      items?: string | null,
      rating?: number | null,
      buyerId: string,
      sellerId: string,
      paymentId: string,
      userId: string,
      phone?: string | null,
      currency?: string | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      subTotal?: number | null,
      total?: number | null,
      reason?: string | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      orderStatus?: OrderStatus | null,
      changeLog?: string | null,
      shipmentDetails?: string | null,
      orderDate: string,
      extCarrierId?: string | null,
      serviceCode?: string | null,
      extShipmentId?: string | null,
      rateId?: string | null,
      specialInstructions?: string | null,
      deliveryInstructions?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUserIdQuery = {
  ordersByUserId?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      code?: string | null,
      items?: string | null,
      rating?: number | null,
      buyerId: string,
      sellerId: string,
      paymentId: string,
      userId: string,
      phone?: string | null,
      currency?: string | null,
      taxTotal?: number | null,
      deliveryTotal?: number | null,
      subTotal?: number | null,
      total?: number | null,
      reason?: string | null,
      pickupAddress?: string | null,
      billingAddress?: string | null,
      deliveryAddress?: string | null,
      orderStatus?: OrderStatus | null,
      changeLog?: string | null,
      shipmentDetails?: string | null,
      orderDate: string,
      extCarrierId?: string | null,
      serviceCode?: string | null,
      extShipmentId?: string | null,
      rateId?: string | null,
      specialInstructions?: string | null,
      deliveryInstructions?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PaymentsByBuyerIdQueryVariables = {
  buyerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PaymentsByBuyerIdQuery = {
  paymentsByBuyerId?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PaymentsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PaymentsByUserIdQuery = {
  paymentsByUserId?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PaymentsByPaymentIntentIdQueryVariables = {
  paymentIntentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PaymentsByPaymentIntentIdQuery = {
  paymentsByPaymentIntentId?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      buyerId: string,
      userId: string,
      amount?: number | null,
      currency?: string | null,
      status?: PaymentStatus | null,
      paymentIntentId?: string | null,
      paymentIntent?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SellersByIndustryIdQueryVariables = {
  industryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SellersByIndustryIdQuery = {
  sellersByIndustryId?:  {
    __typename: "ModelSellerConnection",
    items:  Array< {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SellersByBusinessIdQueryVariables = {
  businessId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSellerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SellersByBusinessIdQuery = {
  sellersByBusinessId?:  {
    __typename: "ModelSellerConnection",
    items:  Array< {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsBySellerIdQueryVariables = {
  sellerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsBySellerIdQuery = {
  productsBySellerId?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByProductCategoryIdQueryVariables = {
  productCategoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByProductCategoryIdQuery = {
  productsByProductCategoryId?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsByProductSubCategoryIdQueryVariables = {
  productSubCategoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByProductSubCategoryIdQuery = {
  productsByProductSubCategoryId?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductFeedbacksByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductFeedbacksByProductIdQuery = {
  productFeedbacksByProductId?:  {
    __typename: "ModelProductFeedbackConnection",
    items:  Array< {
      __typename: "ProductFeedback",
      id: string,
      productId: string,
      buyerUserId: string,
      comment?: string | null,
      isVerified?: boolean | null,
      rating?: number | null,
      media?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      productFeedbackSellerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductFeedbacksByBuyerUserIdQueryVariables = {
  buyerUserId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFeedbackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductFeedbacksByBuyerUserIdQuery = {
  productFeedbacksByBuyerUserId?:  {
    __typename: "ModelProductFeedbackConnection",
    items:  Array< {
      __typename: "ProductFeedback",
      id: string,
      productId: string,
      buyerUserId: string,
      comment?: string | null,
      isVerified?: boolean | null,
      rating?: number | null,
      media?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      productFeedbackSellerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByUserTypeIdQueryVariables = {
  userTypeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByUserTypeIdQuery = {
  usersByUserTypeId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SellerUsersBySellerIdQueryVariables = {
  sellerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSellerUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SellerUsersBySellerIdQuery = {
  sellerUsersBySellerId?:  {
    __typename: "ModelSellerUserConnection",
    items:  Array< {
      __typename: "SellerUser",
      id: string,
      sellerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SellerUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSellerUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SellerUsersByUserIdQuery = {
  sellerUsersByUserId?:  {
    __typename: "ModelSellerUserConnection",
    items:  Array< {
      __typename: "SellerUser",
      id: string,
      sellerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BuyerUsersByBuyerIdQueryVariables = {
  buyerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuyerUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BuyerUsersByBuyerIdQuery = {
  buyerUsersByBuyerId?:  {
    __typename: "ModelBuyerUserConnection",
    items:  Array< {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BuyerUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBuyerUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BuyerUsersByUserIdQuery = {
  buyerUsersByUserId?:  {
    __typename: "ModelBuyerUserConnection",
    items:  Array< {
      __typename: "BuyerUser",
      id: string,
      buyerId: string,
      userId: string,
      role?: Role | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserDevicesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserDevicesByUserIdQuery = {
  userDevicesByUserId?:  {
    __typename: "ModelUserDeviceConnection",
    items:  Array< {
      __typename: "UserDevice",
      id: string,
      userId: string,
      type?: DeviceType | null,
      app?: App | null,
      name?: string | null,
      meta?: string | null,
      token?: string | null,
      arn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByDateQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByDateQuery = {
  notificationsByDate?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      userId: string,
      type?: NotificationType | null,
      typeId?: string | null,
      app?: App | null,
      senderId: string,
      title?: string | null,
      meta?: string | null,
      message?: string | null,
      sent: boolean,
      read: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatsByBuyerIdQueryVariables = {
  buyerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatsByBuyerIdQuery = {
  chatsByBuyerId?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatsBySellerIdQueryVariables = {
  sellerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatsBySellerIdQuery = {
  chatsBySellerId?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatIdQueryVariables = {
  chatId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatIdQuery = {
  messagesByChatId?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesBySellerIdQueryVariables = {
  sellerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesBySellerIdQuery = {
  messagesBySellerId?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByBuyerIdQueryVariables = {
  buyerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByBuyerIdQuery = {
  messagesByBuyerId?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuotesByProductIdQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotesByProductIdQuery = {
  quotesByProductId?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      productId: string,
      buyerId: string,
      sellerId: string,
      quantity?: number | null,
      amount?: number | null,
      media?: string | null,
      details?: string | null,
      status?: QuoteStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuotesByBuyerIdQueryVariables = {
  buyerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotesByBuyerIdQuery = {
  quotesByBuyerId?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      productId: string,
      buyerId: string,
      sellerId: string,
      quantity?: number | null,
      amount?: number | null,
      media?: string | null,
      details?: string | null,
      status?: QuoteStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuotesBySellerIdQueryVariables = {
  sellerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotesBySellerIdQuery = {
  quotesBySellerId?:  {
    __typename: "ModelQuoteConnection",
    items:  Array< {
      __typename: "Quote",
      id: string,
      productId: string,
      buyerId: string,
      sellerId: string,
      quantity?: number | null,
      amount?: number | null,
      media?: string | null,
      details?: string | null,
      status?: QuoteStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionUserDeviceFilterInput | null,
};

export type OnCreateUserDeviceSubscription = {
  onCreateUserDevice?:  {
    __typename: "UserDevice",
    id: string,
    userId: string,
    type?: DeviceType | null,
    app?: App | null,
    name?: string | null,
    meta?: string | null,
    token?: string | null,
    arn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionUserDeviceFilterInput | null,
};

export type OnUpdateUserDeviceSubscription = {
  onUpdateUserDevice?:  {
    __typename: "UserDevice",
    id: string,
    userId: string,
    type?: DeviceType | null,
    app?: App | null,
    name?: string | null,
    meta?: string | null,
    token?: string | null,
    arn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionUserDeviceFilterInput | null,
};

export type OnDeleteUserDeviceSubscription = {
  onDeleteUserDevice?:  {
    __typename: "UserDevice",
    id: string,
    userId: string,
    type?: DeviceType | null,
    app?: App | null,
    name?: string | null,
    meta?: string | null,
    token?: string | null,
    arn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    type?: NotificationType | null,
    typeId?: string | null,
    app?: App | null,
    senderId: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title?: string | null,
    meta?: string | null,
    message?: string | null,
    sent: boolean,
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    type?: NotificationType | null,
    typeId?: string | null,
    app?: App | null,
    senderId: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title?: string | null,
    meta?: string | null,
    message?: string | null,
    sent: boolean,
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    type?: NotificationType | null,
    typeId?: string | null,
    app?: App | null,
    senderId: string,
    sender?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title?: string | null,
    meta?: string | null,
    message?: string | null,
    sent: boolean,
    read: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatMessageId?: string | null,
  } | null,
};

export type OnUpdateChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatMessageId?: string | null,
  } | null,
};

export type OnDeleteChatSubscriptionVariables = {
  filter?: ModelSubscriptionChatFilterInput | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    message?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatMessageId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    chatId: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null,
    sellerId?: string | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    parentMessage?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    sender:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    senderReceiver?: string | null,
    content?: string | null,
    media?: string | null,
    readBy?: string | null,
    createdAt: string,
    updatedAt: string,
    messageParentMessageId?: string | null,
    messageSenderId: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    chatId: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null,
    sellerId?: string | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    parentMessage?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    sender:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    senderReceiver?: string | null,
    content?: string | null,
    media?: string | null,
    readBy?: string | null,
    createdAt: string,
    updatedAt: string,
    messageParentMessageId?: string | null,
    messageSenderId: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    chatId: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      buyerId: string,
      sellerId: string,
      createdAt: string,
      updatedAt: string,
      chatMessageId?: string | null,
    } | null,
    sellerId?: string | null,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId?: string | null,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    parentMessage?:  {
      __typename: "Message",
      id: string,
      chatId: string,
      sellerId?: string | null,
      buyerId?: string | null,
      senderReceiver?: string | null,
      content?: string | null,
      media?: string | null,
      readBy?: string | null,
      createdAt: string,
      updatedAt: string,
      messageParentMessageId?: string | null,
      messageSenderId: string,
    } | null,
    sender:  {
      __typename: "User",
      id: string,
      name?: string | null,
      photo?: string | null,
      phone?: string | null,
      email?: string | null,
      role?: Role | null,
      deleted?: boolean | null,
      userTypeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    senderReceiver?: string | null,
    content?: string | null,
    media?: string | null,
    readBy?: string | null,
    createdAt: string,
    updatedAt: string,
    messageParentMessageId?: string | null,
    messageSenderId: string,
  } | null,
};

export type OnCreateIndustrySubscriptionVariables = {
  filter?: ModelSubscriptionIndustryFilterInput | null,
};

export type OnCreateIndustrySubscription = {
  onCreateIndustry?:  {
    __typename: "Industry",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIndustrySubscriptionVariables = {
  filter?: ModelSubscriptionIndustryFilterInput | null,
};

export type OnUpdateIndustrySubscription = {
  onUpdateIndustry?:  {
    __typename: "Industry",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIndustrySubscriptionVariables = {
  filter?: ModelSubscriptionIndustryFilterInput | null,
};

export type OnDeleteIndustrySubscription = {
  onDeleteIndustry?:  {
    __typename: "Industry",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness?:  {
    __typename: "Business",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness?:  {
    __typename: "Business",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessFilterInput | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness?:  {
    __typename: "Business",
    id: string,
    name?: string | null,
    sellers?:  {
      __typename: "ModelSellerConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserTypeSubscriptionVariables = {
  filter?: ModelSubscriptionUserTypeFilterInput | null,
};

export type OnCreateUserTypeSubscription = {
  onCreateUserType?:  {
    __typename: "UserType",
    id: string,
    name?: string | null,
    category?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserTypeSubscriptionVariables = {
  filter?: ModelSubscriptionUserTypeFilterInput | null,
};

export type OnUpdateUserTypeSubscription = {
  onUpdateUserType?:  {
    __typename: "UserType",
    id: string,
    name?: string | null,
    category?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserTypeSubscriptionVariables = {
  filter?: ModelSubscriptionUserTypeFilterInput | null,
};

export type OnDeleteUserTypeSubscription = {
  onDeleteUserType?:  {
    __typename: "UserType",
    id: string,
    name?: string | null,
    category?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null,
};

export type OnCreateQuoteSubscription = {
  onCreateQuote?:  {
    __typename: "Quote",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity?: number | null,
    amount?: number | null,
    media?: string | null,
    details?: string | null,
    status?: QuoteStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null,
};

export type OnUpdateQuoteSubscription = {
  onUpdateQuote?:  {
    __typename: "Quote",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity?: number | null,
    amount?: number | null,
    media?: string | null,
    details?: string | null,
    status?: QuoteStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuoteSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteFilterInput | null,
};

export type OnDeleteQuoteSubscription = {
  onDeleteQuote?:  {
    __typename: "Quote",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      code?: string | null,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      images?: string | null,
      documents?: string | null,
      listPrice?: number | null,
      unitPrice?: number | null,
      tierPrice?: string | null,
      unitType?: UnitType | null,
      taxCategoryId?: string | null,
      attributes?: string | null,
      weight?: number | null,
      active?: boolean | null,
      verified?: boolean | null,
      taxExempt?: boolean | null,
      keywords?: Array< string | null > | null,
      leadTime?: string | null,
      rating?: number | null,
      stock?: number | null,
      sellerId: string,
      productCategoryId: string,
      productSubCategoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    buyerId: string,
    buyer?:  {
      __typename: "Buyer",
      id: string,
      buyerType?: BuyerType | null,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      categories?: Array< string | null > | null,
      rating?: number | null,
      age?: number | null,
      gender?: Gender | null,
      createdAt: string,
      updatedAt: string,
      buyerCartId?: string | null,
    } | null,
    sellerId: string,
    seller?:  {
      __typename: "Seller",
      id: string,
      name?: string | null,
      profile?: string | null,
      image?: string | null,
      taxId?: string | null,
      active?: boolean | null,
      verified?: boolean | null,
      phone?: string | null,
      email?: string | null,
      website?: string | null,
      address?: string | null,
      attributes?: string | null,
      images?: string | null,
      documents?: string | null,
      rating?: number | null,
      bank?: string | null,
      age?: number | null,
      gender?: Gender | null,
      details?: string | null,
      productDetails?: string | null,
      industryId?: string | null,
      businessId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity?: number | null,
    amount?: number | null,
    media?: string | null,
    details?: string | null,
    status?: QuoteStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
