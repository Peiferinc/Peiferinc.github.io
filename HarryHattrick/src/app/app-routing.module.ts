import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BingeViewerComponent } from './binge-viewer/binge-viewer.component';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'viewer/:leagueid/:bingeid/:year', component: BingeViewerComponent},
  {path: 'viewer', component: BingeViewerComponent},
  {path: 'viewer/:leagueid', component: BingeViewerComponent},
  {path: 'form', component: SearchFormComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
