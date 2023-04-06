import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracDirComponent } from './prac-dir.component';

describe('PracDirComponent', () => {
  let component: PracDirComponent;
  let fixture: ComponentFixture<PracDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
