import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-supplier-section',
  templateUrl: './supplier-section.component.html',
  styleUrls: ['./supplier-section.component.css']
})
export class SupplierSectionComponent implements OnInit {
  formGroup!: FormGroup;
  supplierInfo: any;
  constructor(private fb: FormBuilder, private api: ApiService) {
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
  }


  getSupplier() {
    this.api.getTypeRequest(`supplier/list`).subscribe((res) => {
      console.log(res);
      this.supplierInfo = res;
    })
  }

}
