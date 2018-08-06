import { Component, OnInit } from '@angular/core';
import { ProductosAgregadosService } from '../productos-agregados.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-datos-envio',
  templateUrl: './datos-envio.component.html',
  styleUrls: ['./datos-envio.component.css']
})
export class DatosEnvioComponent implements OnInit {
  tiposDocumeto: Array<Object>;
  pedidoRequest: any;

  constructor(private http:Http, public productosCarrito:ProductosAgregadosService) { }

  ngOnInit() {
    this.tiposDocumeto = [];
    this.cargarTiposDocumento();
    this.pedidoRequest = {     
      pedidos: [],
      pedidosCliente: {       
        idPedido: null,
        tipoIdentificacion: null,
        identificacion: null,
        nombre: null,
        fechaHora: null,
        direccion: null
      }
    }
  }

  cargarTiposDocumento() {
    this.http.get('http://node21721-felix.jelastic.saveincloud.net/RopaStyleService/tipodocumento').subscribe(
      (respuesta: Response) => { this.tiposDocumeto = respuesta.json() },
      (respuesta: Response) => {  }
    )
  }

  realizarPedido() {
    this.pedidoRequest.pedidos = this.productosCarrito.mostarProductos();
    this.http.post('http://node21721-felix.jelastic.saveincloud.net/RopaStyleService/pedido', this.pedidoRequest).subscribe(
      (respuesta: Response) => { console.log(respuesta.json()) },
      (respuesta: Response) => {  }
    )
    console.log(this.pedidoRequest);
  }
}
