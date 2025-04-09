import { Component, Input, Output, EventEmitter } from '@angular/core';
import { httpservice } from '../../host/httpservice';


@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
})
export class TextBoxComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();
  constructor(private service: httpservice) { }
  onInputChange(event: any): void {
    //this.value = event.target.value;
    //this.valueChange.emit(this.value);
    //if (this.value.length > 4) {
    //  var response = this.service.Search("CommponetClass", this.value, "Search");
    //}
  }
}
