import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationStart, RouterOutlet } from '@angular/router';
import { Commande } from 'src/app/shared/models/commande';
import { CommandeService } from 'src/app/shared/service/commandes.service';

@Component({
  selector: 'app-listCommandes',
  templateUrl: './listCommandes.component.html',
  styleUrls: ['./listCommandes.component.css']
})
export class ListCommandesComponent implements OnInit {
  commande :any
  // @ViewChild(RouterOutlet) outlet: RouterOutlet;
  constructor(private commandeService: CommandeService,private route :ActivatedRoute) { }

  ngOnInit() {





    const id= this.route.snapshot.params['id']
this.commandeService.getOneCommande(id).subscribe(

  data=> { this.commande=data
// console.log(data);

    // if (data instanceof ActivationStart && data.snapshot.outlet === "administration"){
    //   this.outlet.deactivate();
    // }

  
    
  }
  
  )


// console.log(this.route.snapshot.params['id'])
  }

}
