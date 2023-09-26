import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help-section',
  templateUrl: './help-section.component.html',
  styleUrls: ['./help-section.component.css']
})
export class HelpSectionComponent {

  @Input() Data : any | undefined;

}
