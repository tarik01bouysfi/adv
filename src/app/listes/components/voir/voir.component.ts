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
  array:any=[];
  index:any;
  array2:any=[];
  arra:any;

  id:any;
  constructor(private route : ActivatedRoute , private service : ListesService ) { }

  async ngOnInit() {

    this.id = +this.route.snapshot.params['id'];

    this.array2 = await new Promise((resolve: any, reject: any) => {
      this.service.data2()
        .subscribe(res=>{
          resolve(res)
        }, (err) => {
          reject(err)
        });
    })

    this.index = this.array2.find((e: any) => e.id == this.id);
    // this.array = this.service.data();





  }
  test(){
    console.log(this.array2);
    console.log(this.id);
    console.log(this.index);
  }


  }




