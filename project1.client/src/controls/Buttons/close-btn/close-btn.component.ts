import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { httpservice } from '../../../host/httpservice';


@Component({
  selector: 'app-close',
  templateUrl: './close-btn.component.html',
})
export class CloseBtnComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();
  constructor(private service: httpservice, private router: Router) { }
  navigate() {
    this.router.navigate(['/app']);
  }
}
