import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CauthenticationService {
    constructor(private http: Http) {
    }

    login(name: string) {
        console.log('sevice call detected');
        // localStorage.setItem('currentUser', JSON.stringify({ username: username, password: password }));
        // const data= 'UserLogin%5BDriver2%5D=Joel++Rubin&UserLogin%5BDriver%5D=4732&UserLogin%5BEMT2%5D=Willis++Sands&UserLogin%5BEmt%5D=90006&UserLogin%5BUnitNumber%5D=34&UserLogin%5Bbus%5D=31&UserLogin%5Buser%5D=4732&UserLogin%5Bpass%5D=Rubin%24';


        const data = {
            'Driver': 4732,
            'Driver2': 'Joel  Rubin',
            'Emt': 90006,
            'EMT2': 'Willis  Sands',
            'UnitNumber': 34,
            'bus': 31,
            'user': 4732,
            'pass': 'Rubin$',
        };

        return this.http.post(
            'http://localhost/cemslocal/yiicems/index.php?r=Login/ApiLogin',
            JSON.stringify(data)
        ).map((response: Response) => {
            console.log(response.json());
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}