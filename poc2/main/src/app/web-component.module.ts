import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Injector } from '@angular/core';

import { ContentModule } from './content/content.module';

@NgModule({
  imports: [BrowserModule, ContentModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebComponentModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {}
}
