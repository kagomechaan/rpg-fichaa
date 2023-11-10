import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() headerTitle: string = '';

  @Input() width?: string = '';

  @Input() headerSubtitle: string = '';

  @Input() isVisible: boolean = true;

  @Output() closeModal = new EventEmitter();


}
