import { NgModule } from '@angular/core';

import { LazyPageComponent } from './lazy-page.component';
import { LazyBlockComponent } from './lazy-block.component';

@NgModule({
  declarations: [LazyPageComponent, LazyBlockComponent],
  exports: [LazyPageComponent, LazyBlockComponent]
})
export class LazyRenderModule {
}