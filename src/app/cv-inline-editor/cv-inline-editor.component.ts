import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cv-inline-editor',
  styleUrls: ['./cv-inline-editor.component.css'],
  template: `
  <div *ngIf='!isEditing; else editor' (click)="showEditor()">
    {{value}}
  </div>
  <ng-template #editor>
    <input #editor [(ngModel)]='value' (blur)='onSave()' />
  </ng-template>`
})
export class CvInlineEditorComponent implements OnInit {

  @Input()
  value: string | symbol = '';

  @Output()
  save = new EventEmitter();

  isEditing = false;

  onSave() {
    this.isEditing = false;
    this.save.emit(this.value);
    console.log('Saved');
  }

  showEditor() {
    this.isEditing = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
