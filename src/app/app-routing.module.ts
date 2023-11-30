import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PricesComponent } from './prices/prices.component';
import { UslugeComponent } from './usluge/usluge.component';

const routes: Routes = [
  { path: '', component: NaslovnaComponent, pathMatch:'full', title: 'Dubinsko čišćenje – damawash' },
  /*{ path: 'services', component: UslugeComponent, title: 'Usluge čišćenja – damawash' },*/
  { path: 'contact', component: ContactComponent, title: 'Kontakt – damawash' },
  { path: 'prices', component: PricesComponent, title: 'Cjenik – damawash' },
  { path: 'about', component: AboutComponent, title: 'O nama – damawash' },
  { path: 'sitemap', redirectTo: 'http://google.com' },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
