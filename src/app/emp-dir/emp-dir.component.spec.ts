import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDirComponent } from './emp-dir.component';

describe('EmpDirComponent', () => {
  let component: EmpDirComponent;
  let fixture: ComponentFixture<EmpDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
