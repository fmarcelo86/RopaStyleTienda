import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosAgregadosService {

  productosCarrito: Array<any>;
  precioTotal:number;
  cantidadTotal:number;

  constructor() {
    this.productosCarrito = [];
    this.precioTotal = 0;
    this.cantidadTotal = 0;
   }

   agregarProducto(nuevoProducto) {
     if(nuevoProducto.idProducto == undefined) {
        nuevoProducto.idProducto = nuevoProducto.id;
     }    
    delete nuevoProducto.id; 
    var _nuevoProducto = Object.assign({}, nuevoProducto);

     if(_nuevoProducto.cantidad == undefined)
        _nuevoProducto.cantidad = 1;
     this.precioTotal = this.precioTotal + _nuevoProducto.precio;
     this.cantidadTotal += 1;     
    for (let producto of this.productosCarrito) {
      if(producto.idProducto == _nuevoProducto.idProducto) {       
        var index = this.productosCarrito.indexOf(producto, 0);       
        if (index > -1) {
          producto.cantidad += 1;
          producto.precio = _nuevoProducto.precio * producto.cantidad;     
          this.productosCarrito[index] = producto;
          return;
        }
      }
    }
    this.productosCarrito.push(_nuevoProducto);
  }

  mostarProductos() {
    return this.productosCarrito;
  }

  getCantidad() {
    return this.cantidadTotal;
  }

  getPrecioTotal() {
    return this.precioTotal;
  }
}
