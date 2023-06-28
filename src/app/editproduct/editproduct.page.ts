import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.page.html',
  styleUrls: ['./editproduct.page.scss'],
})
export class EditproductPage implements OnInit {

  id: any;
  editProduct: FormGroup;
  imagedata:any;
  constructor(
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private Service: ServiceService,
    private route :Router
  ) {
    this.editProduct = new FormGroup({

      title: new FormControl(""),
      description: new FormControl(""),
      price: new FormControl(""),
      discountPercentage: new FormControl(""),
      rating: new FormControl(""),
      stock: new FormControl(""),
      brand: new FormControl(""),
      category: new FormControl(""),

    });
    this.id = this.actRoute.snapshot.paramMap.get('pid');
    console.log('data:', this.id);
  }

  ngOnInit() {
    
    this.apiService.getData('https://dummyjson.com/products/' + this.id).subscribe({
      next: (res: any) => {
        if (res != null) {
          this.imagedata = res.thumbnail; 
          console.log("Response :", res)
          this.editProduct.patchValue(res);
        };
      },
      error: (err) => {
        console.log(err.error);
      }
    });

  }

  OnSubmit() {
    let data = this.editProduct.value;
    this.apiService.editData('https://dummyjson.com/products/' + this.id, data).subscribe({
      next: (res: any) => {
        if (res != null) {
          this.imagedata = res.thumbnail; 
          console.log("Response :", res)
          this.editProduct.patchValue(res);
          this.Service.presentAlert('SucessFully Update Your ProDuct !')
          this.route.navigate(['/']);
          
        };
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }

}
