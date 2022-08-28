import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../shared/service/catalogue.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details: any;
  produit: any
  portion :any;

  constructor(private serve : CatalogueService, private route :ActivatedRoute) { }

  
  ngOnInit(): void {
    //  console.log(this.panierService.items$)
  
  
      // localStorage.setItem('dataSource', this.dataSource.length);
      // console.log(localStorage.getItem('detail'));
  
  
      // console.log(localStorage.getItem('dataSource'));
      const id =this.route.snapshot.params['id'];
    
  
      // console.log(  this.serve.getDetails(id).subscribe(
      //   data=>data
      // ))   
  
      this.serve.getDetails(id).subscribe(
        data=>this.details=data
      )
        // console.log(this.serve.getDetails(id))
  
      // this.detail$=this.serve.getDetails(id)
      // this.produit=this.details.produit
  
  
    
    }
  //   addToCart(product :Produit) {
  //     this.panierService.addToCart(product);
  // }



}
