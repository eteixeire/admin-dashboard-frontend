import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items = [
    {name:'Dashboard', icon:'dashboard-icon',route:'dashboard'},
    {name:'Notifications', icon:'mark_email_unread',route:'notifications'},
    {name:'Users', icon:'person',route:'users'},
    {name:'Settings', icon:'settings',route:'settings'}
  ]
}
