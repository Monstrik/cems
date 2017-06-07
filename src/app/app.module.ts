import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, CauthenticationService, AuthenticationService, UserService } from './_services/index';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';


import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {BlsComponent} from './bls/bls.component';
import {AlsComponent} from './als/als.component';
import {Form800Component} from './form800/form800.component';
import {HelpComponent} from './help/help.component';

import {AgencyService} from './_services/agency.service';
import { CloginComponent } from './clogin/clogin.component';


@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavComponent,
        FooterComponent,
        VehicleComponent,
        BlsComponent,
        AlsComponent,
        Form800Component,
        HelpComponent,
        CloginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        RouterModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        CauthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,

        AgencyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
