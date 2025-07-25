import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'About', component: AboutPageComponent },
  { path: 'Service', component: ServicePageComponent },
  { path: 'Product', component: ProductPageComponent },
  { path: 'Contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
