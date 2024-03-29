import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAppComponent } from './calculate-app.component';

describe('CalculateAppComponent', () => {
  let component: CalculateAppComponent;
  let fixture: ComponentFixture<CalculateAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
