import { Component, OnInit } from '@angular/core';
import { TipoCliente } from '../../models/hijo_cliente';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})

export class AltaClienteComponent implements OnInit {

  cliente = new Cliente();
  tipos: TipoCliente[] = [];
  clienteSeleccionado: Cliente | null = null;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.tipos = this.clienteService.getTipos();

    this.clienteService.clienteSeleccionado$.subscribe(cliente => {
      this.clienteSeleccionado = cliente;
      if (cliente) {
        // Copiar los datos del cliente seleccionado para su edición si es necesario
        this.cliente = { ...cliente };
      } else {
        // Si no hay cliente seleccionado, limpiar los datos
        this.cliente = new Cliente();
      }
    });
  }

  insertarCliente() {
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = new Cliente();
  }

  updateCliente() {
    if (this.clienteSeleccionado) {
      this.clienteService.updateCliente(this.cliente);
      this.cliente = new Cliente();
    }
  }

  deleteCliente() {
    if (this.clienteSeleccionado) {
      this.clienteService.deleteCliente(this.clienteSeleccionado.id);
      this.cliente = new Cliente();
    }
  }
}