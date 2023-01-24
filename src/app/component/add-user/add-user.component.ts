import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/auth.service';
import { NgToastService } from 'ng-angular-popup';

export class User {
  username: string = '';
  name: string = '';
  password: string = '';
  email: string = '';
  status: boolean = false;
  phone: string = '';
  role: string = '';
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  formGroup!: FormGroup;
  userList: any;
  allUser:any;
  statusVal: any = false;
  constructor(private fb: FormBuilder, private api: ApiService, private toast: NgToastService) {
    this.formGroup = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      role: [''],
    })
  }

  ngOnInit(): void {
    this.getUserList();
    this.getAllUser();
  }





  checkValue(event: any, id: any) {

    if (event.target.checked) {
      this.statusVal = true
    } else {
      this.statusVal = false
    }

    this.api.putTypeRequest(`user/status-update/${id}/${this.statusVal}`, "").subscribe((res) => {
      if (event.target.checked != true) {
        this.toast.error({ detail: "Access Denied Message", summary: "User Access Denined Successfully!!" })
      } else {
        this.toast.success({ detail: "Access Provide Message", summary: "User Access Provide Successfully!!" })
      }

    })
  }

  createUser() {
    const formVal = this.formGroup.value;
    let user: User = {
      username: formVal.username,
      name: formVal.name,
      email: formVal.email,
      phone: formVal.phone,
      role: formVal.role,
      password: '123456',
      status: false
    }
    console.log(user);
    this.api.postTypeRequest(`user/save/`, user).subscribe((res) => {
      this.toast.success({ detail: "User Create Message", summary: "Users Information added Successfully!!" })
      console.log(res)
      this.getUserList();
    })
  }

  getUserList() {
    this.api.getTypeRequest('user/list').subscribe((res: any) => {
      console.log(res);
      this.userList = res;
      console.log(this.userList);


    })
  }

  getAllUser() {
    this.api.getTypeRequest(`user/countAll`).subscribe((res) => {
      this.allUser = res;
    })
  }

}
