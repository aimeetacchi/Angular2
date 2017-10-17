import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavComponentComponent } from './header-component/nav-component/nav-component.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { FeaturedProductsComponentComponent } from './featured-products-component/featured-products-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavComponentComponent,
    HeroComponentComponent,
    FeaturedProductsComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
