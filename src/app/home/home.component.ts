import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  constructor(private route:ActivatedRoute,private authService:AuthService) { }
text:string;

  ngOnInit() {
  };
};
