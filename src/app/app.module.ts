import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { HeadPageComponent } from './head-page/head-page.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule , Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { HttpModule } from '@angular/http';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosAgregadosService } from './productos-agregados.service';
import { DatosEnvioComponent } from './datos-envio/datos-envio.component';
import { FormsModule } from '@angular/forms';

const rutasApp:Routes = [
  { path:'' , component: InicioComponent },
  { path:'productos/:id' , component: ProductoComponent },
  { path:'carrito' , component: CarritoComponent },
  { path:'datos_envio' , component: DatosEnvioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterPageComponent,
    HeadPageComponent,
    InicioComponent,
    ProductoComponent,
    CarritoComponent,
    DatosEnvioComponent
  ],
  imports: [
    RouterModule.forRoot(rutasApp),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductosAgregadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
