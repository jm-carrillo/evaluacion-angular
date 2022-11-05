import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculoComponent, VehiculoListComponent],
  exports: [VehiculoComponent, VehiculoListComponent]
})
export class VehiculoModule { }
