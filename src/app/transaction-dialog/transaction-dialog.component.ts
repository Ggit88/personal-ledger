import {Transaction} from '../transaction/transaction';

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.css']
})
export class TransactionDialogComponent {

  private backupTransaction: Partial<Transaction> = { ...this.data.transaction };

  constructor(    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TransactionDialogData) { }

  cancel(): void {
    this.data.transaction.title = this.backupTransaction.title;
    this.data.transaction.amount = this.backupTransaction.amount;
    this.data.transaction.date = this.backupTransaction.date;
    this.dialogRef.close(this.data);
  }

}

export interface TransactionDialogData {
  transaction: Partial<Transaction>;
  enableDelete: boolean;
}

export interface TransactionDialogResult {
  transaction: Transaction;
  delete?: boolean;
}
