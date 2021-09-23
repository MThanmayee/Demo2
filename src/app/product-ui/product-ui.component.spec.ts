import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUIComponent } from './product-ui.component';

describe('ProductUIComponent', () => {
  let component: ProductUIComponent;
  let fixture: ComponentFixture<ProductUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
