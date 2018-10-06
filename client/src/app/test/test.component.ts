import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ContactService]
})
export class TestComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  firstname: string;
  lastname: string;
  phone: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

}
