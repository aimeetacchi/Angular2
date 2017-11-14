import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works';

  // set a property that holds a random color for our style
  	randomcolor = this.getRandomColor();

  	// declare the fontsize and background color properties
  	public font_size = "14px";
  	public background_color = "grey";

  	//declare a variable to hold class name:
  	public my_Class = 'style1';

  	// Variable to hold boolean value to style1
  	isClass1Visible: boolean = false;

  	//Variable to hold boolean value to style2
  	isClass2Visible: boolean = true;


  	// function to get random colors
  	public getRandomColor(){
  		var letters = '0123456789ABCDEF'.split('');
  		var color = '#';
  		for(let i = 0; i < 6; i++){
  			color += letters[Math.floor(Math.random() * 16)];
  		}
  		return color;
  	}

  	// Function to set a new random color
  	setColor(){
  		this.randomcolor = this.getRandomColor();
  	}

  	// function to change the class from style1 to style2 when clicked.
  	toggle_class(){
  		if(this.my_Class == "style1"){
  			this.my_Class = 'style2';
  		} else {
  			this.my_Class = 'style1';
  		}
  	}


}
