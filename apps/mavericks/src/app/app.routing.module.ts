import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { PlayersComponent } from './players/players.component';
import { WildComponent } from './wild/wild.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/players' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
