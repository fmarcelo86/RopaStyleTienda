import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { ProductosAgregadosService } from '../productos-agregados.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  host: {'class': 'col-lg-3 col-md-6 mb-4'}
})
export class ProductoComponent implements OnInit {
  id: number;
  productos: Array<Object>;  
  cargando:Boolean;

  constructor(private router:ActivatedRoute, private http:Http, public productosCarrito:ProductosAgregadosService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.cargarProductos();
    });
  }

  cargarProductos() {
    this.http.get('http://node21721-felix.jelastic.saveincloud.net/RopaStyleService/producto/'+this.id).subscribe(
      (respuesta: Response) => { this.productos = respuesta.json(); console.log(this.productos) },
      (respuesta: Response) => { }
    )
  }

  agregarProducto(_nuevoProducto) {
    this.productosCarrito.agregarProducto(_nuevoProducto);
  }

}
