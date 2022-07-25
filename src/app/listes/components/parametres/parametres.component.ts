import { Component, OnInit } from '@angular/core';
import { ListesService } from 'src/app/services/listes.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {
  myvar:any;
  array2:any;
  constructor(private service: ListesService) { }

  ngOnInit(): void {
     this.service.data2()
    .subscribe(res=>this.array2 =res);
  }
  test(){
    console.log(this.array2);
  }
   title = 'parametres';
}
