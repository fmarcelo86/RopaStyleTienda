import { Component, OnInit } from '@angular/core';
import { ProductosAgregadosService } from '../productos-agregados.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public productosCarrito:ProductosAgregadosService) { }

  ngOnInit() {
  }

}
