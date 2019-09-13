import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { error } from "util";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  error: boolean;
  errortext: string;
  prazniPodaci: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit(): void {
    let email = this.form.value["username"];
    let password = this.form.value["password"];
    if (email && password) {
      {
        this.authService.login(email, password).subscribe(
          () => {
            this.prazniPodaci = false;
            this.errortext = "";
            this.error = false;
            console.log("User is logged in");

            this.router.navigateByUrl("radnik/list");
          },
          error => {
            this.error = true;
            this.errortext = error;
            this.prazniPodaci = false;
          }
        );
      }
    } else if (email == "" || password == "") {
      this.error = false;
      this.errortext = "";
      this.prazniPodaci = true;
    }
  }
}
