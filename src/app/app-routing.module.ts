import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistreComponent } from './registre/registre.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [

  {path: "user" , component: UserComponent},
  {path: "registre" , component: RegistreComponent},
  {path: "produits" , component: ProduitsComponent},
  {path: "panier" , component: PanierComponent},
  {path : "**" ,component: ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
