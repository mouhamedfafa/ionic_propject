import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCommandePageModule } from '../details-commande/details-commande.module';
import { DetailsCommandePage } from '../details-commande/details-commande.page';

import { CommandesPage } from './commandes.page';
import { ListCommandesComponent } from './listCommandes/listCommandes.component';

const routes: Routes = [
  {
    path: '',
    component: CommandesPage
  },
  {
    path: ':id',
    component:DetailsCommandePage, 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class CommandesPageRoutingModule {}
