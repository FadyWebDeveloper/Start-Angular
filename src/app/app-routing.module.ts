import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"",component:HomeComponent,title:"StartAngular"},
  {path:"portfolio",component:PortfolioComponent,title:"Portfolio Page"},
  {path:"about",component:AboutComponent,title:"About Page"},
  {path:"contact",component:ContactComponent,title:"Contact Page"},
  {path:"**",component:NotFoundComponent,title:"Error Not Found Page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
