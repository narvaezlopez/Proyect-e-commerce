import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EUserService } from '../../../services/e-user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router:Router, private users:EUserService) { }

  ngOnInit(): void {
    this.users.getUser().subscribe((data)=>{
      //console.log(data);
    });
    this.users.postUser().subscribe((data)=>{
      console.log(data);
    });

    this.users.getByColumnId('4','idUser').subscribe((data)=>{
      console.log(data);
    });
  }

  logout(){
    this.router.navigate(['/']);
  }
}
