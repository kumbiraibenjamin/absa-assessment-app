import { Component, OnInit } from '@angular/core';
import { Account } from '../../interfaces/account.interface';
import { WithdrawalService } from '../../services/withdrawal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-withdrawal-page',
  templateUrl: './withdrawal-page.component.html',
  styleUrls: ['./withdrawal-page.component.scss']
})
export class WithdrawalPageComponent implements OnInit {
  accounts: Observable<Account[]>;

  constructor(private withdrawalService: WithdrawalService) { }

  ngOnInit() {
    this.accounts = this.withdrawalService.getAccounts();
    this.accounts.subscribe();
  }

  canWithdraw(type: string, balanceValue: string) {
    const balance = parseInt(balanceValue, 10);
    let disabled: boolean;
    switch (type) {
      case 'savings': {
        if (balance <= 0 ) {
          disabled = true;
        } else {
          disabled = false;
        }
        break;
      }
      case 'cheque': {
        if (balance < -500 ) {
          disabled = true;
        } else {
          disabled = false;
        }
        break;
      }
    }

    return disabled;
  }

  getBalance(accounts: Account[]) {
    let result: string;
    let balance = 0;
    if (accounts) {
      accounts.forEach((account: Account) => {
        const amount = parseInt(account.balance, 10);
        balance = balance + amount;
      });
    }
    result = `R ${balance}`;
    return result;
  }

  onWithdrawClick() {
    alert('Success');
  }
}
