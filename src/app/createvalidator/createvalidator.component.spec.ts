import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevalidatorComponent } from './createvalidator.component';

describe('CreatevalidatorComponent', () => {
  let component: CreatevalidatorComponent;
  let fixture: ComponentFixture<CreatevalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatevalidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
