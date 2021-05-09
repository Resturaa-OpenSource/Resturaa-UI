import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreTable } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  store:StoreTable;

  constructor(private http:HttpClient) { }

  
  
  //Auth API
  authenticateUser(loginRequest){
    return this.http.post('/api/auth/signin',loginRequest);
  }
  test(storeID){
    return this.http.get('/api/auth/getstore',{params:{storeID}});
  }
  registerUser(signUpRequest){
    return this.http.post('/api/auth/signup',signUpRequest);
  }

  //Customer API
  addNewCustomer(newCustomer){
    return this.http.post('/api/customer/add',newCustomer);
  }
  getAllUsers(){
    return this.http.get('/api/customer/getAll');
  }
  findByID(custID){
    return this.http.get('/api/customer/findById',{params:{custID}});
  }
  deleteById(custID){
    return this.http.delete('/api/customer/deleteById',{params:{custID}});
  }
  updateById(newCustomer){
    return this.http.put('/api/customer/updateById',newCustomer);
  }
  getAllCustomerList(){
    return this.http.get('/api/customer/getAllCustomerList');
  }
  getCustPurchHistory(custID){
    return this.http.get('/api/customer/getCustPurchHistory',{params:{custID}});
  }
  getCustListForSelectRelation(){
    return this.http.get('/api/customer/getCustListForRelation');
  }

  //File API
  getImage(fileName){
    return this.http.get('/api/files/download',{params:{fileName}});
  }
  handleFileUpload(file:FormData){
    return this.http.post('/api/files/upload',file,{
      responseType: 'text'
    });
  }
  uploadFile(file:FormData) {
    return this.http.post('/api/files/upload/', file, {
  
    });
  }
  
  //Kitchen API
  getAllKotOrder(storeID){
    return this.http.get('/api/kitchen/runningorder',{params:{storeID}});
  }
  updateProductStatus(order){
    return this.http.put('/api/kitchen/delivery',order);
  }

  //OfferManagement API
  addNewOffer(newOffer){
    return this.http.post('/api/OfferManagement/add',newOffer);
  }
  getByID(offerID){
    return this.http.get('/api/OfferManagement/getById',{params:{offerID}});
  }
  enableOffer(offerID,enable){
    return this.http.get('/api/OfferManagement/enableOffer',{params:{offerID,enable}});
  }
  deleteOffer(offerID){
    return this.http.delete('/api/OfferManagement/deleteOffer',{params:{offerID}});
  }
  getAllOffers(){
    return this.http.get('/api/OfferManagement/getAll');
  }
  getOfferList(){
    return this.http.get('/api/OfferManagement/getOfferList');
  }

  //Order API
  addNewOrder(neworder){
    return this.http.post('/api/order/addOrder',neworder);
  }
  getCount(storeID){
    return this.http.get('/api/order/getCount',{params:{storeID}});
  }
  getAllOrders(){
    return this.http.get('/api/order/getAll');
  }
  getOrderTableById(orderID){
    return this.http.get('/api/order/getOrderTableById',{params:{orderID}});
  }
  getRunningOrder(storeID,status){
    return this.http.get('/api/order/getRunningOrder',{params:{storeID,status}});
  }
  getHistory(custID){
    return this.http.get('/api/order/history',{params:{custID}});
  }
  getAvailableTables(storeID,sDate,eDate){
    return this.http.get('/api/order/getAvailableTables',{params:{storeID,sDate,eDate}});
  }
  getRecentProducts(storeID){
    return this.http.get('/api/order/getRecentProducts',{params:{storeID}});
  }
  getAllTags(){
    return this.http.get('/api/order/getTags');
  }
  getTags(storeID,tagId){
    return this.http.get('/api/order/getTagProducts',{params:{storeID,tagId}});
  }
  closeOrder(neworder){
    return this.http.put('/api/order/closeOrder',neworder);
  }
  addNewReservation(neworder){
    return this.http.post('/api/order/newReservation',neworder);
  }
  viewReservation(storeID){
    return this.http.get('/api/order/viewReservation',{params:{storeID}});
  }
  cancelReservation(reservationID){
    return this.http.delete('/api/order/cancelReservation',{params:{reservationID}});
  }
  getAllTableForReserve(reservationID,storeID){
    return this.http.get('/api/order/getTableforReserve',{params:{reservationID,storeID}});
  }
  addReservationTable(table){
    return this.http.post('/api/order/addReservation',table);
  }
  getAllReservation(storeID){
    return this.http.get('/api/order/getAllReservation',{params:{storeID}});
  }
  netBanking(invoice){
    return this.http.post('/api/order/netbanking',invoice);
  }
  check(ID){
    return this.http.get('/api/order/checkNetBankingStatus',{params:{ID}});
  }

  //Product API
  addnewproduct(newProduct){
    return this.http.post('/api/product/add',newProduct);
  }
  getAllProducts(){
    return this.http.get('/api/product/getAll');
  }
  getAllStoreProducts(StoreID){
    return this.http.get('/api/product/getAllStoreProducts',{params:{StoreID}});
  }
  viewProduct(StoreID,productID){
    return this.http.get('/api/product/viewProduct',{params:{StoreID,productID}});
  }
  editProduct(productID){
    return this.http.get('/api/product/editProduct',{params:{productID}});
  }
  updateProduct(product){
    return this.http.put('/api/product/updateProduct',product);
  }
  enableProduct(storeID,productID,enable){
    return this.http.get('/api/product/enableProduct',{params:{storeID,productID,enable}});
  }
  applyOffer(storeID,productID,offerId){
    return this.http.get('/api/product/applyOffer',{params:{storeID,productID,offerId}});
  }
  delete(productID){
    return this.http.delete('/api/product/delete',{params:{productID}});
  }
  deleteByPVId(productVariantID){
    return this.http.delete('/api/product/deleteByPVId',productVariantID);
  }

  //Settings API
  backUp(){
    return this.http.get('/api/settings/backup');
  }
  registerDevice(storeID){
    return this.http.get('/api/settings/registerDevice',{params:{storeID}});
  }
  checkDevice(deviceID){
    return this.http.get('/api/settings/cingsheckDevice',{params:{deviceID}});
  }
  addBill(bill){
    return this.http.post('/api/settings/addBill',bill);
  }
  getBill(storeID){
    return this.http.get('/api/settings/getBill',{params:{storeID}});
  }
  deleteBill(storeID){
    return this.http.delete('/api/settings/deleteBill',{params:{storeID}});
  }

  //StaffManagement API
  addNewUser(newStaff){
    return this.http.post('/api/staffManagement/add',newStaff);
  }
  checkUserName(username){
    return this.http.get('/api/staffManagement/checkUsername',{params:{username}});
  }
  getAll(){
    return this.http.get('/api/staffManagement/getAll');
  }
  getStaffByID(staffID){
    return this.http.get('/api/staffManagement/getByID',{params:{staffID}});
  }
  deleteByID(staffID){
    return this.http.delete('/api/staffManagement/deleteByID',{params:{staffID}});
  }
  getListofstaff(){
    return this.http.get('/api/staffManagement/getListofstaff');
  }
  updatePassword(update){
    return this.http.put('/api/staffManagement/updatePassword',update);
  }
  updateInfo(update){
    return this.http.put('/api/staffManagement/updateInfo',update);
  }
  updatePermission(update){
    return this.http.put('/api/staffManagement/updatepermission',update);
  }

  //StoreManagement API
  signup(signup){
    return this.http.post('/api/StoreManagement/signup',signup);
  }
  signin(signin){
    return this.http.post('/api/StoreManagement/signin',signin);
  }
  addNewStore(newstore){
    return this.http.post('/api/StoreManagement/add',newstore);
  }
  deleteStore(storeID){
    return this.http.delete('/api/StoreManagement/deleteStore',{params:{storeID}});
  }
  getAllStore(){
    return this.http.get('/api/StoreManagement/getAll');
  }
  addProduct(storeID,productID){
    return this.http.get('/api/StoreManagement/addProduct',{params:{storeID,productID}});
  }
  enableStore(storeID,productID,enable){
    return this.http.get('/api/StoreManagement/enableProduct',{params:{storeID,productID,enable}});
  }
  viewStoredetails(storeID){
    return this.http.get('/api/StoreManagement/viewStoredetails',{params:{storeID}});
  }
  deleteProductFromStore(storeID,productID){
    return this.http.get('/api/StoreManagement/deleteProductFromStore',{params:{storeID,productID}});
  }
  storeListView(){
    return this.http.get('/api/StoreManagement/StoreListView');
  }
  addTable(newTable){
    return this.http.put('/api/StoreManagement/addTable',newTable);
  }
  deleteTable(tableId){
    return this.http.delete('/api/StoreManagement/deleteTable',{params:{tableId}});
  }
  getAllStoreSeatTable(storeID){
    return this.http.get('/api/StoreManagement/getStoreTableDetails',{params:{storeID}});
  }
  getAllProductByStoreId(storeID){
    return this.http.get('/api/StoreManagement/getAllProductIds',{params:{storeID}});
  }
  getTable(tableId){
    return this.http.get('/api/StoreManagement/getTable',{params:{tableId}});
  }
  editStoreDetails(storeID){
    return this.http.put('/api/StoreManagement/editStoreDetails',{params:{storeID}});
  }

  //Tag API
  addNewTag(tag){
    return this.http.post('/api/Tag/add',tag);
  }
  getAlltags(){
    return this.http.get('/api/Tag/getAll');
  }
  getTagById(tagID){
    return this.http.get('/api/Tag/getByTagId',{params:{tagID}});
  }
  deleteTag(tagID){
    return this.http.delete('/api/Tag/deleteTag',{params:{tagID}});
  }
  getTaggedProduct(tagID){
    return this.http.get('/api/Tag/getTaggedProduct',{params:{tagID}});
  }
  addTagProduct(tagID,productID){
    return this.http.get('/api/Tag/addTagProduct',{params:{tagID,productID}});
  }
  getAllProductByTagId(tagID){
    return this.http.get('/api/Tag/getAllProductByTagId',{params:{tagID}});
  }
  deleteBytpId(tagID,productID){
    return this.http.delete('/api/Tag/deleteBytpId',{params:{tagID,productID}});
  }

  //SalesReport API
  getSalesReport(startDate,endDate,storeID){
    return this.http.get('/api/salesReport/getSalesReport',{params:{startDate,endDate,storeID}});
  }
  
  //ProductReport API
  getProductReport(startDate,endDate,storeID){
    return this.http.get('/api/productReport/getProductReport',{params:{startDate,endDate,storeID}});
  }

//ingredients
getIngredients()
{
  return this.http.get('/api/inventory/getAllIngredients');
}
updateIngredients(ingredients)
{
  return this.http.post('/api/inventory/addIngredients',ingredients);
}
getAllIngMappingBy(productID,varientID){
  return this.http.get('/api/inventory/getAllIngMappingBy',{params:{productID,varientID}})
}
//purchase
getAllPo(){
  return this.http.get('/api/inventory/getAllPO');
}
deletePOR(id)
  {
    return this.http.delete('/api/inventory/deletePOR',{params:{id}});
  }
addPOR(por)
{
  return this.http.post('/api/inventory/addPOR',por);
}


}
