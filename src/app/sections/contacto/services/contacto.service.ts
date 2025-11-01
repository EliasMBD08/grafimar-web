import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MailBody } from '../interfaces/mail-body';
import { MailResponse } from '../interfaces/mail-response';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly _hhtp = inject(HttpClient);
  private readonly Mail_Url = 'https://email.server.devmb.top/api/v1/email/';

  constructor(private httpClient: HttpClient, private router: Router) {}

  sendMail(body: MailBody): Observable<MailResponse> {
    return this._hhtp.post<MailResponse>(this.Mail_Url, body);
  }
}
