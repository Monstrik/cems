import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {AuthGuard} from './_guards/index';


import {CloginComponent} from './clogin/clogin.component';

import {VehicleComponent} from './vehicle/vehicle.component';
import {BlsComponent} from './bls/bls.component';
import {AlsComponent} from './als/als.component';
import {Form800Component} from './form800/form800.component';
import {HelpComponent} from './help/help.component';



const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'clogin', component: CloginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // {path: '', redirectTo: '/vehicle', pathMatch: 'full'},
    {path: 'vehicle', component: VehicleComponent, canActivate: [AuthGuard]},
    {path: 'bls', component: BlsComponent, canActivate: [AuthGuard]},
    {path: 'als', component: AlsComponent, canActivate: [AuthGuard]},
    {path: 'form800', component: Form800Component, canActivate: [AuthGuard]},
    {path: 'help', component: HelpComponent},
    {path: '**', redirectTo: ''}
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
// export const routing = RouterModule.forRoot(appRoutes);

