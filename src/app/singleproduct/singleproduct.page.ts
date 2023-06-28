import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.page.html',
  styleUrls: ['./singleproduct.page.scss'],
})
export class SingleproductPage implements OnInit {

  singleproduct:any=[];
  id:any;
  constructor(
    private actRoute :ActivatedRoute,
    private apiService :ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log('data:',id);
    this.getproduct(id);
    
  }

  routeclick(data: any) {
    console.log(data)
    this.router.navigate(['/editproduct/' + data.id]);

  }

  getproduct(id :any) {
    this.apiService.getData('https://dummyjson.com/products/'+id).subscribe({
      next: (res:any) =>{
        console.log('res:',res);
        this.singleproduct= res;
        console.log("Singleproduct", this.singleproduct); 
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

}
