import { Component, OnInit } from '@angular/core';
import { MenuController, RangeCustomEvent } from '@ionic/angular';
import { interval, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Catalogue } from '../shared/models/catalogue';
import { Produit } from '../shared/models/produits';
import { CatalogueService } from '../shared/service/catalogue.service';
import { RangeValue } from '@ionic/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {




  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value
    
    this.catalogueServ.getPost().subscribe(data => {
    
      this.post = data.post?.filter(product => (product.prix/100 < this.lastEmittedValue))
    // alert("ok")
  
       console.log(this.lastEmittedValue)  
  
    }
  
    )
    
  }
  lastEmittedValue: RangeValue;

  slideOpts = {
    initialSlide: 2,
     shadow: true,
     slideShadows: true,  
     shadowScale: 0.94,
     grabCursor: true,
     loop:true,
    //  ionSlideDidChange: true,
    speed: 400,
    autoplay:{
      deplay:4000

    }
  };
  catalogue$ : Observable<Catalogue> |null=null
  post: Produit[] | undefined;

  
 
  constructor(private catalogueServ: CatalogueService,private menu: MenuController) {}
isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  pinFormatter(value: number) {
    return (`${(value)*100}Fcfa`);



    
  }
 

  ngOnInit(): void {

    this.catalogue$= this.catalogueServ.getPost()
this. filterProduct("")
  }

 
  filterProduct(type:string){
    // alert("ok")
  
     this.catalogueServ.getPost().subscribe(data => {
      if(type!=""){
      this.post = data.post?.filter(product => product["@type"]=== type)
    // alert("ok")

       console.log( this.post)  
      }
      else{
        this.post = data.post
      }
    })
   
  //  console.log(this.catalogue$);
   
  
}


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  filterPrix(prix:any){

//     const source = interval(prix);

// const example = source.pipe(filter(
//   num => num > 1000));

  this.catalogueServ.getPost().subscribe(data => {
    
    this.post = data.post?.filter(product => (product.prix <= prix))
  // alert("ok")

     console.log( this.post)  

  }

  )



// const subscribe = example.subscribe(val =>
//   console.log(`Number greater than 1000: ${val}`)
// );



  }



}
