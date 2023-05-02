import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { HomeComponent } from './components/home/home.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { ListaTicketsComponent } from './components/lista-tickets/lista-tickets.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModelsComponent } from './models/models.component';
import { Punto2Component } from './components/punto2/punto2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    HomeComponent,
    Punto5Component,
    ListaTicketsComponent,
    FooterComponent,
    ModelsComponent,
    Punto2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
