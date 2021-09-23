import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-ui',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.css']
})
export class ProductUIComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private fb:FormBuilder,private service:ProductService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id:[],
    name: [''],
    description: [''],
    price: [],
    quantity: [],    
  })
  }
  submitForm()
  {
      this.service.AddProduct(this.productForm.value).subscribe();

  }
}
