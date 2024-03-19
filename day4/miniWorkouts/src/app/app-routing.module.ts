import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';

const routes: Routes = [
  {path : 'reactive-form', component : FormsComponent},
  {path : 'weather-check', component : WeatherAppComponent},
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
