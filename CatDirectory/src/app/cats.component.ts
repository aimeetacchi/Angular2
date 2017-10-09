import { Component, OnInit } from '@angular/core';

import { RouterModule, Router } from '@angular/router';


import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'my-cats',
  templateUrl: './cats.component.html',
})

export class CatsComponent implements OnInit {
    cats: Cat[];
    selectedCat: Cat;

    constructor(
      private router: Router,
      private catService: CatService) { }

    getCats(): void {
        this.catService.getCats().then(cats => this.cats = cats);
    }

    ngOnInit(): void {
      this.getCats();
    }

    onSelect(cat: Cat): void {
      this.selectedCat = cat;
    }

    gotoDetail(): void {
      this.router.navigate(['./detail', this.selectedCat.id]);
    }
    // Adding a new cat ===
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.catService.create(name)
        .then(cat => {
          this.cats.push(cat);
          this.selectedCat = null;
        });
    }

    // Deleting a Cat ====
    delete(cat: Cat): void {
      this.catService
        .delete(cat.id)
        .then(() => {
          this.cats = this.cats.filter(c => c !== cat);
          if (this.selectedCat === cat) { this.selectedCat = null; }
        });
    }

}
