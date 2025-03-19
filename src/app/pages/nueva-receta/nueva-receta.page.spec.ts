import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaRecetaPage } from './nueva-receta.page';

describe('NuevaRecetaPage', () => {
  let component: NuevaRecetaPage;
  let fixture: ComponentFixture<NuevaRecetaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
