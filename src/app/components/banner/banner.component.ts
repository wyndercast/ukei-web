import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumidor } from 'src/app/models/consumidor.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  
  @Input() Data : any | undefined;
  
  ngOnInit(): void {
    console.log(this.Data);
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
