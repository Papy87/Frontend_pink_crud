import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DataStorageService } from 'src/app/data.storage.service';
import { Ugovor } from '../ugovor.model';
import { Subscription, Subject, Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { startWith, switchMap, catchError } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-ugovor-lista',
  templateUrl: './ugovor-lista.component.html',
  styleUrls: ['./ugovor-lista.component.css'],

})
export class UgovorListaComponent implements OnInit, OnDestroy {

  ugovori: Observable<Ugovor[]>;;
  error: boolean;
  // Ngb Date picker Code 




  //

  constructor(private router: Router, private route: ActivatedRoute, private dataStorage: DataStorageService) {
  }
  subscription: Subscription;
  od: any;
  public ugovoriForm = new FormGroup({
    'imeprezime': new FormControl(null, Validators.required),
    'radnomesto': new FormControl(null, Validators.required),
    datumzasnivanja: new FormControl(null, Validators.required),
    'lbroj': new FormControl(null, Validators.required),
    'maticnievidencija': new FormControl(null, Validators.required),
    datumprestanka: new FormControl({ value: null, disabled: false }),
    'netozarada': new FormControl(null, Validators.required),
    'brutozarada': new FormControl(null, Validators.required),
    'mestorada': new FormControl(null, Validators.required),
    'zahtevnastrucnasprema': new FormControl(null, Validators.required),
    'pravnolice': new FormControl(null, Validators.required)
  })
  DatumZasnivanja(event) {
    this.ugovoriForm.patchValue({ datumzasnivanja: { from: event.from, to: event.to } })
    console.log(this.ugovoriForm.value.datumzasnivanja.from)

  }
  DatumPrestanka(event) {
 
    this.ugovoriForm.patchValue({ datumprestanka: { from: event.from, to: event.to } })
 
  }
  ngOnInit() {
    // this.ugovori =this.dataStorage.getUgovori() //http://localhost:3000/contract

    this.ugovori = this.ugovoriForm.statusChanges.pipe(
      startWith(null),
      switchMap(() => {
        return this.lookup()
      })
    )


  }
  lookup(): Observable<Ugovor[]> {
    return this.dataStorage.getUgovori(this.ugovoriForm).pipe(
      catchError(_ => {
        return of(null)
      })
    )

  }
  /*
    editUgovor(id){
      let idTrue = this.ugovori.findIndex(e=>e.idugovor===id);
      console.log(idTrue)
      if(idTrue!== - 1){
      this.router.navigate(['../edit/'+id],{relativeTo:this.route})
      }else if(idTrue== -1){
        
        this.router.navigate(['not-found'])
  }
  }
  */

  loguj(ugovor) {
    console.log(ugovor);
  }


  ngOnDestroy() {

  }



}

