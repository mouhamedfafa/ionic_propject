import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable,} from 'rxjs';
import { map } from 'rxjs/operators';

import { Catalogue } from '../models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private urldetail: string ="http://127.0.0.1:8000/api/details"
  private url:string = "http://127.0.0.1:8000/api/cathalogues"

  constructor(private http:HttpClient) { }



  getPost(): Observable<Catalogue>{
    return this.http.get<any>(this.url).pipe(
      map(
        data =>{
          // data.post=[...data['hydra:member'][0].menu,...data['hydra:member'][1].burger]
         
          const catalogue : Catalogue ={
            menu:data['hydra:member'][0].menu,
            burger:data['hydra:member'][1].burger,
            post :[...data['hydra:member'][0].menu,...data['hydra:member'][1].burger]
          }
          return catalogue
        }
      

      ),
      // tap(data=>console.log(data['hydra:member'][0],))
      
    )
    
    

  }





  
  getDetails(id:number):Observable<any>{
    return this.http.get<any>(`${this.urldetail}/${id}`)
    

  }

}
