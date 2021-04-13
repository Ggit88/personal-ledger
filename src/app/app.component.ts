import { Component } from '@angular/core';

import { Transaction } from './transaction/transaction';
import { MatDialog } from '@angular/material/dialog';

import { TransactionDialogComponent, TransactionDialogResult } from './transaction-dialog/transaction-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-ledger';

  ledger: Transaction[] = [
    {
      title: 'First Transaction',
      amount: -32.50,
      date: new Date(2020,11,31)
    },
    {
      title: 'Second Transaction',
      amount: -10.00,
      date: new Date(2020,11,30)
    },
    {
      title: 'third Transaction',
      amount: 13.80,
      date: new Date(2020,11,28)
    }
  ];

  constructor(private dialog: MatDialog) {}

  newTransaction(): void {
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '270px',
      data: {
        transaction: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TransactionDialogResult) => {
        console.log(result.transaction)
        if(this.validateTransaction(result.transaction)){
          console.log('inserimento transazione')
          this.ledger.push(result.transaction)
        }
      });
  }

  validateTransaction(transaction: Transaction): boolean {
    if(transaction.title && transaction.amount && transaction.date) {
      console.log('transazione valida');
      return true;
    } else {
      console.log('transazione non valida');
      return false;
    }
  }

  editTransaction(list: 'ledger', transaction: Transaction): void {
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '270px',
      data: {
        transaction,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TransactionDialogResult) => {
      const dataList = this[list];
      const transactionIndex = dataList.indexOf(transaction);
      if (result.delete) {
        dataList.splice(transactionIndex, 1);
      } else {
        dataList[transactionIndex] = transaction;
      }
    });
  }

}


