import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-listado-libro',
  templateUrl: './listado-libro.component.html',
  styleUrl: './listado-libro.component.css'
})

export class ListadoLibroComponent implements OnInit {
  // Propiedades
  libros:Libro[]=[];
  libro = new Libro();

  constructor(private libroService:LibroService){}
  
  ngOnInit(): void {
    this,this.libroService.getLibros().subscribe(data =>{
      this.libros = data.map(doc =>{
        return{
          ...doc.payload.doc.data() as Libro,
          id:doc.payload.doc.id
        };
      })
    });
  }

  //Método para insertar un libro 
  insertarLibro(){
    this.libroService.createLibro(this.libro);
    this.libro = new Libro();
  }

  // Método para seleccionar un libro pra modificarlo o eliminarlo 
  selectLibro(libroSeleccionado:Libro){
    this.libro=libroSeleccionado;
  }

  // Método para modificar un libro 
  updateLibro(){
    this.libroService.updateLibro(this.libro);
    this.libro=new Libro();
  }

  // Método para eliminar un libro
  deleteLibro(id:string){
    this.libroService.deleteLibro(id);
    this.libro = new Libro();
  }
}
