import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes=[
  {path:'', redirectTo:'dashboard', pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent},
  {path: 'aboutus',component:AboutusComponent},
  {path: 'contactus',component:ContactusComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactusComponent,
    AboutusComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
