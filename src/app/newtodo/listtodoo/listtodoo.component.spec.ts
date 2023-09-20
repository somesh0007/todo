import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtodooComponent } from './listtodoo.component';

describe('ListtodooComponent', () => {
  let component: ListtodooComponent;
  let fixture: ComponentFixture<ListtodooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtodooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtodooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
