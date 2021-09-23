import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductUIComponent } from './update-product-ui.component';

describe('UpdateProductUIComponent', () => {
  let component: UpdateProductUIComponent;
  let fixture: ComponentFixture<UpdateProductUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
