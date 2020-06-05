import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { StoreComponent } from './store/store.component';
import { BitcoinBrComponent } from './bitcoinbr/bitcoinbr.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    BitcoinComponent,
    StoreComponent,
    BitcoinBrComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
