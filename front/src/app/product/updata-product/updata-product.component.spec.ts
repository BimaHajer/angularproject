import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataProductComponent } from './updata-product.component';

describe('UpdataProductComponent', () => {
  let component: UpdataProductComponent;
  let fixture: ComponentFixture<UpdataProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdataProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdataProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
