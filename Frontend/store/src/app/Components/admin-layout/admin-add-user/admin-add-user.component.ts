import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.scss']
})
export class AdminAddUserComponent implements OnInit {

  section:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
