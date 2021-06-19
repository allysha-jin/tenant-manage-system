import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './file-confirm.component.html',
  styleUrls: ['./file-confirm.component.css']
})
export class FileConfirmComponent implements OnInit {

  public fName!: string;
  public fIndex: any;

  constructor(private modalRef: MatDialogRef<FileConfirmComponent>) { }

  ngOnInit() {
  }

  confirm() {
    this.modalRef.close(this.fIndex);
  }
  cancel() {
    this.modalRef.close();
  }

}