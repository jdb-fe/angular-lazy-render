import { Component, OnChanges, SimpleChange, Input, AfterContentInit, ChangeDetectionStrategy, ContentChildren, QueryList } from '@angular/core';

import { LazyBlockComponent } from './lazy-block.component';

@Component({
  selector: 'lazy-page',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyPageComponent implements OnChanges, AfterContentInit {
  @Input() index = 0;
  @ContentChildren(LazyBlockComponent, { descendants: true }) blocks: QueryList<LazyBlockComponent>;
  constructor() { }
  ngOnChanges(changes: { index: SimpleChange }) {
    if (changes.index && changes.index.currentValue) {
      this.index = +changes.index.currentValue;
    }
  }
  ngAfterContentInit() {
    this.render(true);
  }
  render(init: boolean = false) {
    let block = this.blocks.find((item, index) => init ? index === this.index : !item.isRender);
    if (init && !block) {
      block = this.blocks[0];
      this.index = 0;
    }
    if (block) {
      block.render();
      requestAnimationFrame(() => this.render());
    }
  }
}