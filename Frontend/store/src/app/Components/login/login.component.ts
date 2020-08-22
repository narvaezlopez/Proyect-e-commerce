import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public option = false;
  public login;

  constructor() { }

  ngOnInit(): void {
  }
  togleOption(){
    this.option = !this.option;
  }
}
