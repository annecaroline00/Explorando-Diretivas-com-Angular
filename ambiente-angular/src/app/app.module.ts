import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './directives/marca-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgModule,
    MarcaTextoDirective, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
