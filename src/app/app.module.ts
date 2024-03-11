import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './pages/lista-cliente/lista-cliente.component';
import { AltaJugadorComponent } from './pages/alta-jugador/alta-jugador.component';
import { ListaJugadoresComponent } from './pages/lista-jugadores/lista-jugadores.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ListadoLibroComponent } from './pages/listado-libro/listado-libro.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.development';
import { LibroService } from './services/libro.service';
import { ClienteService } from './services/cliente.service';
import { JugadorService } from './services/jugador.service';


@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListaClientesComponent,
    AltaJugadorComponent,
    ListaJugadoresComponent,
    HomeComponent,
    MenuComponent,
    AcercaDeComponent,
    ListadoLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    LibroService,
    ClienteService,
    JugadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
