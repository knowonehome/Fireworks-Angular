import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FireworksComponent } from './fireworks/fireworks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'fireworks', component: FireworksComponent},
    {path: '*', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class FireworkRestAppRoutingModule { }