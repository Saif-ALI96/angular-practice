import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeVoitureComponent } from './list-de-voiture.component';

describe('ListDeVoitureComponent', () => {
  let component: ListDeVoitureComponent;
  let fixture: ComponentFixture<ListDeVoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDeVoitureComponent]
    });
    fixture = TestBed.createComponent(ListDeVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
