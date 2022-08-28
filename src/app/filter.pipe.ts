import { Pipe, PipeTransform } from '@angular/core';
// import { Commande } from './shared/models/commande';
import { Produit } from './shared/models/produits';

@Pipe({
  name: 'filterPrix'
})
export class FilterPipe implements PipeTransform {


  transform(produit: Produit[], filtertext: any): any {

    
    if(produit.length===0 || filtertext === undefined){

   return produit
    }
    else{


     return produit.filter( 

      
      (produit)=>  {  
        

        return produit.prix === filtertext.toLowerCase() 
        


      }
      )
    }
  }

}
