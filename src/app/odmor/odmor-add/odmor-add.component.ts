import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataStorageService } from "src/app/data.storage.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-odmor-add",
  templateUrl: "./odmor-add.component.html",
  styleUrls: ["./odmor-add.component.css"]
})
export class OdmorAddComponent implements OnInit {
  constructor(private dataStorage: DataStorageService, private router: Router) {}

  public odmorForm: FormGroup;

  ngOnInit() {
    this.initForm()
  }
  private initForm() {
    this.odmorForm = new FormGroup({
      sezona: new FormControl("", [Validators.required]),
      datumPocetka: new FormControl("", [Validators.required]),
      radnihdana: new FormControl("", [Validators.required]),
      napomena: new FormControl("", [Validators.required])
    });
  }

  onSubmit(): void {
    console.log(this.odmorForm.value);
    this.dataStorage.insertOdmor(this.odmorForm.value).subscribe(odmor => {
      this.router.navigate(["odmor/list"]);
    });
  }
}
