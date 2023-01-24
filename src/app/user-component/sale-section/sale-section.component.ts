import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/auth.service';

export class Sale {
  customerName: string = '';
  quantity: string = '';
  totalAmount: string = '';
  product: any = '';
  customerPay: any = '';

}
@Component({
  selector: 'app-sale-section',
  templateUrl: './sale-section.component.html',
  styleUrls: ['./sale-section.component.css']
})
export class SaleSectionComponent implements OnInit {

  formGroup!: FormGroup;
  productIds: any = [['', 'Select Product']];
  productInfo: any = [];
  productDetail: string[] = [];
  total: number = 0;
  amount: string = '';
  saleAmount: any;
  saleData: any;
  constructor(private fb: FormBuilder, private api: ApiService, private route: Router) {
    this.formGroup = this.fb.group({
      product_id: [''],
      qty: [''],
      customer: [''],
      cash: [''],

    });
  }

  ngOnInit(): void {
    this.getProductIds();
    this.getAmount();
  }

  onChangeServer(e: any) {
    let idx = Number(e.target.value);
    this.productDetail = this.productIds[idx];
  }

  getProductIds() {
    this.api.getTypeRequest('product/id-list').subscribe((res: any) => {
      this.productIds = res;
      console.log(res);
    })
  }

  addSale() {
    let id = this.productDetail[0];
    let code = this.productDetail[1];
    let name = this.productDetail[2];
    let qty = Number(this.formGroup.value.qty);
    let price = Number(this.productDetail[4]) * 1.05;
    let subTotal = qty * price;
    this.productInfo.push([id, code, name, price, qty, subTotal]);
    this.total += subTotal;
  }

  valueSave() {
    let formVal = this.formGroup.value;
    let sales: Sale = {
      customerName: formVal.customer,
      quantity: this.productInfo.map((i: any[]) => {
        return Number(i[4]);
      }),
      totalAmount: `${this.total}`,
      customerPay: formVal.cash,
      product: this.productInfo.map((i: any[]) => {
        return { "productId": Number(i[0]), "soldQuantity": Number(i[4]), "soldPrice": Number(i[5]) };
      })
    }
    console.log(sales);

    this.api.postTypeRequest(`sale/save/`, sales).subscribe((res) => {
      console.log(res);
      this.saleData = res;
      localStorage.setItem("id", this.saleData.id);
      this.route.navigateByUrl("user/sale-report");
    })
  }

  removeItem(i: number) {
    this.total -= this.productInfo[i][5];
    this.productInfo.splice(i, 1);

  }

  

  getAmount() {
    this.api.getTypeRequest(`sale/sale-amount`).subscribe((res) => {
      console.log(res);
      this.saleAmount = res;
    })
  }

}
