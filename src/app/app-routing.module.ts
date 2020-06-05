import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinBrComponent } from './bitcoinbr/bitcoinbr.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'bitcoin', component: BitcoinComponent },
  { path: 'bitcoinbr', component: BitcoinBrComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
