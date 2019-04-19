import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithdrawalPageComponent } from './components/withdrawal-page/withdrawal-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'withdrawal', pathMatch: 'full'},
  { path: 'withdrawal', component: WithdrawalPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
