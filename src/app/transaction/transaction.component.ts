import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  @Input() transaction: Transaction;
  @Output() edit = new EventEmitter<Transaction>();

}
