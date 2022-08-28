import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../shared/service/commandes.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
})
export class CommandesPage implements OnInit {

  commandes :any
  oncommande: any

d1:any;
d2:any;

  constructor(private commandeService: CommandeService,
    private route :Router
    ) { }

  ngOnInit() {


    this.commandeService.getCommande().subscribe(
      data=>this.commandes=data
    )
    

    // this.d1= new Date (this.commandes.date('dd/MM/YYYY')  );
    // this.d2=  Date.now();


    // (new Date(item.date| date:'dd/MM/YYYY')).getTime() === (new Date('dd/MM:YYYY').getTime())
  // console.log( (this.commandes.date('dd/MM/YYYY')))


  }


  // goTo(){
  //   this.route.navigate(['/commandes/list/id'])
    
  //   }

}
