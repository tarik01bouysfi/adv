import { ListesService } from './../../../services/listes.service';

import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-voir',
  templateUrl: './voir.component.html',
  styleUrls: ['./voir.component.css']
})

export class VoirComponent implements OnInit {
  myId: any;
  array:any;
  index:any;
  constructor(private route : ActivatedRoute , private service : ListesService ) { }

  ngOnInit() {


    let id = +this.route.snapshot.params['id'];
    this.array = this.service.data();
    this.index = this.array.find((e: any) => e.id == id);

    // this.route.paramMap.subscribe(myParmas => {
    //   //  console.log(myParmas.get('id'));
    //    console.log(myParmas.get('id'));
    //   //  this.myId = +myParmas.get('id');
    // })

  }

  }




