import { Component, Input, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import * as XLSX from 'xlsx';
import { ListesService } from './../../../services/listes.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css'],
  providers: [NgbModalConfig, NgbModal],

})

export class ListesComponent implements OnInit {

// GLOBAL VARIABLES
  titles = 'Listes Des Demandes';
  array: any[] = [];
  isDisabled = true;
  selectedId = 0;
  inedx: any;
  totalLength: any;
  page = 1;
  nextLabel = 'frensh';
  direction = false;
  itemsPage = 7;
  fileName = 'ExcelSheet.xlsx';
  selectedd: any;
  duration = '6000';
  // array:any;

  constructor(private service: ListesService , private toast: NgToastService) {

  }



  ngOnInit(): void {
    //develop branch

    this.array = this.service.data();
    this.totalLength = this.array.length;

    //listes
    // this.array = this.service.data();
    // this.totalLength = this.array.length;
  }
  id:any;
// GENARATE THE VALUE (ID) OF AN ITEM
   getArray(event: any) {
    this.selectedd = event;
    this.selectedId = event.id;
    this.inedx = this.array.indexOf(this.selectedd);
    return this.selectedd;
  }
// DISABLE BUTTONS
  disabled() {
    if (this.selectedId == 0 || this.inedx <= -1) {
      return this.isDisabled = true;
    } else {
      return this.isDisabled = false;
    }
  }

// DELETE AN ITEM
  deleteIt(event: any) {
    let messageId = 'ID '+this.selectedId;
    if (this.inedx > -1) {
      this.array = this.array.filter(function(v: any) {
        return v.id != event.id
      })
      this.totalLength = this.array.length;
      this.toast.success({detail:messageId ,summary:' est supprimé avec succées',duration:+this.duration});
      this.inedx = -1;
    }
  }

// EXPORT EXCEL
  exportexcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

  // GENERATE WORKBOOK AND ADD THE WORKSHEET
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //  SAVE TO FILE
    XLSX.writeFile(wb, this.fileName);

  }

// JUST FOR TEST
  submit(f: any) {
    console.log(f);
  }

  successVoir() {
    let msg = "You're In "+this.selectedId;
   this.toast.success({detail:msg,duration:+this.duration});
  }



// export class NgbdModalConfig {
//   constructor(config: NgbModalConfig, private modalService: NgbModal) {
//     config.backdrop = 'static';
//     config.keyboard = false;
//   }

//   open(content:any) {
//     this.modalService.open(content);
//   }
// }

}



