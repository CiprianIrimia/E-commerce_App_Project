import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewRef,
} from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.component.html',
  styleUrls: ['./track-orders.component.css'],
})
export class TrackOrdersComponent implements AfterViewInit {
  @ViewChild('viewerPdf') viewerRef!: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    WebViewer(
      {
        path: '/assets/lib',
        initialDoc: '/assets/images/pdf/pdfTest.pdf',
      },
      this.viewerRef.nativeElement
    ).then((instance) => {});
  }
}
