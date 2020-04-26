import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { FieldPipe } from './pipes/field.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule, TableModule} from 'primeng';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommonTableComponent,
    FieldPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
  ],
  providers: [
    FieldPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
