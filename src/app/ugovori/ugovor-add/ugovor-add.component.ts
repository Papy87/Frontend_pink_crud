import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { DataStorageService } from "src/app/data.storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { formatDate } from "@angular/common";
import { Radnik } from "src/app/radnik/radnik.model";
import { FilterPipe } from "src/app/filter.pipe";
@Component({
  selector: "app-ugovor-add",
  templateUrl: "./ugovor-add.component.html",
  styleUrls: ["./ugovor-add.component.css"]
})
export class UgovorAddComponent implements OnInit {
  public ugovorForm: FormGroup;

  constructor(
    private dataStorage: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  radnik: any;
  podaci: [];
  ngOnInit() {
    this.dataStorage.GetRadnikImeId().subscribe(radnik => {
      this.radnik = radnik;
      this.initForm();
    });
  }
  private initForm() {
    this.ugovorForm = new FormGroup({
      Lbroj: new FormControl(null, [Validators.required]),
      maticnibroj: new FormControl(null, Validators.required),
      radnoMesto: new FormControl(null),
      prijavljenasprema: new FormControl(null),
      Zahtevnasprema: new FormControl(null),
      datumPocetka: new FormControl(null),
      datumPrestanka: new FormControl(null),
      mestoRada: new FormControl(null),
      brutoZarada: new FormControl(null),
      netoZarada: new FormControl(null),
      napomena: new FormControl(null),
      pravno: new FormControl(null),
      imeId: new FormControl(null, [Validators.required])
    });
  }
  onSubmit(): void {
    console.log(this.ugovorForm.value);
    this.dataStorage
      .InsertUgovor(this.ugovorForm.value)
      .subscribe(() => this.router.navigate(["ugovoriview/list"]));
  }
}
