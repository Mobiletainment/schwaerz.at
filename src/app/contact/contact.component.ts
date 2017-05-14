import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Contact } from "./contact";
import { ContactService } from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact = new Contact();

  submitted: boolean = false;
  result: string | boolean = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
  }

  ngOnInit() {

    this.contactForm = this.fb.group({
      name: "",
      email: ["", Validators.email],
      message: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  send() {
    this.submitted = true;

    if (!this.contactForm.valid)
      return;

    this.contactService.sendMessage(this.contact).subscribe(result => {
      this.result = true;
    }, error => {
      this.result = error;
    });
  }

}
