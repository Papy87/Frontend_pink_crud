import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/data.storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ugovor-show',
  templateUrl: './ugovor-show.component.html',
  styleUrls: ['./ugovor-show.component.css']
})
export class UgovorShowComponent implements OnInit {
  id:number;
  ugovor:any[];
  constructor(private router:Router , private route:ActivatedRoute , private dataStorage: DataStorageService) { }
  subscription:Subscription;
  ngOnInit() {
   this.route.params.subscribe((params:Params)=>{

    this.id = parseInt(params['id']);
    })

    this.dataStorage.getUgovor(this.id).subscribe(ugovor=>{
     this.ugovor = ugovor;
    
 })

  }


}
