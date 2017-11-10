import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';

import { FooterComponent } from './footer/footer/footer.component';
import { HeadComponent } from './main-content/head/head.component';
import { CardCol6Component } from './cards/card-col-6/card-col-6.component';
import { AuthorBarComponent } from './cards/author-bar/author-bar.component';
import { CardCol4LongComponent } from './cards/card-col-4-long/card-col-4-long.component';
import { CardCol4SmallComponent } from './cards/card-col-4-small/card-col-4-small.component';
import { HomeComponentComponent } from './main-content/home-component/home-component.component';
import { SubheadComponent } from './main-content/head/subhead/subhead.component';
import { GroupFourComponent } from './cards/group-four/group-four.component';
import { GroupFiveComponent } from './cards/group-five/group-five.component';
import { CategoryComponentComponent } from './main-content/category-component/category-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './common/routes';
import { PostComponent } from './main-content/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadComponent,
    CardCol6Component,
    AuthorBarComponent,
    CardCol4LongComponent,
    CardCol4SmallComponent,
    HomeComponentComponent,
    SubheadComponent,
    GroupFourComponent,
    GroupFiveComponent,
    CategoryComponentComponent,
    PageNotFoundComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
