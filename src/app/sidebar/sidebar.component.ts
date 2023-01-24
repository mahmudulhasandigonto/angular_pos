import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  username = localStorage.getItem("session");
  date: any = new Date();
  constructor(private route: Router) { }
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
