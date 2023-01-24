import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {
  formGroup!: FormGroup;
  productInfo: any;
  supplierIds: any = [['', 'Select Product']];
  singleId: any;
  bellowProduct:any;
  allProduct:any;
  constructor(private fb: FormBuilder, private api: ApiService) {
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
    this.getBellowProduct();
    this.getAllProduct();
  }



  getProduct() {
    this.api.getTypeRequest(`product/list`).subscribe((res) => {
      console.log(res)
      this.productInfo = res;
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



}
