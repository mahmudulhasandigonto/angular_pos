import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './component/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SupplierComponent } from './component/supplier/supplier.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { SaleComponent } from './component/sale/sale.component';
import { SaleReportComponent } from './component/sale-report/sale-report.component';
import { SaleSectionComponent } from './user-component/sale-section/sale-section.component';
import { ProductSectionComponent } from './user-component/product-section/product-section.component';
import { SupplierSectionComponent } from './user-component/supplier-section/supplier-section.component';
import { UserSidebarComponent } from './user-component/user-sidebar/user-sidebar.component';
import { SaleInvoiceComponent } from './component/sale-invoice/sale-invoice.component';
import { SalesReportComponent } from './component/sales-report/sales-report.component';
import { SaleAnalysisComponent } from './component/sale-analysis/sale-analysis.component';
import { StockComponent } from './component/stock/stock.component';
import { NgToastModule } from 'ng-angular-popup';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserDashboardComponent } from './user-component/user-dashboard/user-dashboard.component';
import { UserSaleInvoiceComponent } from './user-component/user-sale-invoice/user-sale-invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ProductComponent,
    SupplierComponent,
    AddUserComponent,
    SaleComponent,
    SaleReportComponent,
    SaleSectionComponent,
    ProductSectionComponent,
    SupplierSectionComponent,
    UserSidebarComponent,
    SaleInvoiceComponent,
    SalesReportComponent,
    SaleAnalysisComponent,
    StockComponent,
    DashboardComponent,
    UserDashboardComponent,
    UserSaleInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
