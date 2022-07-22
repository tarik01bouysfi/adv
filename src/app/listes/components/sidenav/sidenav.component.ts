import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isExpanded: boolean = false;
  logoSrc='../assets/Images/intelcia-1200px-logo.png';
  logoAlt='Intelcia Logo';
  @Input()title='Nav';
}
