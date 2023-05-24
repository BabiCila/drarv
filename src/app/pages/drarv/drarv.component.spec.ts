import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrarvComponent } from './drarv.component';

describe('DrarvComponent', () => {
  let component: DrarvComponent;
  let fixture: ComponentFixture<DrarvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrarvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrarvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
