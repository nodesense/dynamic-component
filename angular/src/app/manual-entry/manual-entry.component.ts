import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit {

  @ViewChild("entryForm")
  entryForm: NgForm;

  address: any;
  

  constructor(public dialogRef: MatDialogRef<ManualEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

      console.warn("DATA ", data)
      // cloning data
      this.address = {...data.address};

      //this.address = data.address;

    }

  ngOnInit() {
  }


  save() {

    if (this.entryForm.invalid) {
      alert("Invalid data , fix it");
      return;
    }
    
    if (this.entryForm.pristine) {
      alert("Please change the input before closing ");
      return;
    }
    
    console.warn("Save button ", this.address);
    this.dialogRef.close(this.address);
  }
}
