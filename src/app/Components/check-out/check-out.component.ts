import { Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent {
  @ViewChild('content', { static: false }) el!: ElementRef;

  makePdf() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('document.pdf');
      },
    });
  }
}
