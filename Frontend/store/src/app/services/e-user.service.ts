import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EUserService {

  public url:string='http://localhost:3000/'; 
  
  constructor(private http:HttpClient) { }


  getUser(){
    return this.http.get(this.url+'e_user');
  }
  postUser(){
    return this.http.post(this.url+'e_user',{
      "first_name":"Daniel",
      "second_name":"Alejandro",
      "first_lastname":"Sanchez",
      "second_lastname":"Bermudez",
      "email":"danielalej.sanchez@correo.usa.edu.co",
      "user_password":"12345",
      "phone":"3058501026",
      "address":"CRA 78 F #38-15",
      "user_date":"1997-08-24",
      "postalCode":"110011",
      "url_photo":"https://assets.metrolatam.com/co/2015/05/27/captura-de-pantalla-2015-05-26-a-las-17-30-43-1600x800.jpg"
    });
  }

  getByColumnId(id:string,column:string){
    return this.http.post(this.url+'user_rol/'+id,{
      "column_id":column
    });
  }
}
