import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListesService } from 'src/app/services/listes.service';

@Component({
  selector: 'app-traiter',
  templateUrl: './traiter.component.html',
  styleUrls: ['./traiter.component.css']
})
export class TraiterComponent implements OnInit {

  myId: any;
  array:any;
  index:any;
  constructor(private route : ActivatedRoute , private service : ListesService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.array = this.service.data();
    this.index = this.array.find((e: any) => e.id == id);
  }

}
