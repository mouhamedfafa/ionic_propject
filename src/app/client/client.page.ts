import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/models/commande';
import { User } from '../shared/models/user';
import { AuthentificationService } from '../shared/service/authentification.service';
import { CommandeService } from '../shared/service/commandes.service';
import { UserService } from '../shared/service/userService.service';



@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  commandes: Commande[]=[]
  users:User[]=[]
  user:User
  d1:any;
  constructor(private commandeService: CommandeService,private auth :AuthentificationService, private userserv :UserService) { }

  ngOnInit() {
this.userserv.getAll().subscribe(d=>{
this.users=d['hydra:member']
// console.log(this.users)
this.users.forEach(u=>{
  if(u.login==this.auth.tokenrol){

    console.log(u.id);

    this.commandeService.getOneCommande(u.id).subscribe(data=>{
        this.commandes=data['hydra:member']
        
    })
  }
})


// if(this.auth.isLogged){
//   alert("ok")
// }

})


// this.commandeService.getOneCommande(1).subscribe(

  
//   data=> {

//     console.log(data);
//   }
  

// )

this.d1= (new Date).getDate()
// console.log((this.d1).getDate())

  }



}
