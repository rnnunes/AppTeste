import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title:'Navegação1', url: 'Navegação1', icon: 'code'},
    { title:'Navegação2', url: 'Navegação2', icon: 'code'},
    { title:'Navegação3', url: 'Navegação3', icon: 'code'},
    { title:'Navegação4', url: 'Navegação4', icon: 'code'},
    { title:'Navegação5', url: 'Navegação5', icon: 'code'},

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
