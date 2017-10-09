import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Import for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CatDetailComponent } from './cat-detail.component';
import { CatsComponent } from './cats.component';
import { CatService } from './cat.service';
import { CatSearchComponent } from './cat-search.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CatDetailComponent,
    CatsComponent,
    CatSearchComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],

  providers: [ CatService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
