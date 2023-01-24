import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  formGroup!: FormGroup;
  saleValue: any;
  sumAmount: any;
  sum: any = 0;
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.formGroup = this.fb.group({
      date1: [''],
      date2: [''],
    });
  }

  ngOnInit(): void {

  }

  searchValue() {
    console.log(this.formGroup.value)
    this.api.getTypeRequest(`sale/date?start=${this.formGroup.value.date1}&end=${this.formGroup.value.date2}`).subscribe((res) => {
      console.log(res);
      this.saleValue = res;
      this.sum = this.saleValue.map((lot: { totalAmount: any; }) => lot.totalAmount).reduce((prev: any, curr: any) => prev + curr, 0);
    })
  }

  print() {
    window.print();
  }

}
