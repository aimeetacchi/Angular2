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

  isActive = false;

  onSave($event){
  	console.log("Button was clicked", $event);
  }
  input = "Type Something";

  onKeyUp() {
  	console.log(this.input)
  }

    // Country Object
  	country = {
  		name: "Italy",
  		days: "7 days",
  		allinclusive: true,
  		price: 1200
  	}

  // RANDOM TEXT.. THAT USES THE CUSTOM PIPE
    text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sunt, eos doloremque adipisci eveniet inventore placeat cum repellat eum, est dolor. Ipsum distinctio quam eum voluptate a recusandae. Adipisci, aliquid.`;

   
    isClicked = false;


    input2 = "Type Something here";
    copyMe(){
      return this.input2;
    }

}
