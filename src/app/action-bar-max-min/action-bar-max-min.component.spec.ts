import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarMaxMinComponent } from './action-bar-max-min.component';

describe('ActionBarMaxMinComponent', () => {
  let component: ActionBarMaxMinComponent;
  let fixture: ComponentFixture<ActionBarMaxMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionBarMaxMinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBarMaxMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
