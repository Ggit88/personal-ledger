import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TransactionComponent } from './transaction/transaction.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TransactionDialogComponent } from './transaction-dialog/transaction-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

//import { LOCALE_ID } from '@angular/core';
//import { registerLocaleData } from '@angular/common';
//import localeIt from '@angular/common/locales/it';
//registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatNativeDateModule
  	//{ provide: LOCALE_ID, useValue: 'it-IT'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
