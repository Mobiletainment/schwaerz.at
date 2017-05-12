import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Contact } from "./contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact = new Contact();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.contactForm = this.fb.group({
      name: "",
      email: ["", Validators.email],
      subject: ["", [Validators.required, Validators.minLength(3)]],
      body: ""
    });
  }

  send() {
    console.log(this.contactForm);
  }

}
