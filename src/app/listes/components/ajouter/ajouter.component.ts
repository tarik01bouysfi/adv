import { AjouterService } from './../../../services/ajouter.service';
import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { json, response } from 'express';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  mediaContactData:any[]=[];
  technologieData:any[]=[];
  raisonData:any[]=[];
  retenuData:any[]=[];
  MotifData:any[]=[];
  DetailHCData:any[]=[];


  public listeForm !: FormGroup;
  data:any={
    ID:'',
    Médiaontact:'',
    Technologie:'',
    IDCLIENT:'',
    Raisonducontact:'',
    Détailhorscible:'',
    Motifderésiliation:'',
    statutRetenu:'',
    Moyenderétentionourefus:'',
    Choixopérateur:'',
    DateetheuredelhistoRET:'',
    LOGAGENTRET:'',
    CommentaireRET1:'',
    Statutdelademande:'',
    Traitementtech:'',
    DattetheurdehistoTech:'',
    Logagenttech:'',
    CommentaireTECH:'',
    Statutdemandesuitetraitenettech:'',
    TypedecontactRET:'',
    TraitementSUIVIRET:'',
    DateetheuredelhistosuiviRET:'',
    LogagentSuiviRET:'',
    Statutfinaldemande:'',
    Commentaire:'',
    Horodatage:'',
    NDI:'',
    CodePostal:'',
  }
  constructor(private service :AjouterService, private http :HttpClient, private formBuilder :FormBuilder) { }

  ngOnInit(): void {
  this.mediaContactData = this.service.mediaContact();
  this.technologieData  = this.service.technologie()
  this.raisonData  = this.service.raison();
  this.retenuData  = this.service.retenu();
  this.MotifData   = this.service.motifDeRésiliation();
  this.DetailHCData= this.service.détailHorsCible();

  this.listeForm = this.formBuilder.group({
    mediaContact:[''],
    technologie:[''],
    idClient:[''],
    raison:[''],
    motif:[''],
    retenu:[''],
    detail:[''],
    Commentaire:[''],
    ndi:[''],
    codePostal:['']


  })

  }

  // mySubmit(x:any){
  //  console.log(x.value);
  // }
  posts=[];
  test(x:any){
    // console.log(x.value);
  }

  mySubmit(x:any){
    console.log(x.value);
  }

  createListes(){

    this.http.post<any>('http://localhost:3000/CreateListes',this.listeForm.value)
    .subscribe(res=>{
      this.listeForm.reset();
      // this.router.navigate(['listes']);
      alert('Done');
    })
    console.log(this.listeForm.value);
  }


  }





