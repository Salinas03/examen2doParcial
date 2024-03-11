import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { TipoCliente } from '../../models/hijo_cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrl: './lista-cliente.component.css'
})

export class ListaClientesComponent implements OnInit {

  //propiedades
  clientes: Cliente[]=[];
  cliente= new Cliente();
  tipos:TipoCliente[]=[];
  tipo=new TipoCliente();

  //constructor
  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.tipos = this.clienteService.getTipos();
    this.clienteService.getClientes().subscribe(data=>{
      this.clientes=data.map(doc=>{
        return{
          ...doc.payload.doc.data() as Cliente,
          id:doc.payload.doc.id
        };
      })
    });
  }
  
  //método para seleccionar un loibro para modificarlo o eliminarlo

  selectCliente(clienteSeleccionado: Cliente) {
    this.clienteService.setClienteSeleccionado(clienteSeleccionado);
  }
}