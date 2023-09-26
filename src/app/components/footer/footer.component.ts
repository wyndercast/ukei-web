import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Footer } from 'src/app/models/footer.model';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  
  public footer : Observable<Footer> | undefined;

  constructor( private readonly strapiService : StrapiService){}

  ngOnInit(): void {
    this.footer = this.strapiService.footerService();
  }

}
