import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// SERVICE
import { CountriesService } from './countries.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { PlacesComponent } from './places.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
