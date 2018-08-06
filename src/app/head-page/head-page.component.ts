import { Component, OnInit } from '@angular/core';
import { ProductosAgregadosService } from '../productos-agregados.service';

@Component({
  selector: 'app-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.css']
})
export class HeadPageComponent implements OnInit {

  constructor(public productosCarrito:ProductosAgregadosService) { }

  ngOnInit() {
  }
}
