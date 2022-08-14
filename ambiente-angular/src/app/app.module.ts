import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './directives/marca-texto.directive';
import { PeopleService } from './shared/people.service';

import { ListPeopleComponent } from './shared/component/list-people/list-people.component';
import { ListApiComponent } from './components/list-api/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective, 
    ListApiComponent,
    ListPeopleComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
