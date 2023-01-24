import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './component/product/product.component';
import { SaleAnalysisComponent } from './component/sale-analysis/sale-analysis.component';
import { SaleInvoiceComponent } from './component/sale-invoice/sale-invoice.component';
import { SaleReportComponent } from './component/sale-report/sale-report.component';
import { SaleComponent } from './component/sale/sale.component';
import { SalesReportComponent } from './component/sales-report/sales-report.component';
import { StockComponent } from './component/stock/stock.component';
import { SupplierComponent } from './component/supplier/supplier.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductSectionComponent } from './user-component/product-section/product-section.component';
import { SaleSectionComponent } from './user-component/sale-section/sale-section.component';
import { SupplierSectionComponent } from './user-component/supplier-section/supplier-section.component';
import { UserDashboardComponent } from './user-component/user-dashboard/user-dashboard.component';
import { UserSaleInvoiceComponent } from './user-component/user-sale-invoice/user-sale-invoice.component';
import { UserSidebarComponent } from './user-component/user-sidebar/user-sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: SidebarComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },

      { path: 'product', component: ProductComponent },
      { path: 'supplier', component: SupplierComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: 'sale', component: SaleComponent },
      { path: 'sale-report', component: SaleReportComponent },
      { path: 'sales-report', component: SalesReportComponent },
      { path: 'sales-invoice', component: SaleInvoiceComponent },
      { path: 'sales-analysis', component: SaleAnalysisComponent },
      { path: 'stock', component: StockComponent },
    ]
  },
  {
    path: 'user', component: UserSidebarComponent, canActivate: [AuthGuard], children: [
      { path: '', component: UserDashboardComponent },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'sale', component: SaleSectionComponent },
      { path: 'product', component: ProductSectionComponent },
      { path: 'sale-report', component: SaleReportComponent },
      { path: 'supplier', component: SupplierSectionComponent },
      { path: 'sales-invoice', component: UserSaleInvoiceComponent },
      { path: 'stock', component: StockComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
