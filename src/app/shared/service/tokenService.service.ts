import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

constructor(private router :Router,private storage: StorageService) { }
saveToken(token :string){

  this.storage.set('token',token)





}
//   async isConnect():Promise<boolean>{
//   const token =await this.storage.get('token')
//   console.log(token)
//   return !! token
// }

getToken(){

  return this.storage.get('token')
}












}
