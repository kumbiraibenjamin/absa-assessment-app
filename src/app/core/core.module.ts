import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { CoreRoutingModule } from './core-routing.module';
import { WithdrawalPageComponent } from './components/withdrawal-page/withdrawal-page.component';

@NgModule({
  declarations: [WithdrawalPageComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
