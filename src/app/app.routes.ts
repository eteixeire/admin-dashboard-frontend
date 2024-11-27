import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {SettingsComponent} from './settings/settings.component';

export const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'users', component:UsersComponent},
  {path:'notifications', component:NotificationsComponent},
  {path:'settings', component:SettingsComponent}
];

