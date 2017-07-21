//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//3rd Party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Modules
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SanfranciscoComponent } from './sanfrancisco/sanfrancisco.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { SeattleComponent } from './seattle/seattle.component';
import { UsComponent } from './us/us.component';
import { SafetyComponent } from './safety/safety.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SanfranciscoComponent,
    LosangelesComponent,
    SeattleComponent,
    UsComponent,
    SafetyComponent,
    SuppliesComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/home/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
