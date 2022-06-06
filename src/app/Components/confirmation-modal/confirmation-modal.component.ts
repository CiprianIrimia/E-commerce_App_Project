import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ content }}
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-primary"
        (click)="activeModal.close()"
      >
        {{ secondaryButtonText }}
      </button>
      <button type="button" class="btn btn-danger" (click)="log()">
        {{ primaryButtonText }}
      </button>
    </div>
  `,
})
export class ModalContent {
  @Input() title: string | undefined;
  @Input() content: string | undefined;
  @Input() primaryButtonText: string | undefined;
  @Input() secondaryButtonText: string | undefined;
  clickEvent: any;

  constructor(public activeModal: NgbActiveModal) {}

  log() {
    this.clickEvent.emit();
    this.activeModal.close();
  }
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
})
export class ConfirmationModalComponent {
  @Output() clickEvent = new EventEmitter();
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalContent);
    modalRef.componentInstance.title = 'Delete';
    modalRef.componentInstance.content =
      'Are you sure that you want to delete this product?';
    modalRef.componentInstance.primaryButtonText = 'Yes';
    modalRef.componentInstance.secondaryButtonText = 'No';
    modalRef.componentInstance.clickEvent.subscribe(() =>
      this.clickEvent.emit()
    );
  }
}
