import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class WithdrawalService {
  url = 'http://localhost:8080/api/accounts';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url);
  }
  
}
