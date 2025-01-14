import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReadComponent } from './admin-read.component';

describe('AdminReadComponent', () => {
  let component: AdminReadComponent;
  let fixture: ComponentFixture<AdminReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
