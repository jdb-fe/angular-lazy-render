import { Component, ChangeDetectionStrategy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lazy-block',
  template: '<ng-template #tpl><ng-content></ng-content></ng-template>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyBlockComponent {
  isRender = false;
  @ViewChild('tpl') tplRef: TemplateRef<any>;
  @ViewChild('tpl', { read: ViewContainerRef }) tplVcRef: ViewContainerRef;
  render() {
    this.tplVcRef.createEmbeddedView(this.tplRef);
    this.isRender = true;
  }
}