import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TimePickerModule, MaskedDateTimeService} from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimePickerModule
  ],
  providers: [MaskedDateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
