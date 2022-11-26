import { NgModule, Injector } from '@angular/core';
import { ContentComponent } from './content.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ContentComponent],
  exports: [ContentComponent],
})
export class ContentModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ContentComponent, {
      injector: this.injector,
    });
    customElements.define('main-microfrontend', el);
  }

  ngDoBootstrap() {}
}
