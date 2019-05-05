import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import {Routes, RouterModule} from '@angular/router';
import { MovimientosComponent } from './movimientos/movimientos.component';
const appRoutes: Routes =[
  {path: 'home', component: TransaccionesComponent},
  {path: '', component: TransaccionesComponent },
  {path: 'movimientos', component: MovimientosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TransaccionesComponent,
    MovimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
