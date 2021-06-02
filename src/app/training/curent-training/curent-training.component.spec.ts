import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurentTrainingComponent } from './curent-training.component';

describe('CurentTrainingComponent', () => {
  let component: CurentTrainingComponent;
  let fixture: ComponentFixture<CurentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurentTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
