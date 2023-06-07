import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDesktopComponent } from './carousel-desktop.component';

describe('CarouselDesktopComponent', () => {
  let component: CarouselDesktopComponent;
  let fixture: ComponentFixture<CarouselDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
