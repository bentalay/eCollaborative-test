import 'intl';
import 'intl/locale-data/jsonp/en';

import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppComponent {
  title = 'eCollaborative-test';
}
