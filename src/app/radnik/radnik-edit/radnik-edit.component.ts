import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataStorageService } from "src/app/data.storage.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Radnik } from "../radnik.model";

@Component({
  selector: "app-radnik-edit",
  templateUrl: "./radnik-edit.component.html",
  styleUrls: ["./radnik-edit.component.css"]
})
export class RadnikEditComponent implements OnInit {
  public radnikForm: FormGroup;
  constructor(
    private dataStorage: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: number;
  radnik: Radnik[];
  ime: string;
  jmbg: string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
    });

    this.dataStorage.GetRadnik(this.id).subscribe(radnik => {
      this.radnik = radnik;

      this.initForm();
    });
  }
  private initForm() {
    /*
  let adresa
  let mesto
  let telefon
  let mobilni
  let email
  let strucnasprema
  let stepenStrucneSpreme
  let napomena 
  let aktivan 
*/
    this.radnik.forEach(stavka => {
      this.radnikForm = new FormGroup({
        imeprezime: new FormControl(stavka.imeprezime, [Validators.required]),
        JMBG: new FormControl(
          { value: stavka.jmbg, disabled: true },
          Validators.required
        ),
        adresa: new FormControl(stavka.adresa),
        mesto: new FormControl(stavka.mesto),
        telefon: new FormControl(stavka.telefon),
        mobilni: new FormControl(stavka.mobilni),
        email: new FormControl(stavka.email),
        strucnasprema: new FormControl(stavka.strucnasprema),
        stepenstrucnespreme: new FormControl(stavka.stepenstrucnespreme),
        napomena: new FormControl(stavka.napomena),
        aktivan: new FormControl(stavka.aktivan)
      });
      /*
    this.ime = stavka.imeprezime;
    this.jmbg= stavka.jmbg;
    adresa = stavka.adresa;
    mesto = stavka.mesto;
    telefon =stavka.telefon;
    mobilni = stavka.mobilni;
    email = stavka.email;
    stepenStrucneSpreme = stavka.strucnasprema;
    strucnasprema = stavka.stepenstrucnespreme;
    napomena = stavka.napomena;
    aktivan = stavka.aktivan;
    
  */
    });

    /*
    this.radnikForm = new FormGroup({
           'imeprezime':new FormControl(this.ime,[Validators.required]),
              'JMBG':new FormControl({value: this.jmbg, disabled: true}, Validators.required),
              'adresa':new FormControl(adresa),
              'mesto':new FormControl(mesto),
              'telefon':new FormControl(telefon),
              'mobilni':new FormControl(mobilni),
              'email':new FormControl(email),
              'strucnasprema':new FormControl(strucnasprema),
              'stepenStrucneSpreme':new FormControl(stepenStrucneSpreme),
              'napomena':new FormControl(napomena),
              'aktivan':new FormControl(aktivan)
              
            
              
            })
         */
  }
  onSubmit(): void {
    console.log(this.radnikForm.value);
    this.dataStorage
      .UpdateRadnik(this.radnikForm.value, this.id)
      .subscribe(radnici => {
        this.router.navigate(["radnik/list"]);
      });
  }
}
