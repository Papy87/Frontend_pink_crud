import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataStorageService } from "src/app/data.storage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Radnik } from "../radnik.model";
import { Subscription, Observable, of } from "rxjs";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { switchMap, startWith, catchError } from "rxjs/operators";

@Component({
  selector: "app-radnik-lista",
  templateUrl: "./radnik-lista.component.html",
  styleUrls: ["./radnik-lista.component.css"]
})
export class RadnikListaComponent implements OnInit, OnDestroy {
  constructor(
    private dataStorage: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public employeeForm = new FormGroup({
    imeprezime: new FormControl(null, Validators.required),
    jmbg: new FormControl(null, Validators.required),
    adresa: new FormControl(null, Validators.required),
    mesto: new FormControl(null, Validators.required),
    telefon: new FormControl(null, Validators.required),
    mobilni: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    stepenstrucnespreme: new FormControl(null, Validators.required),
    strucnasprema: new FormControl(null, Validators.required),
    aktivan: new FormControl(null, Validators.required)
  });

  subscription: Subscription;

  radnici: Observable<Radnik[]>;

  ngOnInit() {
    this.radnici = this.employeeForm.valueChanges.pipe(
      startWith(null),
      switchMap(() => {
        return this.lookup();
      })
    );
  };

  lookup(): Observable<Radnik[]> {
    return this.dataStorage.SearchRadnikItem(this.employeeForm).pipe(
      catchError(_ => {
        return of(null);
      })
    );
  };

  ngOnDestroy() {}
  /*
  deleteRadnik(id:number){
    
      this.dataStorage.DeleteRadnik(id).subscribe(radnici => {
      this.radnici = this.dataStorage.GetRadnici();
  
     })
    }
*/
  getRadnici() {
    return this.dataStorage.GetRadnici().pipe(
      catchError(_ => {
        return of(null);
      })
    );
  }
}
