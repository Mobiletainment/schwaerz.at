import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { Contact } from "./contact";
import { ContactService } from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  preserveWhitespaces: false
})
export class ContactComponent {

  contactForm: FormGroup = this.fb.group({
    name: "",
    email: ["", [Validators.email, Validators.required]],
    message: ["", [Validators.required, Validators.minLength(3)]],
  });

  form: NgForm;
  contact: Contact = new Contact();

  submitted: boolean = false;
  result: null | boolean = null;


  constructor(private fb: FormBuilder, private contactService: ContactService) {
  }


  send(form: NgForm) {
    this.submitted = true;

    if (!this.contactForm.valid)
      return;

    this.contact = {...this.contactForm.value}; // apply form model to contact model

    this.contactService.sendMessage(this.contact).subscribe(result => {
      this.result = result;
    }, error => {
      this.result = error;
    });
  }

}
