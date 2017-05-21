import { Injectable } from '@angular/core';
import { Contact } from "./contact";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class ContactService {

  private baseUrl = "mail.php";

  constructor(private http: Http) {
  }

  sendMessage(contact: Contact): Observable<boolean> {
    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers });

    // if everything went well, we'll receive the string "submitted" from the mail script
    // we therefore need to parse and evaluate the response
    return this.http.post(this.baseUrl, contact, options)
      .map(response => response.text())
      .map(responseText => responseText === "submitted");
  }

}
