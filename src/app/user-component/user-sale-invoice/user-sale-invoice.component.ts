import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-sale-invoice',
  templateUrl: './user-sale-invoice.component.html',
  styleUrls: ['./user-sale-invoice.component.css']
})
export class UserSaleInvoiceComponent implements OnInit {
  saleInfo: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSale();
  }

  getSale() {
    this.api.getTypeRequest(`sale/sale-DateValue`).subscribe((res) => {
      console.log(res);
      this.saleInfo = res;
    })
  }

  print() {
    window.print();
  }

}
