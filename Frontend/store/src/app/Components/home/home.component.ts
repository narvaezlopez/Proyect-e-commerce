import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  user: any;

  ngOnInit() {
    this.firestore.collection("users").doc("j5f6NojWyeAfeJN4RDWp").valueChanges().subscribe((data) => {
      this.user = <any>data;
      console.log(this.user);
    });
  }

  
}
