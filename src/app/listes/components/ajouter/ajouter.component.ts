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
  moyenDeRetention:any=[];
  MotifdeRefusData:any=[];

  //de raison du conttact'cases
  caseOne=[1,4,5,6];
  caseTwo=[2];

  // retenu'cases

  RcaseOne=[1,];
  RcaseTwo=[2,];

 

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
  this.moyenDeRetention = this.service.moyenDeRetention();
  this.MotifdeRefusData= this.service.MotifdeRefus()

  this.listeForm = this.formBuilder.group({
    media_Contact:'',
    technologie:'',
    idClient:'',
    raison_du_contact:'',
    detail_Hors_Cible:'',
    motif_de_resiliation:'',
    retenu:'',
    MotifdeRefus:'',
    moyenDeRetention:'',

    ndi:'',
    codePostal:'',
    Commentaire:'',
  })

  }



  // mytest(listeForm:any,retenu:any){

  //   if(!this.caseOne.includes(+listeForm.value.raison_du_contact)){
  //     retenu=0;
  //     console.log(retenu);
  //     return this.fl;

  //   }
  //   else{
  //     retenu=1;
  //     console.log(retenu);
  //     return this.tr;
  //   }
  // }
  myfunc(x:any){
    if(this.caseOne.includes(+x)){
    }else{
     x=0;
    }

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
     console.log('this is listesForm ',this.listeForm.value);
  }


  }





