import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { TipoCliente } from '../models/hijo_cliente';
import { BehaviorSubject, Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {


  private clientes:Cliente[] = [];
  private tipos:TipoCliente[] = [];
  private clienteSeleccionadoSubject: BehaviorSubject<Cliente | null> = new BehaviorSubject<Cliente | null>(null);
  clienteSeleccionado$: Observable<Cliente | null> = this.clienteSeleccionadoSubject.asObservable();
  
  constructor(private firestore:AngularFirestore) {
   this.clientes = [];
   this.tipos = [
    {
      id: 0,
      descripcion: 'Sin definir'
    },
   {
      id: 1,
      descripcion: 'Clientes Activos'
   },
   {
    id: 2,
    descripcion: 'Clientes Inactivos'
   },
   {
    id: 3,
    descripcion: 'Clientes Deudores'
   }

   ];    
   }  

//método que permita retornar el arreglo de cliente
getClientes(){
  return this.firestore.collection('clientes').snapshotChanges();
}

//método que agrege un cliente al arreglo
agregarCliente(cliente:Cliente){
  return this.firestore.collection('clientes').add(Object.assign({},cliente));
}

//método que inicializa un nuevo cliente
nuevoCliente(cliente:Cliente){
  return this.firestore.collection('clientes').add(Object.assign({},cliente));
}
//método que retorne los tipos de clientes
getTipos(){
  return this.tipos;
}
//método que elimina un cliente
deleteCliente(clienteId:string){
  this.firestore.doc('clientes/'+clienteId).delete();
}
//método que actualiza un cliente
updateCliente(cliente:Cliente){
  this.firestore.doc('clientes/'+cliente.id).update(cliente);
}

// Método para establecer el cliente seleccionado
setClienteSeleccionado(cliente: Cliente) {
  this.clienteSeleccionadoSubject.next(cliente);
}
}
