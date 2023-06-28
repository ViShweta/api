import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import {  Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  results:any;
  productList:any=[];
  res:any;
  i:any;
  constructor(
    private apiService :ApiService,
    private router: Router
  ) {}


  ionViewWillEnter() {
    this.Viewall();
  }

  Viewall() {
    this.apiService.getData('https://dummyjson.com/products').subscribe({
      next: (res:any) =>{
        console.log('res:',res);
        this.productList= res.products;
        console.log("ProductList", this.productList); 
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

  routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/singleproduct/' + data.id]);

  }


  onChange(event: any){
    let data = event.target.value;
    console.log('data:',data);
    // this.productList= products.filter((i => i.title.toLowerCase().includes(event.target.value.toLowerCase())));
    // console.log('Filtered Data:',    this.productList);
    
    this.apiService.getData('https://dummyjson.com/products/search?q='+data).subscribe({
      next: (res:any) =>{
        console.log('search:',res);
        this.productList= res.products;
        console.log("ProductList", this.productList); 
      },
      error: (err) => {
        console.log(err.error);
      }
    })

  }
}
