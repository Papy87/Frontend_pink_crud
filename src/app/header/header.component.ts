import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
auth:boolean;
  constructor(private authService:AuthService, private router:Router) { }


  ngOnInit() {
  };

  logout(){
    this.router.navigate([''])
    return this.authService.logout();
  };
  
  isLoggedIn(){
    if(localStorage.getItem("token")!==null )
    {
    return true
    }
     else{ 
      return false
    }
  };
 
};
