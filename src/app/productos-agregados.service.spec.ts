import { TestBed, inject } from '@angular/core/testing';

import { ProductosAgregadosService } from './productos-agregados.service';

describe('ProductosAgregadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductosAgregadosService]
    });
  });

  it('should be created', inject([ProductosAgregadosService], (service: ProductosAgregadosService) => {
    expect(service).toBeTruthy();
  }));
});
