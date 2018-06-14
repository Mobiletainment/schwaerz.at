import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";


@Injectable()
export class ContactService {

  private baseUrl = 'assets/mail.php';

  constructor(private httpClient: HttpClient) {
  }

  sendMessage(contact: Contact): Observable<boolean> {

    // if everything went well, we'll receive the string "submitted" from the mail script
    // we therefore need to parse and evaluate the response
    return this.httpClient
      .post(this.baseUrl, contact, {responseType: 'text'})
      .pipe(
        map(responseText => responseText === 'submitted')
      );
  }

}
