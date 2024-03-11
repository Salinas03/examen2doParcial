import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AltaJugadorComponent } from './pages/alta-jugador/alta-jugador.component';
import { ListaJugadoresComponent } from './pages/lista-jugadores/lista-jugadores.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './pages/lista-cliente/lista-cliente.component';
import { ListadoLibroComponent } from './pages/listado-libro/listado-libro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'altaJugador',
    component: AltaJugadorComponent
  },
  {
    path: 'listaJugador',
    component: ListaJugadoresComponent
  },
  {
    path: 'contacto',
    component: AcercaDeComponent
  },
  {
    path: 'altaCliente',
    component: AltaClienteComponent
  },
  {
    path: 'listaCliente',
    component: ListaClientesComponent
  },
  {
    path: 'listadoLibro',
    component: ListadoLibroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
