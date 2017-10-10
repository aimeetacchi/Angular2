import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  title = "Choose Country";
  countries;

  // use the CountriesService.
  constructor(service: CountriesService){
  	this.countries = service.getCountries();  
  }
}
