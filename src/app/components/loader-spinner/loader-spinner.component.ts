import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderSpinnerService } from 'src/app/services/loader-spinner.service';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.css']
})
export class LoaderSpinnerComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderSpinnerService) {
  }
}
