import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListesService } from './../../../services/listes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  myId: any;
  array:any;
  index:any;

  constructor(private route : ActivatedRoute,private service : ListesService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  getArray(){
  return console.log(this.array);
}

  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.array = this.service.data();
    this.index = this.array.find((e: any) => e.id == id);
  }

}
