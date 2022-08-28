
import { Produit } from "./produits"
import { User } from "./user"

export interface Commande {
  id: number
  nCommande: number
  montant: number
  client: User
  zone: Zone
  date: string,
  etat :string
  ligneDeCommandes: LigneDeCommande[]
}

export interface Client {}

export interface Zone {

  quartier:string,
  nom:string,
  prixzone:number

}

export interface LigneDeCommande {
  quantite: number
  produit: Produit
}


