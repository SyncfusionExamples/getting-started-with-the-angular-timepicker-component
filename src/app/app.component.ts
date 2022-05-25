import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public dateValue: Date = new Date("04/23/2022 02:00");
  public minValue: Date = new Date("04/23/2022 01:00");
  public maxValue: Date = new Date("04/23/2022 17:00");
}
