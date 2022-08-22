import { Component } from '@angular/core';

@Component({
  selector: 'mavericks-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mavericks';
  links = [{ path: '/players', icon: 'view_list', title: 'Players' }];
}
