import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { Document } from 'src/app/models/document.model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {

  document: Document = {} as Document;
  private _docSub: Subscription = {} as Subscription;

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this._docSub = this.documentService.currentDocument.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started' })
    ).subscribe(document => {
      console.log("this.document", document);
      this.document = document;
    });
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  // editDoc(doc: Document) {
  //   // this.documentService.editDocument(this.document);
  //   this.documentService.editDocument(doc);
  // }
  editDoc(e: string, docId: string) {
    console.log("e in editDoc", e);
    // this.documentService.editDocument(this.document);
    this.documentService.editDocument({id: docId, doc: e});
  }

}
