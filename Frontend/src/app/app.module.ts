import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './UIElements/header/header/header.component';

import { FooterComponent } from './UIElements/footer/footer/footer.component';
import { HeadComponent } from './main-content/head/head.component';
import { CardCol6Component } from './UIElements/cards/card-col-6/card-col-6.component';
import { AuthorBarComponent } from './UIElements/cards/author-bar/author-bar.component';
import { CardCol4LongComponent } from './UIElements/cards/card-col-4-long/card-col-4-long.component';
import { CardCol4SmallComponent } from './UIElements/cards/card-col-4-small/card-col-4-small.component';
import { HomeComponentComponent } from './main-content/home-component/home-component.component';
import { SubheadComponent } from './main-content/head/subhead/subhead.component';
import { GroupFourComponent } from './UIElements/cards/group-four/group-four.component';
import { GroupFiveComponent } from './UIElements/cards/group-five/group-five.component';
import { CategoryComponentComponent } from './main-content/category-component/category-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './common/routes';
import { PostComponent } from './main-content/post/post.component';
import { LoginModalComponent } from './UIElements/login-modal/login-modal.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NewPostComponent } from './main-content/new-post/new-post.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./Services/user.service";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {AuthServiceService} from "./Services/auth-service.service";
import {PostService} from "./Services/post.service";

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
    PostComponent,
    LoginModalComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthServiceService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
