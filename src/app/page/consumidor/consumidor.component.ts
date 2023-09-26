import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumidor } from 'src/app/models/consumidor.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {

  public consumidor : Observable<Consumidor> | undefined;

  constructor(private readonly strapiService: StrapiService){

  }

  ngOnInit(): void {
    this.consumidor = this.strapiService.consumidorService();
  }
}
