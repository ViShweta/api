import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  addProduct:FormGroup;
  constructor(
    private apiService:ApiService,
    private service :ServiceService
  ) { 

    this.addProduct=new FormGroup({
      title:new FormControl(""),
      content:new FormControl("")

    });
  }


  OnSubmit(value:any){
    this.apiService.saveData('https://dummyjson.com/products/add',value).subscribe({
      next: (res: any) => {
        if (res && res != null) {
          console.log("Response :", res) 
          this.service.presentAlert('add sucessfully')   

        };
      },
      error: (err) => {
        console.log(err.error);     
      }
    });
  }

  
  ngOnInit() {
  }

}
