import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataStorageService } from "src/app/data.storage.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-radnik-add",
  templateUrl: "./radnik-add.component.html",
  styleUrls: ["./radnik-add.component.css"]
})
export class RadnikAddComponent implements OnInit {
  constructor(
    private dataStorage: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  public radnikForm: FormGroup;
  
  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.radnikForm = new FormGroup({
      imePrezime: new FormControl("", [Validators.required]),
      JMBG: new FormControl("", Validators.required),
      adresa: new FormControl(""),
      mesto: new FormControl(""),
      telefon: new FormControl(""),
      mobilni: new FormControl(""),
      email: new FormControl(""),
      strucnasprema: new FormControl(""),
      stepenStrucneSpreme: new FormControl(""),
      napomena: new FormControl(""),
      aktivan: new FormControl("")
    });
  }
  
  onSubmit(): void {
    console.log(this.radnikForm.value);
    this.dataStorage.InsertRadnik(this.radnikForm.value).subscribe(radnici => {
      this.router.navigate(["radnik/list"]);
    });
  }
};
