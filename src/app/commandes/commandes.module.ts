import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandesPageRoutingModule } from './commandes-routing.module';

import { CommandesPage } from './commandes.page';
import { ListCommandesComponent } from './listCommandes/listCommandes.component';
// import { DetailsCommandePageModule } from '../details-commande/details-commande.module';
import { DetailsCommandePage } from '../details-commande/details-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommandesPageRoutingModule,
    
    
  ],
  declarations: [CommandesPage,DetailsCommandePage]
})
export class CommandesPageModule {}
