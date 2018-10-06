import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Contact} from './contact';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //private _url: "http://localhost:3000/api/contacts";

  constructor(private http: HttpClient) { }

  //method to fetch all contacts from our api
  getAllContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>("http://localhost:3000/api/contacts");
  }

  //method to create a new contact
  addContact(newContact): Observable<Contact[]>{
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<Contact[]>('http://localhost:3000/api/contact', newContact, {headers:headers});
  }

  //method to delete any contact from the phonebook
  deleteContact(id) :Observable<Contact[]>{
    return this.http.delete<Contact[]>("http://localhost:3000/api/contact/"+id);
  }

}
