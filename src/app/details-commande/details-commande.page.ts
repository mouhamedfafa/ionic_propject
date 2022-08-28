import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../shared/service/commandes.service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.page.html',
  styleUrls: ['./details-commande.page.scss'],
})

export class DetailsCommandePage implements OnInit {

  commande :any
  // @ViewChild(RouterOutlet) outlet: RouterOutlet;
  constructor(private commandeService: CommandeService,private route :ActivatedRoute) { }

  ngOnInit() {

    const id= this.route.snapshot.params['id']
this.commandeService.getDetailCommande(id).subscribe(

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
