import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputshoppingComponent } from './outputshopping.component';

describe('OutputshoppingComponent', () => {
  let component: OutputshoppingComponent;
  let fixture: ComponentFixture<OutputshoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputshoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
