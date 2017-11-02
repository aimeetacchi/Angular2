import { Injectable } from '@angular/core';


@Injectable()
export class ImageService{
	
	visibleImages = [];

	getImages(){
		// returns a copy of that IMAGES array from 0 to end.
		return this.visibleImages = IMAGES.slice(0);
	}

	// Method to get an image, using the id. set it to number as id is a number.
	getImage(id: number) {
		// find the image thats == to the id which was passed into this function
		return IMAGES.slice(0).find(image => image.id == id)
	}
}


const IMAGES = [
	{
		"id": 1,
		"category": "boats",
		"caption": "View from a boat",
		"url": "assets/img/boat_01.jpg"
	},
	{
		"id": 2,
		"category": "cats",
		"caption": "cute cat",
		"url": "assets/img/cat_01.jpg"
	},
	{
		"id": 3,
		"category": "sunsets",
		"caption": "sunset",
		"url": "assets/img/sunset_01.jpg"
	}
]