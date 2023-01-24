import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';

import { NgToastService } from 'ng-angular-popup';

export class Food {
  productId: string = '';
  productName: string = '';
  manufactureDate: any = '';
  expireDate: any = '';
  originalPrice: number = 0;
  quantity: number = 0;
  qtyLeft: number = 0;
  suppliers!: object;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formGroup!: FormGroup;
  productInfo: any;
  supplierIds: any = [['', 'Select Product']];
  singleId:any;
  bellowProduct:any;
  allProduct:any;
  constructor(private fb: FormBuilder, private api: ApiService, private toast:NgToastService) {
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
    this.getProduct();
    this.getSupplierIds();
    this.getAllProduct();
    this.getBellowProduct();
  }

  addProduct() {
    console.log(this.formGroup.value);
    const formVal = this.formGroup.value;
    let foods: Food = {
      productId: formVal.foodCode,
      productName: formVal.foodName,
      manufactureDate: formVal.date1,
      expireDate: formVal.date2,
      originalPrice: formVal.price,
      quantity: formVal.qty,
      qtyLeft: formVal.qty,
      suppliers: {"id": this.singleId}
    }
    console.log(foods)
    this.api.postTypeRequest(`product/save/`, foods).subscribe((res) => {
      this.toast.success({detail:"Product Information Message", summary:"Product added Successfully!!"});
      console.log(res)
      this.getProduct();
      this.getAllProduct();
    })
  }

  getProduct() {
    this.api.getTypeRequest(`product/list`).subscribe((res) => {
      console.log(res)
      this.productInfo = res;
    })
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

  getBellowProduct(){
    this.api.getTypeRequest(`product/countBellow`).subscribe((res)=>{
      this.bellowProduct = res;
      
    })
  }

  getAllProduct(){
    this.api.getTypeRequest(`product/countAll`).subscribe((res)=>{
      this.allProduct =res;
    })
  }

  deleteProduct(id:any){
    console.log(id)
    this.api.deleteTypeRequest(`product/delete/${id}`).subscribe((res)=>{
      console.log(res);
      this.toast.success({detail:"Product Deleted Message", summary:"Product has been Deleted Successfully!!"});
      this.getProduct();
      this.getAllProduct();
    })
  }

}
