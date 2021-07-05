import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrodComponent } from './introd.component';

describe('IntrodComponent', () => {
  let component: IntrodComponent;
  let fixture: ComponentFixture<IntrodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
