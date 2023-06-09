import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRecrutingProcessComponent } from './it-recruting-process.component';

describe('ItRecrutingProcessComponent', () => {
  let component: ItRecrutingProcessComponent;
  let fixture: ComponentFixture<ItRecrutingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItRecrutingProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItRecrutingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
