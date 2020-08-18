import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-general',
  templateUrl: './admin-general.component.html',
  styleUrls: ['./admin-general.component.scss']
})
export class AdminGeneralComponent implements OnInit {

  section:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
