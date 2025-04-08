import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  onInputChange(event: any): void {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}
