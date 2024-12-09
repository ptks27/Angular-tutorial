import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTitleComponent } from './edit-title.component';

describe('EditTitleComponent', () => {
  let component: EditTitleComponent;
  let fixture: ComponentFixture<EditTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
