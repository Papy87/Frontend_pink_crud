import { PipeTransform, Pipe } from "@angular/core";
import { Radnik } from "./radnik.model";
import { DataStorageService } from "../data.storage.service";
import { Observable } from "rxjs";
@Pipe({
  name: "RadnikFilter"
})
export class RadnikFilterPipe implements PipeTransform {
  array: [];
  constructor(public dataStorage: DataStorageService) {}

  transform(radnici: Radnik[], value): Observable<Radnik[]> {
    return null;
  }
}
