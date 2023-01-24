import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';
import { NgToastService } from 'ng-angular-popup';

export class Supplier {
  supplierId: string = '';
  supplierName: string = '';
  address: string = '';
  phone: string = '';
  productDetails: string = '';

}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  formGroup!: FormGroup;
  supplierInfo: any;
  allSupplier: any;
  constructor(private fb: FormBuilder, private api: ApiService,) {
    this.formGroup = this.fb.group({
      supplierCode: [''],
      supplierName: [''],
      address: [''],
      phone: [''],
      product: [''],
    })
  }

  ngOnInit(): void {
    this.getSupplier();
    this.getAllSupplier();
  }

  addSupplier() {
    console.log(this.formGroup.value);
    const formVal = this.formGroup.value;
    let suppliers: Supplier = {
      supplierId: formVal.supplierCode,
      supplierName: formVal.supplierName,
      address: formVal.address,
      phone: formVal.phone,
      productDetails: formVal.product
    }
    console.log(suppliers)
    this.api.postTypeRequest(`supplier/save/`, suppliers).subscribe((res) => {
      // this.toast.success({ detail: "Supplier Information Message", summary: "Supplier added Successfully!!" })
      console.log(res)
      this.getSupplier();
      this.getAllSupplier();
    })
  }

  getSupplier() {
    this.api.getTypeRequest(`supplier/list`).subscribe((res) => {
      console.log(res);
      this.supplierInfo = res;
    })
  }

  getAllSupplier() {
    this.api.getTypeRequest(`supplier/countAll`).subscribe((res) => {
      this.allSupplier = res;
    })
  }

  deleteSupplier(id:any){
    console.log(id)
    this.api.deleteTypeRequest(`supplier/delete/${id}`).subscribe((res)=>{
      console.log(res);
      // this.toast.success({detail:"supplier delete massage", summary:"supplier has been Deleted"});
      this.getSupplier();
      this.getAllSupplier();
    })
  }

updateSupplier(){
  console.log();
  this.api.patchTypeRequest(`supplier/update`, Supplier).subscribe((res)=>{
    console.log(res);
    this.getSupplier;
    this.getAllSupplier;
  })
}

}
