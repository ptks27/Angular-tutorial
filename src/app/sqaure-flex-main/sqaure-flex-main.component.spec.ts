import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqaureFlexMainComponent } from './sqaure-flex-main.component';

describe('SqaureFlexMainComponent', () => {
  let component: SqaureFlexMainComponent;
  let fixture: ComponentFixture<SqaureFlexMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SqaureFlexMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqaureFlexMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
