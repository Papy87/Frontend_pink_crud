import * as moment from "moment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, shareReplay, catchError } from "rxjs/operators";
import * as jwt_decode from "jwt-decode";
import { error } from "util";
import { throwError, Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  authenticated: boolean;
  constructor(private http: HttpClient) {}

  handleError: string;
  private auth = "http://localhost:3000/login";

  login(username: string, password: string) {
    return this.http
      .post<any>(this.auth, { username, password })
      .pipe(
        tap(res => this.setSession(res), catchError => console.log(catchError))
      );
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, "second");
    localStorage.setItem("token", authResult.token);
    let tokenInfo = this.getDecodedAccessToken(authResult.token); // decode token
    console.log(tokenInfo);
  }

  logout() {
    console.log("radi");
    localStorage.removeItem("token");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    console.log(!this.isLoggedIn());
    return !this.isLoggedIn();
  }

  getType() {
    let token = localStorage.getItem("token");
    let tokenInfo = this.getDecodedAccessToken(token);
    return tokenInfo.role;
  }

  getExpiration() {
    let token = localStorage.getItem("token");
    let tokenInfo = this.getDecodedAccessToken(token); // decode token
    return moment(tokenInfo.exp);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
