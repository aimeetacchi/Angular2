import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// SERVICE
import { CountriesService } from './countries.service';
//CUSTOM PIPE 
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
// COMPONENTS
import { AppComponent } from './app.component';
import { PlacesComponent } from './places.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    CountriesComponent,
    SummaryPipe,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
