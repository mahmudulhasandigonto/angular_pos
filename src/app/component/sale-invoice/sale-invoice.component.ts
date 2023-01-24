import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sale-invoice',
  templateUrl: './sale-invoice.component.html',
  styleUrls: ['./sale-invoice.component.css']
})
export class SaleInvoiceComponent implements OnInit {

  saleInfo: any;
  saleValue: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSale();
  }

  getSale() {
    this.api.getTypeRequest(`sale/sale-value`).subscribe((res) => {
      console.log(res);
      this.saleInfo = res;
      console.log(this.saleInfo);
      // if (Array.isArray(res)) {
      //   this.saleValue = res[0];
      //   let products = this.saleValue.product;
      //   if (Array.isArray(products)) {
      //     let productIds: string = products.map((i: { productId: any; }) => i.productId).join(',');
      //     this.getProduct(productIds);
      //     console.log(productIds);
          
      //   }
      //   // console.log(this.saleValue);

      // }
    })
  }

  getProduct(productIds: string) {
console.log(productIds)
    this.api.getTypeRequest(`product/list/${productIds}`).subscribe((res) => {
      console.log(res);
      // this.productInfo = res;
    })
  }

  print() {
    window.print();
  }
}
