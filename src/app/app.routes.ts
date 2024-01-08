import { Routes } from '@angular/router';
import { Angular17Component } from './angular17/angular17.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'angular17', component: Angular17Component },
    { path: '**', component: PageNotFoundComponent }
];
