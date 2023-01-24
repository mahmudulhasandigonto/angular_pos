import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  username = localStorage.getItem("session");
  date:any = new Date();
  constructor(private route: Router) { }
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
    console.log(this.date);
  }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
