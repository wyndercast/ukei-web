import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from 'src/app/models/datos-personales.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  public datosPersonales : Observable<DatosPersonales> | undefined; 
 
  constructor(private readonly strapiService : StrapiService){}
 

  ngOnInit(): void {
    this.datosPersonales = this.strapiService.datosPersonalesService();
  }
}
