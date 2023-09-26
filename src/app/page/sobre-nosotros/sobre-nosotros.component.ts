import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreNosotros } from 'src/app/models/sobre-nosotros-model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit{
  
  constructor(private readonly strapiService: StrapiService){}

  public sobreNosotros : Observable<SobreNosotros> | undefined;

  ngOnInit(): void {
    this.sobreNosotros = this.strapiService.sobreNosotrosService();
  }

  scroll() {
    //this.scroller.scrollToAnchor("targetGreen");
    document?.getElementById("target")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
