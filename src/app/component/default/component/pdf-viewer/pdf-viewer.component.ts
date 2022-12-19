import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pdfList: any[] = environment.templatepdf;
  pdfDocumentSrc: any = environment.templatepdf[0];
  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  showPdf(pdfFile: any, $event: any) {
    this.pdfList.forEach(pdf => pdf.selected = false);
    pdfFile.selected = true;
    this.pdfDocumentSrc = pdfFile;
    $event.preventDefault();
  }


}
