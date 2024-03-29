import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContentModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {}
}
