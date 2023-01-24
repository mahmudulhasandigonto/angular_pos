import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private http: HttpClient, private route: Router) {
    this.formGroup = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.formGroup.value);
    debugger
    this.http.get<any>("http://localhost:8089/user/list").subscribe((res) =>{
      console.log(res);

      const user = res.find((a:any) =>{
        return a.username === this.formGroup.value.username && a.password === this.formGroup.value.password && a.status==true
      });
      if(user){
        console.log(user.role);


          alert("Login successfull");
          localStorage.setItem('session', user.username)
          if(user.role==='admin'){

            this.formGroup.reset();
          this.route.navigate(['/admin']);
          }else{
            this.formGroup.reset();
          this.route.navigate(['/user']);
          }


        // this.route.navigateByUrl('/admin')
      }else{
        alert("username or password is wrong!");
      }
    })
  }



}
