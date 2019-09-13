import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Ugovor } from "./ugovori/ugovor.model";
import { Observable, throwError } from "rxjs";
import { Radnik } from "./radnik/radnik.model";
import { map, switchMap, catchError } from "rxjs/operators";
import { Odmor } from "./odmor/odmor.model";

import { FormGroup } from "@angular/forms";
import { formatDate } from "@angular/common";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
/*
  const token = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',"" })
  };
   */
@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  private radnikiUrl = "http://localhost:3000/employee";
  private radniciUrl = "http://localhost:3000/employee";
  private ugovoriUrl = "http://localhost:3000/contract";

  //public ugovoriUrlEdit = 'http://localhost:3000//contract/:id';

  public RadnikImeId = "http://localhost:3000/employee";
  public odmorUrl = "http://localhost:3000/odmori";
  public token = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  getUgovor(id: number): Observable<Ugovor[]> {
    const url = this.ugovoriUrl + "/" + id;
    return this.http.get<Ugovor[]>(url);
  }

  InsertUgovor(ugovor: any): Observable<void> {
    console.log(ugovor);
    return this.http.post<void>(this.ugovoriUrl, ugovor, httpOptions);
  }

  UpdateUgovori(ugovor: any, id: any): Observable<void> {
    console.log(ugovor);
    return this.http.put<void>(this.ugovoriUrl + "/" + id, ugovor, httpOptions);
  }

  getUgovori(u: FormGroup): Observable<Ugovor[]> {
    let querryParams = u.value["imeprezime"]
      ? "imeprezime=" + u.value["imeprezime"] + "&"
      : "";
    querryParams += u.value["lbroj"] ? "lbroj=" + u.value["lbroj"] + "&" : "";
    querryParams += u.value["maticnievidencija"]
      ? "maticnievidencija=" + u.value["maticnievidencija"] + "&"
      : "";
    querryParams += u.value["radnomesto"]
      ? "radnomesto=" + u.value["radnomesto"] + "&"
      : "";
    querryParams += u.value["datumzasnivanja"]
      ? "datumzasnivanja=" +
        [u.value["datumzasnivanja"].from, u.value["datumzasnivanja"].to] +
        "&"
      : "";
    querryParams += u.value["netozarada"]
      ? "netozarada=" + u.value["netozarada"] + "&"
      : "";
    querryParams += u.value["brutozarada"]
      ? "brutozarada=" + u.value["brutozarada"] + "&"
      : "";
    querryParams += u.value["datumaktazarade"]
      ? "datumaktazarade=" + u.value["datumaktazarade"] + "&"
      : "";
    querryParams += u.value["datumprestanka"]
      ? "datumprestanka=" +
        [u.value["datumprestanka"].from, u.value["datumprestanka"].to] +
        "&"
      : "";
    querryParams += u.value["mestorada"]
      ? "mestorada=" + u.value["mestorada"] + "&"
      : "";
    querryParams += u.value["prijavljenastrucnasprema"]
      ? "prijavljenastrucnasprema=" + u.value["prijavljenastrucnasprema"] + "&"
      : "";
    querryParams += u.value["zahtevnastrucnasprema"]
      ? "zahtevnastrucnasprema=" + u.value["zahtevnastrucnasprema"] + "&"
      : "";
    querryParams += u.value["pravnolice"]
      ? "pravnolice=" + u.value["pravnolice"] + "&"
      : "";
    if (querryParams.charAt(querryParams.length - 1) === "&") {
      querryParams = querryParams.substr(0, querryParams.length - 1);
    }
    return this.http.get<Ugovor[]>(
      this.ugovoriUrl + (querryParams ? "?" + querryParams : "")
    );
  }

  SearchRadnikItem(r: FormGroup): Observable<Radnik[]> {
    let querryParams = r.value["imeprezime"]
      ? "imeprezime=" + r.value["imeprezime"] + "&"
      : "";
    querryParams += r.value["jmbg"] ? "jmbg=" + r.value["jmbg"] + "&" : "";
    querryParams += r.value["adresa"]
      ? "adresa=" + r.value["adresa"] + "&"
      : "";
    querryParams += r.value["mesto"] ? "mesto=" + r.value["mesto"] + "&" : "";
    querryParams += r.value["telefon"]
      ? "telefon=" + r.value["telefon"] + "&"
      : "";
    querryParams += r.value["mobilni"]
      ? "mobilni=" + r.value["mobilni"] + "&"
      : "";
    querryParams += r.value["email"] ? "email=" + r.value["email"] + "&" : "";
    querryParams += r.value["strucnasprema"]
      ? "strucnasprema=" + r.value["strucnasprema"] + "&"
      : "";
    querryParams += r.value["stepenstrucnespreme"]
      ? "stepenstrucnespreme=" + r.value["stepenstrucnespreme"] + "&"
      : "";
    querryParams += r.value["stanjeZaposlenogRadnika"]
      ? "stanjeZaposlenogRadnika=" + r.value["stanjeZaposlenogRadnika"] + "&"
      : "";
    querryParams += r.value["napomena"]
      ? "napomena=" + r.value["napomena"] + "&"
      : "";
    querryParams += r.value["aktivan"]
      ? "aktivan=" + r.value["aktivan"] + "&"
      : "";

    if (querryParams.charAt(querryParams.length - 1) === "&") {
      querryParams = querryParams.substr(0, querryParams.length - 1);
    }
    return this.http.get<Radnik[]>(
      this.radniciUrl + "/search" + (querryParams ? "?" + querryParams : "")
    );
  }

  deleteUgovor(id: number) {
    return this.http.delete(this.ugovoriUrl + "/delete/" + id);
  }

  GetRadnici(): Observable<Radnik[]> {
    let header = new HttpHeaders();
    return this.http.get<Radnik[]>(this.radniciUrl);
  }

  GetRadnik(id: number): Observable<Radnik[]> {
    return this.http.get<Radnik[]>(this.radnikiUrl + "/" + id);
  }

  InsertRadnik(radnik: Radnik[]): Observable<void> {
    return this.http.post<void>(this.radniciUrl, radnik, httpOptions);
  }

  UpdateRadnik(radnik: Radnik[], id: number): Observable<void> {
    return this.http.put<void>(this.radniciUrl + "/" + id, radnik, httpOptions);
  }

  GetRadnikImeId(): Observable<Radnik[]> {
    return this.http.get<Radnik[]>(this.RadnikImeId);
  }

  DeleteRadnik(id: number): Observable<any> {
    return this.http.delete(this.radniciUrl + "/" + id, httpOptions);
  }

  getOdmori(): Observable<Odmor[]> {
    return this.http.get<Odmor[]>(this.odmorUrl);
  }
  insertOdmor(odmor:Odmor[]): Observable<void> {
    return this.http.post<void>(this.odmorUrl, odmor, httpOptions);
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return console.log(errorMessage);
  }
}
