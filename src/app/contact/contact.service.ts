import { Injectable } from '@angular/core';
import { Contact } from "./contact";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ContactService {

  private baseUrl = "contact.php";

  constructor(private http: Http) {
  }

  sendMessage(contact: Contact): Observable<string> {
    return this.http.post(this.baseUrl, contact)
      .map(response => response.json());
  }

}
