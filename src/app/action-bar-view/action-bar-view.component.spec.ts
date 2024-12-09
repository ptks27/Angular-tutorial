import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarViewComponent } from './action-bar-view.component';

describe('ActionBarViewComponent', () => {
  let component: ActionBarViewComponent;
  let fixture: ComponentFixture<ActionBarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionBarViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
