import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, CauthenticationService } from '../_services/index';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.scss']
})


export class CloginComponent implements OnInit {


  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: CauthenticationService,
      private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    // alert(JSON.stringify(this.model));
    // alert('this.returnUrl=' + this.returnUrl);
    // localStorage.setItem('currentUser', JSON.stringify(this.model));
    // this.router.navigate([this.returnUrl]);
    // this.loading = true;
    this.authenticationService.login('z')
        .subscribe(
            data => {
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
  }
}



