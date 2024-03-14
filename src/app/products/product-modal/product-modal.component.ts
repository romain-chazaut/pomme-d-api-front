import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {
  @Input() product: any;
  @Output() close = new EventEmitter<void>();
  isVisible: boolean = true;

  openModal() {
    this.isVisible = true;
    console.log('Modal should be visible now');
  }

  closeModal() {
    this.close.emit();
    console.log('Modal should be hidden now');
  }
}
