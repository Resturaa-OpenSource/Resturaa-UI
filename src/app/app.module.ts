import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniheaderComponent } from './uistructure/miniheader/miniheader.component';
import { NavigationComponent } from './uistructure/navigation/navigation.component';
import { MenucontainerComponent } from './uistructure/menucontainer/menucontainer.component';
import { ContentcontainerComponent } from './uistructure/contentcontainer/contentcontainer.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MenucontentComponent } from './uistructure/menucontent/menucontent.component';
import { PosSubmenuComponent } from './pos/pos-submenu/pos-submenu.component';
import { KitchenSubmenuComponent } from './kitchen/kitchen-submenu/kitchen-submenu.component';
import { InventoryMenuComponent } from './inventory/inventory-menu/inventory-menu.component';
import { StoreSubmenuComponent } from './stores/store-submenu/store-submenu.component';
import { StoreloginComponent } from './applicationstartingpage/storelogin/storelogin.component';
import { UserloginComponent } from './applicationstartingpage/userlogin/userlogin.component';
import { UiStructureComponent } from './uistructure/ui-structure/ui-structure.component';
import { PosproductselectionComponent } from './pos/posproductselection/posproductselection.component';
import { PosmodalsComponent } from './pos/posmodals/posmodals.component';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductManagementComponent } from './stores/product-management/product-management.component';
import { StoreManagementComponent } from './stores/store-management/store-management.component';
import { ModaltableComponent } from './stores/modaltable/modaltable.component';
import { ModalproductsComponent } from './stores/modalproducts/modalproducts.component';
import { StaffmanagementComponent } from './stores/staffmanagement/staffmanagement.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LottieAnimationViewModule } from 'ng-lottie';
import { LoaderComponent } from './common/loader/loader.component';
import { BillpageComponent } from './stores/billpage/billpage.component';
import { AuthGuardService } from './auth-guard.service';
import { MenuemptypageComponent } from './common/menuemptypage/menuemptypage.component';
import { PosemptypageComponent } from './common/posemptypage/posemptypage.component';
import { InventoryemptypageComponent } from './common/inventoryemptypage/inventoryemptypage.component';
import { StoreEmptypageComponent } from './common/store-emptypage/store-emptypage.component';
import { KitchenEmptypageComponent } from './common/kitchen-emptypage/kitchen-emptypage.component';
import { ContentemptypageComponent } from './common/contentemptypage/contentemptypage.component';
import { ErrorpageComponent } from './common/errorpage/errorpage.component';
import { ReportsComponent } from './stores/reports/reports.component';
import { ReportcontentComponent } from './stores/reports/reportcontent/reportcontent.component';
import { ReportTabsComponent } from './stores/reports/report-tabs/report-tabs.component';
import { SalesreportComponent } from './stores/reports/salesreport/salesreport.component';
import { ProductreportComponent } from './stores/reports/productreport/productreport.component';
import { OrderReportComponent } from './stores/reports/order-report/order-report.component';
import { KotreportComponent } from './stores/reports/kotreport/kotreport.component';
import { ChartsModule } from 'ng2-charts';
import { EmptyreportComponent } from './stores/reports/emptyreport/emptyreport.component';
import { PurchaseorderComponent } from './inventory/purchaseorder/purchaseorder.component';
import { OrderviewComponent } from './inventory/orderview/orderview.component';
import { IngredientsComponent } from './inventory/ingredients/ingredients.component';
import { StatetransferComponent } from './inventory/statetransfer/statetransfer.component';
import { SkuComponent } from './inventory/sku/sku.component';
import { PorComponent } from './inventory/purchaseorder/por/por.component';
import { CreateporComponent } from './inventory/purchaseorder/createpor/createpor.component';
import { PurchaseorderemptypageComponent } from './inventory/purchaseorder/purchaseorderemptypage/purchaseorderemptypage.component';
import { PorchildComponent } from './inventory/purchaseorder/porchild/porchild.component';
import { CreatepormodalComponent } from './inventory/purchaseorder/createpormodal/createpormodal.component';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FilterPipe } from './common/filter.pipe';
import { DatePipe } from '@angular/common';
import { CloseOderComponent } from './pos/close-oder/close-oder.component';
import { CustomerSelectionComponent } from './pos/customer-selection/customer-selection.component';

import { NgxElectronModule } from 'ngx-electron';
import { StoretranferModelComponent } from './inventory/statetransfer/storetranfer-model/storetranfer-model.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    MiniheaderComponent,
    NavigationComponent,
    MenucontainerComponent,
    ContentcontainerComponent,
    MenucontentComponent,
    PosSubmenuComponent,
    KitchenSubmenuComponent,
    InventoryMenuComponent,
    StoreSubmenuComponent,
    StoreloginComponent,
    UserloginComponent,
    UiStructureComponent,
    PosproductselectionComponent,
    PosmodalsComponent,
    RunningorderComponent,
    PoscustomerComponent,
    TableselectionComponent,
    BookingComponent,
    NewbookingComponent,
    KitchenrunningorderComponent,
    KitchendeliveryComponent,
    KitchenproductComponent,
    ProductTagsComponent,
    OfferManagementComponent,
    ProductManagementComponent,
    StoreManagementComponent,
    LoaderComponent,
    ModaltableComponent,
    ModalproductsComponent,
    StaffmanagementComponent,
    BillpageComponent,
    MenuemptypageComponent,
    PosemptypageComponent,
    InventoryemptypageComponent,
    StoreEmptypageComponent,
    KitchenEmptypageComponent,
    ContentemptypageComponent,
    ErrorpageComponent,
    ReportsComponent,
    ReportcontentComponent,
    ReportTabsComponent,
    SalesreportComponent,
    ProductreportComponent,
    OrderReportComponent,
    KotreportComponent,
    EmptyreportComponent,
    PurchaseorderComponent,
    OrderviewComponent,
    IngredientsComponent,
    StatetransferComponent,
    SkuComponent,
    PorComponent,
    CreateporComponent,
    PurchaseorderemptypageComponent,
    PorchildComponent,
    CreatepormodalComponent,
    CloseOderComponent,
    CustomerSelectionComponent,
    StoretranferModelComponent,
  ],
  imports: [
    LottieAnimationViewModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    ChartsModule,
    NgxContentLoadingModule,
    NgxMaterialTimepickerModule,
    NgxElectronModule
  ],
  providers: [AuthGuardService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
