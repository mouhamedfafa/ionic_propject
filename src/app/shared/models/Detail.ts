import { Produit } from "./produits"


export interface Detail {
    id?:number
    menu:Produit
    burger:Produit
    portionFrite: Produit
    boissons:[]
    menuPortionFrites:[]
    
}
