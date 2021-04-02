import { ComponentFixture, TestBed } from '@angular/core/testing';

import { spiceworldComponent } from './spiceworld.component';

describe('spiceworldComponent', () => {
  let component: spiceworldComponent;
  let fixture: ComponentFixture<spiceworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ spiceworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(spiceworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
