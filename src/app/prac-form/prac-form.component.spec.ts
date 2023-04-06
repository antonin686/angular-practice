import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracFormComponent } from './prac-form.component';

describe('PracFormComponent', () => {
  let component: PracFormComponent;
  let fixture: ComponentFixture<PracFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
