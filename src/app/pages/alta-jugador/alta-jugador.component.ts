import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { TipoJugador } from '../../models/tipo_jugador';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-alta-jugador',
  templateUrl: './alta-jugador.component.html',
  styleUrl: './alta-jugador.component.css'
})

export class AltaJugadorComponent implements OnInit{

  jugador = new Jugador();
  tipos:TipoJugador[]=[];
  jugadorSeleccionado: Jugador | null = null;

  constructor (private jugadorService:JugadorService){}

  ngOnInit(): void{
    this.tipos = this.jugadorService.getTipos();

    this.jugadorService.jugadorSeleccionado$.subscribe(jugador =>{
      this.jugadorSeleccionado = jugador;
      if(jugador){
        this.jugador = { ...jugador };
      }else{
        this.jugador = new Jugador();
      }
    });
  }

  insertarJugador(){
    this.jugadorService.agregarJugadores(this.jugador);
    this.jugador = new Jugador();
  }

  updateJugador(){
    if(this.jugadorSeleccionado){
      this.jugadorService.updateJugador(this.jugador);
      this.jugador = new Jugador()
    }
  }

  deleteJugador(){
    if(this.jugadorSeleccionado){
      this.jugadorService.deleteJugador(this.jugadorSeleccionado.id);
      this.jugador = new Jugador();
    }
  }
}