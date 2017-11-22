import {Routes} from '@angular/router';
import {CategoryComponentComponent} from '../main-content/category-component/category-component.component';
import {HomeComponentComponent} from '../main-content/home-component/home-component.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {PostComponent} from '../main-content/post/post.component';
import {NewPostComponent} from "../main-content/new-post/new-post.component";

export const appRoutes: Routes = [
  { path: 'category/:category', component: CategoryComponentComponent },
  { path: 'category', redirectTo: ''},
  { path: 'posts/:id', component: PostComponent},
  { path: 'posts', redirectTo: ''},
  { path: 'write', component: NewPostComponent},
  { path: '', component: HomeComponentComponent},
  { path: '**', component: PageNotFoundComponent}
]
