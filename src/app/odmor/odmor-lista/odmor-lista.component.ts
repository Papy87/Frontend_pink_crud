import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data.storage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Odmor } from '../odmor.model';

@Component({
  selector: 'app-odmor-lista',
  templateUrl: './odmor-lista.component.html',
  styleUrls: ['./odmor-lista.component.css']
})
export class OdmorListaComponent implements OnInit {

  constructor(private dataStorage:DataStorageService) { }
  odmori:Odmor[];
  ngOnInit() {
this.dataStorage.getOdmori().subscribe(odmori=>{
this.odmori=odmori;
})

  }

}
