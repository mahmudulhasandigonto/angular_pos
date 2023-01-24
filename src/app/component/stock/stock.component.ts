import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';
import { NgToastService } from 'ng-angular-popup';

export class Stock {
  rawMaterialCode: string = '';
  rawMaterialName: string = '';
  materialReceiveDate: any = '';
  expiryDate: any = '';
  materialPrice: number = 0;
  quantity: number = 0;
  suppliers!: object;
}
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  formGroup!: FormGroup;
  stockInfo: any;
  supplierIds: any = [['', 'Select Product']];
  singleId: any;
  allStock: any;
  bellowStock: any;
  constructor(private fb: FormBuilder, private api: ApiService, private toast: NgToastService) {
    this.formGroup = this.fb.group({
      foodCode: [''],
      foodName: [''],
      date1: new Date(),
      date2: new Date(),
      price: [''],
      supplier_id: [''],
      qty: [''],
    })
  }

  ngOnInit(): void {
    this.getSupplierIds();
    this.getStock();
    this.getAllStock();
    this.getBellowStock();
  }

  onChangeServer($event: any, id: any) {
    console.log(id)
    this.singleId = id;
    console.log(this.supplierIds);
  }

  getSupplierIds() {
    this.api.getTypeRequest('supplier/id-list').subscribe((res: any) => {
      this.supplierIds = res;
      console.log(res);
    })
  }

  addStock() {
    console.log(this.formGroup.value);
    const formVal = this.formGroup.value;
    let stocks: Stock = {
      rawMaterialCode: formVal.foodCode,
      rawMaterialName: formVal.foodName,
      materialReceiveDate: formVal.date1,
      expiryDate: formVal.date2,
      materialPrice: formVal.price,
      quantity: formVal.qty,
      suppliers: { "id": this.singleId }
    }
    console.log(stocks)
    this.api.postTypeRequest(`stock/save/`, stocks).subscribe((res) => {
      this.toast.success({ detail: "Stock Information Message", summary: "Stock added Successfully!!" })
      console.log(res)
      location.reload();
      this.getStock();
    })

  }

  getStock() {
    this.api.getTypeRequest(`stock/list`).subscribe((res) => {
      console.log(res)
      this.stockInfo = res;
    })
  }

  getAllStock() {
    this.api.getTypeRequest(`stock/countAll`).subscribe((res) => {
      this.allStock = res;
    })
  }

  getBellowStock() {
    this.api.getTypeRequest(`stock/countBellow`).subscribe((res) => {
      this.bellowStock = res;
    })
  }
}
