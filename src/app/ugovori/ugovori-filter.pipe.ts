import { PipeTransform, Pipe } from "@angular/core";
import { Ugovor } from "./ugovor.model";
import { formatDate } from "@angular/common";

@Pipe({
  name: "ugovorFilter"
})
export class UgovoroFilterPipe implements PipeTransform {
  transform(
    ugovori: Ugovor[],
    searchTerm?: string,
    Lbroj?: string,
    Maticni?: string,
    RadnoMesto?: string,
    datumPocetka?: string,
    datumZavrsetka?: string,
    NetoZarada?: string,
    BrutoZarada?: string,
    MestoRada?: string
  ): Ugovor[] {
    if (ugovori && ugovori.length) {
      return ugovori.filter(ugovor => {
        if (
          searchTerm &&
          ugovor.imeprezime.length !== null &&
          ugovor.imeprezime.toLowerCase().indexOf(searchTerm.toLowerCase()) ===
            -1
        ) {
          return false;
        }
        if (
          Lbroj &&
          ugovor.lbroj.length !== null &&
          ugovor.lbroj.toLowerCase().indexOf(Lbroj.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          Maticni &&
          ugovor.maticnievidencija.length !== null &&
          ugovor.maticnievidencija
            .toLowerCase()
            .indexOf(Maticni.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          RadnoMesto &&
          JSON.stringify(ugovor.radnomesto) != "" &&
          ugovor.radnomesto.toLowerCase().indexOf(RadnoMesto.toLowerCase()) ===
            -1
        ) {
          return false;
        }
        if (
          datumPocetka &&
          formatDate(ugovor.datumzasnivanja, "yyyy-MM-dd", "en").length !==
            null &&
          formatDate(ugovor.datumzasnivanja, "yyyy-MM-dd", "en")
            .toLowerCase()
            .indexOf(datumPocetka.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          datumZavrsetka &&
          formatDate(ugovor.datumprestanka, "yyyy-MM-dd", "en").length !==
            null &&
          formatDate(ugovor.datumprestanka, "yyyy-MM-dd", "en")
            .toLowerCase()
            .indexOf(datumZavrsetka.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          NetoZarada &&
          JSON.stringify(ugovor.netozarada).length !== null &&
          JSON.stringify(ugovor.netozarada)
            .toLowerCase()
            .indexOf(NetoZarada.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          BrutoZarada &&
          JSON.stringify(ugovor.brutozarada).length !== null &&
          JSON.stringify(ugovor.brutozarada)
            .toLowerCase()
            .indexOf(BrutoZarada.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          MestoRada &&
          JSON.stringify(ugovor.mestorada) != "" &&
          ugovor.mestorada.toLowerCase().indexOf(MestoRada.toLowerCase()) == -1
        ) {
          return false;
        }
        return true;
      });
    } else {
      return ugovori;
    }

    /*
    if (!emailSearch) return users;
    emailSearch = emailSearch.toLocaleLowerCase();
    users = [...users.filter(user => user.email.toLocaleLowerCase() ===  emailSearch)];

    if (!roleSearch) return users;
    roleSearch = roleSearch.toLocaleLowerCase();
    users = [...users.filter(user => user.role.toLocaleLowerCase() ===  roleSearch)];

    return users;
*/

    /*if(searchTerm){
return ugovori.filter(ugovor=>
    ugovor.imeprezime.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

 } */
    /* 
if (Lbroj && ugovori.filter(ugovor=>
    ugovor.lbroj.toLocaleLowerCase().indexOf(Lbroj.toLowerCase()) !== -1)){
    return false;
}
*/
  }
}
