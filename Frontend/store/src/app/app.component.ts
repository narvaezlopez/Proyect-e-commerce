import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  constructor(private firestore: AngularFirestore) { }

  user: any;

  ngOnInit() {
    /* this.firestore.collection("users").doc("j5f6NojWyeAfeJN4RDWp").valueChanges().subscribe((data) => {
      this.user = <any>data;
      console.log(this.user);
    }); */
  }
}
