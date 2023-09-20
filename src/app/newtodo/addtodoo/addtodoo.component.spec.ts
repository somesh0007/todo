import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodooComponent } from './addtodoo.component';

describe('AddtodooComponent', () => {
  let component: AddtodooComponent;
  let fixture: ComponentFixture<AddtodooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtodooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtodooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
