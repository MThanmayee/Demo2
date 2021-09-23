import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {ActivatedRoute,Router} from '@angular/router'; 
@Component({
  selector: 'app-update-product-ui',
  templateUrl: './update-product-ui.component.html',
  styleUrls: ['./update-product-ui.component.css']
})
export class UpdateProductUIComponent implements OnInit {

  productForm = new FormGroup(
    {
      id:new FormControl(),
      name:new FormControl(),
      description:new FormControl(),
      price:new FormControl(),
      quantity:new FormControl()
    }
  )
  product!:Product;
  constructor(private service:ProductService,private router:ActivatedRoute,private route1:Router) { }

  ngOnInit(): void {
    this.service.GetProductById(this.router.snapshot.params['productid']).subscribe((data)=>   
    this.productForm=new FormGroup({
      id:new FormControl(data["id"]),
      name:new FormControl(data["name"]),
      description:new FormControl(data["description"]),
      price:new FormControl(data["price"]),
      quantity:new FormControl(data["quantity"])
  }))
}
submitForm()
  {
    this.service.updateProduct(this.router.snapshot.params['productid'],this.productForm.value).subscribe();
    this.route1.navigateByUrl("/Home");
  }
}
