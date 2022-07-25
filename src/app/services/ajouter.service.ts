import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjouterService {

  mediaContact() {
    return [
      {
        "id": 1,
        "name": "APPEL SC RED"
      }, {
        "id": 2,
        "name": "APPEL SITE WEB "
      },{
        "id": 3,
        "name": "APPEL ANC "
      }, {
        "id": 4,
        "name": "CTC file DMGT"
      }, {
        "id": 5,
        "name": "CTC RET depuis l'appli RED & Moi"
      }, {
        "id": 6,
        "name": "SAISIE DEM"
      }, {
        "id": 7,
        "name": "CTC CHANGE TECHNO "
      }, {
        "id": 8,
        "name": "TRANSFERT_N1_TEC_RED"
      },{
        "id": 9,
        "name": "BEB RET RED FASTR"
      },{
        "id": 10,
        "name": "Transfert TECH N1 vers Saisie"
      }, {
        "id": 11,
        "name": "RÉTENTION_MOBILE"
      }
    ]
  }
  technologie(){
    return [
      {"id":1,
      "name":'ADSL'
      },{"id":2,
      "name":'FTTB'
      },{"id":3,
      "name":'FTTH'
      },{"id":4,
      "name":'Mobile'
      }
    ]
  }
  raison(){

    return [
      {"id":1,
      "name":"Réalisation"},
      {"id":2,
      "name":"Hors Cible"},
      {"id":3,
      "name":"Répondeur"},
      {"id":4,
      "name":"Hausse Tarrifaire"},
      {"id":5,
      "name":"Déménagement"},
      {"id":6,
      "name":"Changement de techno"},
    ]
  }

  retenu(){
    return [
      {
        "id":1,
        "name":"Non",
      },{
        "id":2,
        "name":"Oui",
      },{
        "id":3,
        "name":"Dém OK : Nouvelle formule",
      },{
        "id":4,
        "name":"Dém NOK : Nouvelle gamme (OK ancienne gamme)",
      }
    ]
  }

  motifDeRésiliation(){
    return [
      {
        "id":1,
        "name":"Déménagement",
      },{
        "id":2,
        "name":"Décès Client",
      },      {
        "id":3,
        "name":"Départ à l'étranger",
      },{
        "id":4,
        "name":"Problème technique",
      },{
        "id":5,
        "name":"Offre / Options non attractives",
      },{
        "id":6,
        "name":"Insatisfaction du Service Client / TLV",
      },{
        "id":7,
        "name":"Problèmes administratifs (facturation à tort)",
      },{
        "id":8,
        "name":"Insatisfaction liée à l’installation",
      },{
        "id":9,
        "name":"Problèmes financiers ( Chômage, hospitalisation, ...",
      },{
        "id":10,
        "name":"Etudiants : DEM France",
      },{
        "id":11,
        "name":"VENTE PRIVÉE FREE",
      },{
        "id":12,
        "name":"MOBILE : Problème Réseau",
      },{
        "id":13,
        "name":"MOBILE : Litige commercial/Facturation",
      },{
        "id":14,
        "name":"MOBILE : Réclamation Roaming",
      },{
        "id":15,
        "name":"MOBILE : Perte ou vol du mobile",
      },{
        "id":16,
        "name":"MOBILE : Zone n’est pas couvert par la 5G",
      },{
        "id":17,
        "name":"MOBILE : Tarifaire offre",
      },{
        "id":18,
        "name":"MOBILE : Contenu Offre",
      },{
        "id":19,
        "name":"CHANGEMENT TECHNOLOGIE",
      },{
        "id":20,
        "name":"Mobile : Harcèlement",
      },{
        "id":21,
        "name":"MOBILE : RED DEAL",
      },{
        "id":22,
        "name":"MOBILE : PASSAGE CHEZ SFR",
      },{
        "id":23,
        "name":"MOBILE : BIG RED",
      },{
        "id":24,
        "name":"MOBILE : Demande code RIO",
      },{
        "id":25,
        "name":"MOBILE PLUS D'UTULITE DE LIGNE MOBILE",
      },{
        "id":26,
        "name":"Contest. tarif - PRIXTEL",
      },
    ]
  }

  détailHorsCible(){
    return [
      {
        "id":1,
        "name":"Demande rétractation"
      },      {
        "id":2,
        "name":"Demande étiquette de retour"
      },      {
        "id":3,
        "name":"Demande confirmation résiliation déjà effectuée"
      },      {
        "id":4,
        "name":"Demande liée à la facture de clôture"
      },      {
        "id":5,
        "name":"Demande d'ajout ou résiliation de l’option TV /Appels vers mobile"
      },      {
        "id":6,
        "name":"Demandes de suivi de commande ou changement de RDV de raccordement"
      },      {
        "id":7,
        "name":"Questions liées aux demandes de déménagement ou de changement de technologie"
      },      {
        "id":8,
        "name":"Demande d'explication de facture"
      },      {
        "id":9,
        "name":"Demande d'Info  résiliation RMC SPORT"
      },      {
        "id":10,
        "name":"Suivi d'activation"
      },      {
        "id":11,
        "name":"RDV STIT non honoré"
      },      {
        "id":12,
        "name":"Modification date de RDV"
      },      {
        "id":13,
        "name":"DEM plus de 5 semaines"
      },      {
        "id":14,
        "name":"Demande résiliation ligne FIXE"
      },      {
        "id":15,
        "name":"Demande de remboursement ODR"
      },      {
        "id":16,
        "name":"Cession de ligne "
      },      {
        "id":17,
        "name":"Modification de données administratives"
      },      {
        "id":18,
        "name":"Client parlant autre langue"
      },      {
        "id":19,
        "name":"Réclamation facturation des pénalités de non restitution matériels "
      },      {
        "id":20,
        "name":"EXPLICATION DE LA SUPPRESSION SFR PRESSE"
      },      {
        "id":21,
        "name":"Demande d'info ligne mobile / client SFR"
      },      {
        "id":22,
        "name":"DEMANDE CHANGE BOX8"
      },      {
        "id":23,
        "name":"DEMANDE AJOUT CONNECT TV"
      },      {
        "id":24,
        "name":"MOBILE : Suivi Commande carte SIM"
      },      {
        "id":25,
        "name":"MOBILE : Changement d'adresse de livraison carte SIM"
      },      {
        "id":26,
        "name":"Dysfonctionnement TECH SAISIE DEM"
      },      {
        "id":27,
        "name":"Porta Entrante"
      },
    ]
  }

  moyenDeRetention(){
    return [
      {
        "id":1,
        "name":"Explication de la Hausse tarifaire sans acte de gestion",
      },      {
        "id":2,
        "name":"Transfert Escalada CLNS",
      },      {
        "id":3,
        "name":"Création dossier Maxwel ITS",
      },      {
        "id":4,
        "name":"FTM",
      },      {
        "id":5,
        "name":"Escalade BOD xDSL",
      },      {
        "id":6,
        "name":"Escalade ANC FTTB",
      },      {
        "id":7,
        "name":"Dmgt Accompagné",
      },      {
        "id":8,
        "name":"DEM Sans couture  ",
      },      {
        "id":9,
        "name":"DEM R/R",
      },      {
        "id":10,
        "name":"Option débit plus offerte",
      },      {
        "id":11,
        "name":"TRANSFERT N1 TECH RED FIXE",
      },      {
        "id":12,
        "name":"CHANGE TECHNO",
      },      {
        "id":13,
        "name":"CHANGE CONFORT",
      },      {
        "id":14,
        "name":"Migration/application baisse tarifaire",
      },      {
        "id":15,
        "name":"OPT OUT",
      },{
        "id":16,
        "name":"Bouquet offert",
      },      {
        "id":17,
        "name":"MIGRATION TARIFAIRE",
      },      {
        "id":18,
        "name":"Mobile : Ajout offre Fixe",
      },      {
        "id":19,
        "name":"MOBILE : Changement de numéro",
      },      {
        "id":20,
        "name":"MOBILE : Ajout Option 5G",
      },      {
        "id":21,
        "name":"MOBILE : Annulation Porta"
      },      {
        "id":22,
        "name":"MOBILE : Migration de forfait",
      },      {
        "id":23,
        "name":"MOBILE : Suspension/Limitation",
      },      {
        "id":24,
        "name":"MOBILE : Renvoi SIM",
      },      {
        "id":25,
        "name":"BLOCAGE ACHAT MULTIMEDIA",
      },      {
        "id":26,
        "name":"MOBILE : Blocage des achats multimédia",
      },      {
        "id":27,
        "name":"MOBILE : remise sur la box",
      },      {
        "id":28,
        "name":"MOBILE : Ajout ligne mobile",
      },      {
        "id":29,
        "name":"RM RENOUVELLEMENT MOBILE",
      },      {
        "id":30,
        "name":"MOBILE : rediriger le client vers le service tech chat",
      },
    ]
  }
  MotifdeRefus(){
   return [
    {
      "id":1,
      "name":"Validation résil légitime: départ à l'étranger",
    },    {
      "id":2,
      "name":"Validation résil mot légitime: chômage/licenc",
    },    {
      "id":3,
      "name":"Souhaite passer à la concurrence:offre moins chère",
    },    {
      "id":4,
      "name":"Souhaite passer à la concurrence : plus de débit",
    },    {
      "id":5,
      "name":"Souhaite passer à la concurrence:bouquets TV +riches",
    },    {
      "id":6,
      "name":"Souhaite passer à la concurrence: regroupement foyer",
    },    {
      "id":7,
      "name":"Souhaite passer à la concurrence: meilleur équipement",
    },    {
      "id":8,
      "name":"Souhaite passer à la concurrence : inéligible fibre",
    },    {
      "id":9,
      "name":"Souhaite passer à la concurrence : inéligible TV",
    },    {
      "id":10,
      "name":"Refus diag tech (pb non résolu): Mauvaise conx internet",
    },    {
      "id":11,
      "name":"Refus diag tech (pb non résolu): Mauvaise réception TV",
    },    {
      "id":12,
      "name":"Déménagement : logement déjà équipé par un autre opérateur",
    },    {
      "id":13,
      "name":"Déménagement : logement déjà équipé RED/SFR/NC",
    },    {
      "id":14,
      "name":"Insatisfaction remise non appliquée",
    },    {
      "id":15,
      "name":"Service Clients injoignable",
    },    {
      "id":16,
      "name":"Insatisfaction du Service Client/ TLV",
    },    {
      "id":17,
      "name":"Déménagement vers zone non couverte",
    },    {
      "id":18,
      "name":"Pbm admin (fact érronée,réception matériel ko..)",
    },    {
      "id":19,
      "name":"Validation résil légitime : décès",
    },    {
      "id":20,
      "name":"KO installation",
    },    {
      "id":21,
      "name":"Mauvaise information lors de la vente par la TLV",
    },    {
      "id":22,
      "name":"Souhaite resilier, ne veut plus de ligne fixe",
    },    {
      "id":23,
      "name":"RDV STIT non honoré",
    },    {
      "id":24,
      "name":"Perte de ligne",
    },    {
      "id":25,
      "name":"Resil non PEC",
    },    {
      "id":26,
      "name":"Porta Out",
    },    {
      "id":27,
      "name":"Maison de retraite",
    },    {
      "id":28,
      "name":"Adresse Incomplète : Client refuse PRDV",
    },    {
      "id":29,
      "name":"VENTE PRIVÉE CONCURRENCE FREE",
    },    {
      "id":30,
      "name":"Mobile : Mauvaise Couverture",
    },    {
      "id":31,
      "name":"MOBILE : Forfait Mobile + Téléphone",
    },    {
      "id":32,
      "name":"MOBILE : Souhaite passer à la concurrence contenu riches 'double appel'",
    },    {
      "id":33,
      "name":"MOBILE : Souhaite passer à la concurrence:contenu riches 'Répondeur plus'",
    },    {
      "id":34,
      "name":"MOBILE : Souhaite passer à la concurrence:contenu riches 'plus de date en roaming'",
    },    {
      "id":35,
      "name":" MOBILE : Plus d'utilité de la ligne mobile 'ligne utilisée en système  surveillance'",
    },    {
      "id":36,
      "name":"MOBILE :  Plus d'utilité de la ligne mobile 'Montre connectée'",
    },    {
      "id":37,
      "name":" Plus d'utilité de la ligne mobile 'Souscription RED DEAL et SHOWROOM PRIVEE'",
    },    {
      "id":38,
      "name":" Plus d'utilité de la ligne mobile 'Client dispose d'un numéro PRO'",
    },    {
      "id":39,
      "name":"Proposition RET insuffisante tarif et data",
    },    {
      "id":40,
      "name":"MOBILE : client souhaite garder la ligne PRO",
    },    {
      "id":41,
      "name":"plus d'utilité : Ligne secondaire",
    },
   ]

  }

  constructor() { }
}
