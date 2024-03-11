import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { TipoJugador } from '../models/tipo_jugador';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private jugadores:Jugador[]=[];
  private tipos:TipoJugador[]=[];
  private jugadorSeleccionadoSubject: BehaviorSubject<Jugador | null> = new BehaviorSubject<Jugador | null>(null);
  jugadorSeleccionado$: Observable<Jugador | null> = this.jugadorSeleccionadoSubject.asObservable();

  constructor(private firestore:AngularFirestore) { 

    this.jugadores = []

    this.tipos=[
      {
        id:0,
        descripcion:'Sin definir'
      },
      {
        id:1,
        descripcion:'0'
      },
      {
        id:2,
        descripcion:'1'
      },
      {
        id:3,
        descripcion:'2'
      },
      {
        id:4,
        descripcion:'7'
      },
      {
        id:5,
        descripcion:'10'
      },
      {
        id:6,
        descripcion:'14'
      },
      {
        id:7,
        descripcion:'20'
      },
    ];
  }

  getJugadores(){
    return this.firestore.collection('jugadores').snapshotChanges();
  }

  getTipos(){
    return this.tipos;
  }

  agregarJugadores(jugador:Jugador){
    return this.firestore.collection('jugadores').add(Object.assign({},jugador));
  }

  nuevoJugador(jugador:Jugador){
    return this.firestore.collection('jugadores').add(Object.assign({},jugador));
  }

  deleteJugador(jugadorId:string){
    this.firestore.doc('jugadores/'+jugadorId).delete();
  }

  updateJugador(jugador:Jugador){
    this.firestore.doc('jugadores/'+jugador.id).update(jugador);
  }

  setJugadorSeleccionado(jugador: Jugador){
    this.jugadorSeleccionadoSubject.next(jugador);
  }
}
