//LoginRequest
export interface LoginRequest {
    username: any;
    password: any;
}

//CustomerTable
export interface CustomerTable {
    custID: any;
    custName: any;
    custPhone: any;
    custEmail: any;
    custSex: any;
    custAddress1: any;
    custAddress2: any;
    custPincode: any;
    custImage: any;
    custCoin: any;
}

//DeviceTable
export interface DeviceTable {
    uid: any;
    storeID: any;
    date: any;
}

//OfferTable
export interface OfferTable {
    offerId: any;
    offerTittle: any;
    offerValue: any;
    offerDetails: any;
    offerEnable: any;
    storeID: any;
}

//OrderedProductsTable
export interface OrderedProductsTable {
    itemCode: any;
    quantity: any;
    price: any;
    offerValue: any;
    isParcel: any;
    productVariantID: any;
    productVarientName: any;
    status: any;
    itemcodePrefix: any;
    productName: any;
}

//OrderTable
export interface OrderTable {
    orderNumber: any;
    orderDate: any;
    staffUsername: any;
    customerId: any;
    customerName: any;
    customerPhone: any;
    orderTotal: any;
    orderProCount: any;
    deliveryTime: any;
    paymentMode: any;
    status: any;
    orderType: any;
    storeID: any;
    deviceID: any;
    orderEndTime: any;
    grandTotal: any;
    products: OrderedProductsTable[];
    tables: SelectedTable[];
}
export interface ProductEdit {
    product: ProductTable;
    productVariants: ProductVariants[];
}
export interface ProductView {
    productID: any;
    image: any;
    productName: any;
    productNature: any;
    productPrice: any;
    productTax: any;
    deliveryTime: any;
    productDetails: any;
    enable: any;
    prefix: any;

    OfferTittle: any;
    offerDetails: any;
    offerValue: any;
    offerType: any;

    variants: ProductVariants[];
    tags: TagTable[];
}
//ProductTable
export interface ProductTable {
    itemCode: any;
    itemcodePrefix: any;
    productName: any;
    productNature: any;
    productDesc: any;
    productImage: any;
    productPrice: any;
    productTax: any;
    prductRating: any;
    deliveryTime: any;
}

//ProductVariants
export interface ProductVariants {
    productVariantID: any;
    productID: any;
    name: any;
    price: any;

}

//ReservationTable
export interface ReservationTable {
    reservationId: any;
    orderId: any;
    startTime: any;
    endTime: any;
    storeId: any;
    specialRequest: any;
    occasion: any;
    custName: any;
    custPhone: any;

}

//SelectedTable
export interface SelectedTable {
    tableID: any;
    seatCount: any;
    tableName: any;
    max: any;
}

//StaffTable
export interface StaffTable {
    staffID: any;
    staffName: any;
    staffPh: any;
    staffEmail: any;
    staffImage: any;
    staffAddress1: any;
    staffAddress2: any;
    state: any;
    country: any;
    staffPincode: any;
    staffJobTittle: any;
    staffGender: any;
    staffDOB: any;
    staffjoinedDate: any;
    staffPermission: any;
    staffUserName: any;
    staffPassword: any;
}

//StoreProductTable
export interface StoreProductTable {
    productEnableID: any;
    productID: any;
    storeID: any;
    enable: any;
    offeID: any;
}

//StoreSeatTable
export interface StoreSeatTable {
    tableId: any;
    storeId: any;
    tableName: any;
    seatCount: any;
    seatOccupied: any;
  
}

//StoreTable
export interface StoreTable {
    storeId: any;
    storeName: any;
    email: any;
    password: any;
    createdDate: any;
    subscription: any;
    status: any;
    storeAddress1: any;
    storeAddress2: any;
    state: any;
    country: any;
    storePincode: any;
    storeManager: any;
    storeTaxinfo: any;
    storeType: any;
    storeCounter: any;
    imageLink: any;
}

//TagMappingTable
export interface TagMappingTable {
    tagmappingID: any;
    productID: any;
    tagID: any;
}

//TagTable
export interface TagTable {
    tagID: any;
    imageID: any;
    tagColor: any;
    tagName: any;
}
//store prdlist
export interface storeProduct {
    productID: any;
    image: any;
    productName: any;
    productNature: any;
    offerName: any;
    productPrice: any;
    productTax: any;
    enable: any;
}

//VariantValue
export interface VariantValue {
    item: any;
    value: any;
}

//BillPage
export interface BillPage {
    id: any;
    imageLink: any;
    message: any;
    storeID: any;
}

//SalesReport
export interface SalesReport {
    startDate: any;
    endDate: any;
    storeID: any;
}

//ProductReport
export interface ProductReport {

    sellingCount: any;
    productName: any;
}

//ReservationListView

export interface IngredientsTable {
    id: any;
    name: any;
    unitPrice: any;
    mrp: any;
    packedOn: any;
    validitiy: any;
    sku: any;
    currentSKU: any;
}
export interface ReservationListView {
    orderTable: OrderTable;
    reservationTable: ReservationTable;
}
export interface purchaseOderTable {
    id: any;
    orederName: any;
    date: any;
    totalAmount: any;
    status: any;
    items: purchaseOderListTable[];
}
export interface purchaseOderListTable {
    code: any;
    name: any;
    unitPrice: any;
    storeQty: any;
    requiredQty: any;
    reciQty: any;
    sku: any;
}
export interface SalesOut {
    orderNumber: any;
    date: any;
    productQuantity: any;
    totalAmount: number;
    status: string;
}

export interface IngredientsMapping {
    id: any;
    productID: any;
    ingrediantID: any;
    productVarientID: any;
    ingrediantName: any;
    value: any;
    totalExpense: any;
    varientName: any;
    productName: any;
}
export interface ChipCount{
    newOrder: number;
    reservation: number;
  }