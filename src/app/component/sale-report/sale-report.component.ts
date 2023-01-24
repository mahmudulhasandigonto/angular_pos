import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.css']
})
export class SaleReportComponent implements OnInit {

  id: any = localStorage.getItem("id");
  saleInfo: any;
  productInfo: any;
  saleValue: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.getProduct('8');
    this.getSale();
  }

  getSale() {
    this.api.getTypeRequest(`sale/list/${this.id}`).subscribe((res: any) => {
      this.saleValue = res;
      if (Array.isArray(res)) {
        this.saleInfo = res[0];
        let products = this.saleInfo.product;
        if (Array.isArray(products)) {
          let productIds: string = products.map((i: { productId: any; }) => i.productId).join(',');
          this.getProduct(productIds);
        }
        console.log(this.saleValue);

      }
    })
  }

  print() {
    window.print();
  }

  getProduct(productIds: string) {

    this.api.getTypeRequest(`product/list/${productIds}`).subscribe((res) => {
       console.log(res);
      this.productInfo = res;
    })
  }


}
