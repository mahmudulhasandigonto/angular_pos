import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sale-analysis',
  templateUrl: './sale-analysis.component.html',
  styleUrls: ['./sale-analysis.component.css']
})
export class SaleAnalysisComponent implements OnInit {
  formGroup!: FormGroup;

  productIds: any = [['', 'Select Product']];
  productInfo: any = [];
  productDetail: string[] = [];
  analysisValue: any;
  sum:any = 0;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.formGroup = this.fb.group({
      product_id: [''],
      date1: [''],
      date2: [''],
    });
  }

  ngOnInit(): void {
    this.getProductIds();
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

  searchValue() {
    console.log(this.formGroup.value);
    let id = this.productDetail[0];
    this.api.getTypeRequest(`sale/dateById?ids=${id}&start=${this.formGroup.value.date1}&end=${this.formGroup.value.date2}`).subscribe((res) => {
      console.log(res);
      this.analysisValue = res;
      this.sum = this.analysisValue.map((lot: { originalPrice: any; }) => lot.originalPrice).reduce((prev: any, curr: any) => prev + curr, 0);
      
    })
  }

  print() {
    window.print();
  }

  // valueSum(){
  //   let product: this.analysisValue.originalPrice.map((i: any[]) => {
  //     return { "productId": Number(i[0]), "soldQuantity": Number(i[4]), "soldPrice": Number(i[5]) };
  //   })
  // }
}
