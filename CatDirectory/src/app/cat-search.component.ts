import { Component, OnInit } from '@angular/core';
import { Router }		     from '@angular/router'

import { Observable }        from 'rxjs/Observable';
import { Subject }			 from 'rxjs/subject';


// Observable class extensions
import 'rxjs/add/observable/of';


// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import { CatSearchService } from './cat-search.service';
import { Cat } from './cat';


@Component({
	selector: 'cat-search',
	templateUrl: './cat-search.component.html',
	providers: [CatSearchService]
})

export class CatSearchComponent implements OnInit {
	cats: Observable<Cat[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private catSearchService: CatSearchService,
		private router: Router) {}

	// Push a search term into the observable stream
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.cats = this.searchTerms
		.debounceTime(300) // wait 300ms after each keystroke before considering the term
		.distinctUntilChanged() // ignore if next search term is same as previous
		.switchMap(term => term // Switch to new observable each time the term changes
			// return the http search observable
			? this.catSearchService.search(term)
			// or the observable of empty cats if there was no search term
			: Observable.of<Cat[]>([]))
			.catch(error => {
				// TO DO: add real error handling
				console.log(error);
				return Observable.of<Cat[]>([]);
			});
	}

	gotoDetail(cat: Cat): void {
		let link = ['/detail', cat.id];
		this.router.navigate(link);
	}
}