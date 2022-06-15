import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)  //LazzyLoad
  },
 {
   path:'',
   component: HomePageComponent,
   loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)  //LazzyLoad
 } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
