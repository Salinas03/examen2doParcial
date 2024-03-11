import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})

export class LibroService {

  constructor(private firestore:AngularFirestore) { }

  // Método que permite obtener todos los documentos de la conexión 
  getLibros(){
    return this.firestore.collection('libros').snapshotChanges();
  }

  // Método para insertar un documento nuevo en la conexión
  createLibro(libro:Libro){
    return this.firestore.collection('libros').add(Object.assign({},libro));
  }

  // Método para actualizar un documento existente
  updateLibro(libro:Libro){
    this.firestore.doc('libros/'+libro.id).update(libro);
  }

  // Método para eliminar un documento
  deleteLibro(libroId:string){
    this.firestore.doc('libros/'+libroId).delete();
  }

  
}
