import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeadComponent } from './main-content/head/head.component';
import { CardCol6Component } from './cards/card-col-6/card-col-6.component';
import { AuthorBarComponent } from './cards/author-bar/author-bar.component';
import { CardCol4LongComponent } from './cards/card-col-4-long/card-col-4-long.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    HeadComponent,
    CardCol6Component,
    AuthorBarComponent,
    CardCol4LongComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
