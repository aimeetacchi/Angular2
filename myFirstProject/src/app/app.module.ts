import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavComponentComponent } from './header-component/nav-component/nav-component.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { FeaturedProductsComponentComponent } from './featured-products-component/featured-products-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
     {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavComponentComponent,
    HeroComponentComponent,
    FeaturedProductsComponentComponent,
    FooterComponentComponent,
    AboutComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
