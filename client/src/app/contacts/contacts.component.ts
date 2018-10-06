import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  public contacts = [];
  cnts: Contact[];
  contact: Contact;
  firstname: string;
  lastname: string;
  phone: string; 

  constructor(private contactService: ContactService  ) { }

  addContact(form){
    if(this.validateForm(form)){
      const newContact = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone
      }
      this.contactService.addContact(newContact)
        .subscribe(contact => {
          this.contacts.push(newContact);
        });
        this.onSubmit(form);
    }    
  }


  deleteContact(id:any){
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data =>{
        
          for(var i=0; i<contacts.length; i++){
            if(contacts[i]._id == id){
              contacts.splice(i,1);
            }
          }
        
      });
  }

  ngOnInit() {
    this.contactService.getAllContacts()
      .subscribe(data => this.contacts = data);
  }

  validateForm(form){
    if(this.firstname == undefined || this.firstname == ""){
      alert("Please enter first name !")
      return false;
    }
    if(this.lastname == undefined || this.lastname == ""){
      alert("Please enter last name !")
      return false;
    }
    if(this.phone == undefined || this.phone == ""){
      alert("Please enter Phone Number !")
      return false;
    }      
    else
      return true;
  }

  onSubmit(form){
    //console.log(this.);
    form.resetForm();
  }
}
