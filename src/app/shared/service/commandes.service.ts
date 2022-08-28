import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})

export class CommandeService {

  url="http://127.0.0.1:8000/api/commandes"
  urlClient="http://127.0.0.1:8000/api/clients"
  // 16/commandes"

  urlzone="http://127.0.0.1:8000/api/zones"
  
  

oncommande :any

constructor(private http: HttpClient) { }

getAll() {
    return this.http.get<Commande[]>(`${this.url}`);
}

register(commande: Commande) {
    return this.http.post(`${this.url}`,commande);
}

delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
}




  



getOneCommande(id:number):Observable<any>{
  return this.http.get<any>(`${this.urlClient}/${id}/commandes`)
  

}


getDetailCommande(id:number):Observable<any>{
  return this.http.get<any>(`${this.url}/${id}`)
  

}

// getDetails(id:number):Observable<any>{
//   return this.http.get<any>(`${this.urldetail}/${id}`)
  

// }




getCommandZone(id:number):Observable<any>{
  return this.http.get<any>(`${this.urlzone}/${id}/commandes`).pipe(

    map(
      data =>{
        // data.post=[...data['hydra:member'][0].menu,...data['hydra:member'][1].burger]
        return data['hydra:member']
    
  // console.log(data)
      }
    

    ),



  )
  

}



  
getCommande():Observable<Commande>{
  return this.http.get<any>(`${this.url}`).pipe(
    map(
      data =>{
        // data.post=[...data['hydra:member'][0].menu,...data['hydra:member'][1].burger]
       
        return data['hydra:member']
      }
    

    ),
    // tap(data=>console.log(data['hydra:member'][0],))
    
  )
  




}
}


