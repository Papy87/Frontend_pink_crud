import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/data.storage.service';
import{FormGroup, FormControl, FormArray, Validators ,ReactiveFormsModule, FormBuilder, FormControlName } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Ugovor } from '../ugovor.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ugovor-edit',
  templateUrl: './ugovor-edit.component.html',
  styleUrls: ['./ugovor-edit.component.css']
})
export class UgovorEditComponent implements OnInit  {

  constructor(private router:Router , private route:ActivatedRoute , private dataStorage: DataStorageService,private formBuilder:FormBuilder) { }
  id:number;
  ugovor:any;
  podaciUgovori:any;
  pravnoLice:any;
  ime:any;
  datumPocetka:Date;
  idugovor:any;

  subscription:Subscription;
  
  public ugovorForm:FormGroup;
  

  


  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{

      this.id = parseInt(params['id']);
      })
      this.dataStorage.getUgovor(this.id).subscribe(ugovor=>{
        this.ugovor = ugovor;
        
     console.log(this.ugovor)
        this.initForm();
      })
    
     
}

onSubmit():void{

this.ugovorForm.value.idugovor=this.idugovor;
console.log(this.ugovorForm.value['datumPrestanka'])

this.dataStorage.UpdateUgovori(this.ugovorForm.value,this.ugovorForm.value.idugovor).subscribe(()=>

this.router.navigate(['ugovoriview/list'])

);


}
/*
ugovoriFormValuesToUgovorModel(){

this.ugovor.lbroj = this.ugovorForm.value['Lbroj'],
this.ugovor.pravnolice = this.ugovorForm.value['pravno'],
this.ugovor.maticnievidencija  = this.ugovorForm.value['maticnibroj'],
this.ugovor.radnomesto = this.ugovorForm.value['radnoMesto'],
this.ugovor.prijavljenastrucnasprema = this.ugovorForm.value['prijavljenasprema'],
this.ugovor.zahtevnastrucnasprema = this.ugovorForm.value['Zahtevnasprema'],
this.ugovor.mestorada = this.ugovorForm.value['mestoRada'],
this.ugovor.netozarada  = this.ugovorForm.value['netoZarada'],
this.ugovor.brutozarada = this.ugovorForm.value['brutoZarada'],
this.ugovor.datumzasnivanja = this.ugovorForm.value['datumPocetka'],
this.ugovor.datumprestanka = this.ugovorForm.value['datumPrestanka']

this.ugovor;

//this.ugovor.Lbroj = this.ugovorForm.value.Lbroj,
//this.ugovor.maticnievidencija = this.ugovor.value.maticni



}
*/
 private initForm(){
 
   
  let Lbroj;
  let maticni;
  let radnomesto;
  let prijavljenastrucnasprema ;
  let zahtevnastrucnasprema ;
  let mestoRada ;
  let datumPocetka;
  let datumPrestanka;
  let netoZarada ;
  let brutoZarada ;
  let napomena ;
  let datumPrestankaString;
  //if(this.ugovor.length < 1) { this.router.navigate(['not-found'])}
  
 
this.ugovor.forEach(stavka=>{
  this.ime = stavka.imeprezime;
  this.pravnoLice= stavka.pravnolice;
  this.idugovor = stavka.idugovor;
  Lbroj = stavka.lbroj;
  maticni =stavka.maticnievidencija;
  radnomesto = stavka.radnomesto;
  prijavljenastrucnasprema = stavka.prijavljenastrucnasprema;
  zahtevnastrucnasprema = stavka.zahtevnastrucnasprema;
  mestoRada = stavka.mestorada;
  datumPocetka = stavka.datumzasnivanja;
  datumPrestanka = stavka.datumprestanka;
  netoZarada = stavka.netozarada;
  brutoZarada = stavka.brutozarada;
  napomena  = stavka.napomena;


})


//formatDate(datumPdaocetka,'yyyy-MM-dd','en')
//Testiramo da li je vrednost null ako je null onda mu doddeljujemo vredost null
datumPocetka===null?datumPocetka=null:datumPocetka = new Date(formatDate(datumPocetka,'yyyy-MM-dd','en'));
datumPrestanka===null?datumPrestanka=null:datumPrestanka=new Date(formatDate(datumPrestanka,'yyyy-MM-dd','en'))


this.ugovorForm = new FormGroup({
  'ime':new FormControl({value:this.ime, disabled: true}),
  'Lbroj':new FormControl(Lbroj,Validators.required),
  'maticnibroj':new FormControl(maticni,Validators.required),
  'radnoMesto':new FormControl(radnomesto),
  'prijavljenasprema':new FormControl(prijavljenastrucnasprema),
  'Zahtevnasprema':new FormControl(zahtevnastrucnasprema),
  'datumPocetka':new FormControl(datumPocetka),
  'datumPrestanka':new FormControl(datumPrestanka),
  'mestoRada':new FormControl(mestoRada),                        
  'brutoZarada':new FormControl(brutoZarada),
  'netoZarada':new FormControl(netoZarada),
  'napomena':new FormControl(napomena),
  'pravno':new FormControl(this.pravnoLice)

  
})


  }



 







}
