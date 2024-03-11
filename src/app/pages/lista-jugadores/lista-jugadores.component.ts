import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';
import { TipoJugador } from '../../models/tipo_jugador';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrl: './lista-jugadores.component.css'
})

export class ListaJugadoresComponent implements OnInit{

  jugadores:Jugador[] = [];
  jugador = new Jugador();
  tipos:TipoJugador[] = [];
  tipo = new TipoJugador();

  constructor(private jugadorService:JugadorService){}

  ngOnInit(): void {
    this.tipos = this.jugadorService.getTipos();
    this.jugadorService.getJugadores().subscribe(data=>{
      this.jugadores = data.map(doc=>{
        return{
          ...doc.payload.doc.data() as Jugador,
          id:doc.payload.doc.id
        };
      })
    });
  }

  selectJugador(jugadorSeleccionado: Jugador){
    this.jugadorService.setJugadorSeleccionado(jugadorSeleccionado);
  }

}