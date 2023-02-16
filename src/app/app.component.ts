import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-100days-news';
  name = 'angular' + VERSION.major;
  user = {
    name: 'tuấn',
    age: 25,
  };
}
