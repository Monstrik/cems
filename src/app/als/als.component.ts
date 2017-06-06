import {Component, OnInit} from '@angular/core';
import {Agency} from '../_models/agency';
import {AgencyService} from '../_services/agency.service';


@Component({
    selector: 'app-als',
    templateUrl: './als.component.html',
    styleUrls: ['./als.component.scss']
})
export class AlsComponent implements OnInit {
    agencies: Agency[] = [];

    constructor(private agencyService: AgencyService) {
    }

    ngOnInit(): void {
        let a = this;
        this.agencyService.getAgencies()
            .then(ttt)
        function ttt(agencies) {
          return a.agencies = agencies;
        }
            //.then(agencies => this.agencies = agencies);
    }
}


