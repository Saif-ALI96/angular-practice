import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeContactComponent } from './list-de-contact.component';

describe('ListDeContactComponent', () => {
  let component: ListDeContactComponent;
  let fixture: ComponentFixture<ListDeContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDeContactComponent]
    });
    fixture = TestBed.createComponent(ListDeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
