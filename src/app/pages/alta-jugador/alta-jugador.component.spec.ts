import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaJugadorComponent } from './alta-jugador.component';

describe('AltaJugadorComponent', () => {
  let component: AltaJugadorComponent;
  let fixture: ComponentFixture<AltaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaJugadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
