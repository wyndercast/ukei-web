import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from 'src/app/models/home.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  public home : Observable<Home> | undefined; 

  constructor(private strapiService : StrapiService){

  }

  ngOnInit(): void {
    this.home = this.strapiService.homeService();
    console.log(this.home)
  }

}
