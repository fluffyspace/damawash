import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { PricesComponent } from './prices/prices.component';
import { UslugeComponent } from './usluge/usluge.component';

const routes: Routes = [
  { path: '', component: NaslovnaComponent, pathMatch:'full' },
  { path: 'services', component: UslugeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
