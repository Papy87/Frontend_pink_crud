import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/data.storage.service';

@Component({
  selector: 'app-radnik-show',
  templateUrl: './radnik-show.component.html',
  styleUrls: ['./radnik-show.component.css']
})
export class RadnikShowComponent implements OnInit {

  constructor(private router:Router , private route:ActivatedRoute , private dataStorage: DataStorageService) { }
  radnik:any;
  id:number
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{

      this.id = parseInt(params['id']);
      })
  
      this.dataStorage.GetRadnik(this.id).subscribe(radnik=>{
       this.radnik = radnik;
      
   })
  }

}
