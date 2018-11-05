import { Component, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'ngrome-filter',
templateUrl: './filter.component.html',
styles: []
})
export class FilterComponent {

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _filter: string;
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    this.valueChange.emit(value);
  }
}
