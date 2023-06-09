import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsComponent } from './cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RunnerComponent } from './runner/runner.component';
import { ServicesComponent } from './services/services.component';
import { ItRecrutingProcessComponent } from './it-recruting-process/it-recruting-process.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'home', component: CardsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'it-recruting-process', component: ItRecrutingProcessComponent },
  { path: 'runner', component: RunnerComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
