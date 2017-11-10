import {Routes} from '@angular/router';
import {CategoryComponentComponent} from '../main-content/category-component/category-component.component';
import {HomeComponentComponent} from '../main-content/home-component/home-component.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: 'category/:category', component: CategoryComponentComponent },
  { path: 'category', redirectTo: ''},
  { path: '', component: HomeComponentComponent},
  { path: '**', component: PageNotFoundComponent}
]
