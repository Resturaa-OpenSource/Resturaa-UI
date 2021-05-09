import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiStructureComponent } from './uistructure/ui-structure/ui-structure.component';
import { PosproductselectionComponent } from './pos/posproductselection/posproductselection.component';
import { RunningorderComponent } from './pos/runningorder/runningorder.component';
import { PoscustomerComponent } from './pos/poscustomer/poscustomer.component';
import { TableselectionComponent } from './pos/tableselection/tableselection.component';
import { BookingComponent } from './pos/booking/booking.component';
import { NewbookingComponent } from './pos/newbooking/newbooking.component';
import { KitchenrunningorderComponent } from './kitchen/kitchenrunningorder/kitchenrunningorder.component';
import { KitchendeliveryComponent } from './kitchen/kitchendelivery/kitchendelivery.component';
import { KitchenproductComponent } from './kitchen/kitchenproduct/kitchenproduct.component';
import { ProductTagsComponent } from './stores/product-tags/product-tags.component';
import { OfferManagementComponent } from './stores/offer-management/offer-management.component';
import { StoreloginComponent } from './applicationstartingpage/storelogin/storelogin.component';
import { UserloginComponent } from './applicationstartingpage/userlogin/userlogin.component';
import { ProductManagementComponent } from './stores/product-management/product-management.component';
import { StoreManagementComponent } from './stores/store-management/store-management.component';
import { AuthGuardService } from './auth-guard.service';
import { StaffmanagementComponent } from './stores/staffmanagement/staffmanagement.component';
import { BillpageComponent } from './stores/billpage/billpage.component';
import { KitchenEmptypageComponent } from './common/kitchen-emptypage/kitchen-emptypage.component';
import { StoreEmptypageComponent } from './common/store-emptypage/store-emptypage.component';
import { PosemptypageComponent } from './common/posemptypage/posemptypage.component';
import { InventoryemptypageComponent } from './common/inventoryemptypage/inventoryemptypage.component';
import { ContentemptypageComponent } from './common/contentemptypage/contentemptypage.component';
import { ErrorpageComponent } from './common/errorpage/errorpage.component';
import { ReportsComponent } from './stores/reports/reports.component';
import { SalesreportComponent } from './stores/reports/salesreport/salesreport.component';
import { OrderReportComponent } from './stores/reports/order-report/order-report.component';
import { ProductreportComponent } from './stores/reports/productreport/productreport.component';
import { KotreportComponent } from './stores/reports/kotreport/kotreport.component';
import { EmptyreportComponent } from './stores/reports/emptyreport/emptyreport.component';
import { PurchaseorderComponent } from './inventory/purchaseorder/purchaseorder.component';
import { StatetransferComponent } from './inventory/statetransfer/statetransfer.component';
import { IngredientsComponent } from './inventory/ingredients/ingredients.component';
import { OrderviewComponent } from './inventory/orderview/orderview.component';
import { SkuComponent } from './inventory/sku/sku.component';
import { PorComponent } from './inventory/purchaseorder/por/por.component';
import { CreateporComponent } from './inventory/purchaseorder/createpor/createpor.component';
import { PurchaseorderemptypageComponent } from './inventory/purchaseorder/purchaseorderemptypage/purchaseorderemptypage.component';
import { CloseOderComponent } from './pos/close-oder/close-oder.component';
import { CustomerSelectionComponent } from './pos/customer-selection/customer-selection.component';
import { StoretranferModelComponent } from './inventory/statetransfer/storetranfer-model/storetranfer-model.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'storelogin' },
  { path: 'storelogin', component: StoreloginComponent },
  { path: 'userlogin', component: UserloginComponent },
  {
    path: 'home', component: UiStructureComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'empty' },
      { path: 'empty', component: ContentemptypageComponent }
    ]
  },
  { path: 'error', component: ErrorpageComponent },
  {

    path: 'module',
    component: UiStructureComponent,
    // { path: '', pathMatch: 'full', redirectTo: 'contentemptypage' },
    // { path: 'contentemptypage', pathMatch: 'full', component: 'ContentemptypageComponent' },


    children: [
      { path: '', pathMatch: 'full', redirectTo: 'empty' },
      { path: 'empty', component: ContentemptypageComponent },
      {
        path: 'pos',
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'posemptypage' },
          { path: 'pselection', component: PosproductselectionComponent, },
          { path: 'runningorder', component: RunningorderComponent,data: { title: "Customers"} },
          { path: 'poscustomer', component: PoscustomerComponent },
          { path: 'tableselection', component: TableselectionComponent },
          { path: 'booking', component: BookingComponent },
          { path: 'booking', component: BookingComponent },
          { path: 'newbooking', component: NewbookingComponent },
          { path: 'posemptypage', component: PosemptypageComponent },
          {path:'closeOrder',component:CloseOderComponent},
          {path:'Customersection',component:CustomerSelectionComponent}
        ],
      }, {
        path: 'kitchen',
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'kitchenemptypage' },
          { path: 'krunningorder', component: KitchenrunningorderComponent },
          { path: 'kdelivery', component: KitchendeliveryComponent },
          { path: 'kproduct', component: KitchenproductComponent },
          { path: 'kitchenemptypage', component: KitchenEmptypageComponent }
        ]
      }, {
        path: 'stores',
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'storeemptypage' },
          { path: 'producttags', component: ProductTagsComponent },
          { path: 'offermanagement', component: OfferManagementComponent },
          { path: 'productmanagement', component: ProductManagementComponent },
          { path: 'storemanagement', component: StoreManagementComponent },
          { path: 'staffmanagement', component: StaffmanagementComponent },
          { path: 'billpage', component: BillpageComponent },
          {
            path: 'reports', component: ReportsComponent,

            children: [
              { path: '', pathMatch: 'full', redirectTo: 'emptyreport' },
              { path: 'emptyreport', component: EmptyreportComponent },
              { path: 'salesreport', component: SalesreportComponent },
              { path: 'ordereport', component: OrderReportComponent },
              { path: 'productreport', component: ProductreportComponent },
              { path: 'kotreport', component: KotreportComponent }
            ]
          },

          { path: 'storeemptypage', component: StoreEmptypageComponent }
        ]
      },
      {
        path: 'inventory',
        canActivateChild: [AuthGuardService],
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'inventoryemptypage' },
          { path: 'inventoryemptypage', component: InventoryemptypageComponent },
          {path:'purchaseorder',component:PurchaseorderComponent,
           children:[
             {path:'',pathMatch:'full',redirectTo:'pcemptypage'},
             {path:'pcemptypage',component:PurchaseorderemptypageComponent},
            {path:'por',component:PorComponent}   ,
            {path:'createpor',component:CreateporComponent}
           ]},
          {path:'statetransfer',component:StatetransferComponent},
          {path:'ingredients',component:IngredientsComponent},
          {path:'orderview',component:OrderviewComponent},
          {path:'sku',component:SkuComponent},
          {path:'storetranfer',component:StoretranferModelComponent}
        ]

      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
