import { ComponentFixture, TestBed } from '@angular/core/testing';

import ListDeProduitComponent from './list-de-produit.component';

describe('ListDeProduitComponent', () => {
  let component: ListDeProduitComponent;
  let fixture: ComponentFixture<ListDeProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDeProduitComponent]
    });
    fixture = TestBed.createComponent(ListDeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
