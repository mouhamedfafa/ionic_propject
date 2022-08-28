import { HttpClient } from '@angular/common/http';
// import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { Token } from '../models/token';
import { User } from '../models/user';
import jwt_decode from "jwt-decode";
import { Token } from '../models/token';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
url="http://127.0.0.1:8000/api/login_check"
private currentUserSubject: BehaviorSubject<User>;
public currentUser: Observable<User>;

tokenrol:any



constructor(private http:HttpClient) {

// this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '[]'));
// this.currentUser = this.currentUserSubject.asObservable();
 }



public get currentUserValue(): User {
  // console.log(this.currentUserSubject.value)
  return this.currentUserSubject.value;

}


login(credential: User):Observable<Token> {

  return this.http.post<Token>(this.url,credential)  
}





// logout() {
//   localStorage.removeItem('currentUser');
//   this.currentUserSubject.next;
// }





// getRoleByToken(token:any){

//   let _token =token.split('.')[1]
//   this.tokenrol=JSON.parse( atob(_token))
//   console.log(this.tokenrol)
//     }




    getDecodedAccessToken(token: string): any {
      try {
        // console.log( jwt_decode(token));
        
        
        return jwt_decode(token);
  
      } catch(Error) {
        return null;
      }
  
  
  
    }
getUser(id:number):Observable<any>{
  return this.http.get<any>('http://127.0.0.1:8000/api/users/'+id)
}


  
}



  






