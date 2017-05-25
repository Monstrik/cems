import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VehicleComponent} from './vehicle/vehicle.component';
import {BlsComponent} from './bls/bls.component';
import { AlsComponent } from './als/als.component';
import { Form800Component } from './form800/form800.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
    {path: '', redirectTo: '/vehicle', pathMatch: 'full'},
    {path: 'vehicle', component: VehicleComponent},
    {path: 'bls',     component: BlsComponent },
    {path: 'als',     component: AlsComponent },
    {path: 'form800',     component: Form800Component },
    {path: 'help',     component: HelpComponent }
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
