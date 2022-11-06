/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';


describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.word.noun(),
        faker.word.noun(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.color.human(),
        faker.internet.url()
      );
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('Se crea el componente listar vehiculos', () => {
    expect(component).toBeTruthy();
  });

  it('La tabla contiene 3 filas, una para cada vehiculo creado', () => {
    expect(debug.queryAll(By.css('th[scope="row"]'))).toHaveSize(3)
  });

  it('La tabla contiene 4 columnas para desplegar cuatro atributos de los vehiculos', () => {
    expect(debug.queryAll(By.css('th[scope="col"]'))).toHaveSize(4)
  });

  it('La primera columna de la tabla contiene 3 filas cada una con el id de cada vehiculo', () => {
    debug.queryAll(By.css('th[scope="row"]')).forEach((th, i)=>{
      expect(th.nativeElement.textContent).toContain(component.vehiculos[i].id)
    });
  });

  it('La segunda columna de la tabla contiene 3 filas cada una con la marca de cada vehiculo', () => {
    debug.queryAll(By.css('td[class="marca"]')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.vehiculos[i].marca)
    });
  });

  it('La tercera columna de la tabla contiene 3 filas cada una con la linea de cada vehiculo', () => {
    debug.queryAll(By.css('td[class="linea"]')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.vehiculos[i].linea)
    });
  });

  it('La cuarta columna de la tabla contiene 3 filas cada una con el modelo de cada vehiculo', () => {
    debug.queryAll(By.css('td[class="modelo"]')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.vehiculos[i].modelo)
    });
  });

});
