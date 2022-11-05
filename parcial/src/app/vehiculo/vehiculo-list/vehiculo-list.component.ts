import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  marcas: Array<String> = [];
  totales: Array<number> = [];

  constructor(private VehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.VehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;

      let j: number = 0;
      for(let i=0; i<this.vehiculos.length; i++){
        const marcaRep = this.marcas.find(x => x == this.vehiculos[i].marca);
        if(marcaRep === undefined){
          this.marcas[j] = this.vehiculos[i].marca;
          this.totales[j] = 1;
          j++;
        }
        else{
          const indice = this.marcas.findIndex(x => x == marcaRep);
          this.totales[indice] = this.totales[indice] + 1;
          };
        }
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
