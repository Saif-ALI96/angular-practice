import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAjouterParIdComponent } from './element-ajouter-par-id.component';

describe('ElementAjouterParIdComponent', () => {
  let component: ElementAjouterParIdComponent;
  let fixture: ComponentFixture<ElementAjouterParIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementAjouterParIdComponent]
    });
    fixture = TestBed.createComponent(ElementAjouterParIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
