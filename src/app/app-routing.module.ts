//Angular
import { NgModule } from '@angular/core';
//Modules
import { Routes, RouterModule } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { SafetyComponent } from './safety/safety.component';
import { SanfranciscoComponent } from './sanfrancisco/sanfrancisco.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent, outlet: 'sidebar' },
  { path: 'login', component: LoginComponent, outlet: 'sidebar' },
  { path: 'losangeles', component: LosangelesComponent, outlet: 'main' },
  { path: 'safety', component: SafetyComponent, outlet: 'main' },
  { path: 'sanfrancisco', component: SanfranciscoComponent, outlet: 'main' },
  { path: 'seattle', component: SeattleComponent, outlet: 'main' },
  { path: 'supplies', component: SuppliesComponent, outlet: 'main' },
  { path: 'us', component: UsComponent, outlet: 'main' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
