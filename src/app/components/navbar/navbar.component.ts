import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavBar } from 'src/app/models/navbar.model.';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


  constructor(private strapiService : StrapiService, private router : Router){

  }

  public navbar : Observable<NavBar> | undefined;
  public active?: boolean;
  public path : string | undefined;

  ngOnInit(): void {
    this.navbar = this.strapiService.navbarService();
    this.path = this.router?.url;
    console.log(this.path)
  }

  setActive():void {
    this.active = !this.active;
  }


}
