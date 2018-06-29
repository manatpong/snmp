import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

// Reactive
import { Observable } from 'rxjs';

// Third-Party
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root',
})
export class SnmpService {

    //private ROOT_URL: string = 'http://192.168.60.171/';

    constructor(private _http: Http) { }

    getSnmpData() {

        const headers: any = new Headers({ 'Content-Type': 'application/json' });
        const options: any = new RequestOptions({ headers: headers });
        const return_object = [];

        return this._http.get('http://192.168.60.171/APIs/snmp/index.php', { headers: headers })
            .toPromise().then((response: any) => {
                const response_object = JSON.parse(response._body);

                _.each(response_object, (obj) => {

                    return_object.push({
                        'server_id': obj['server_id'],
                        'name': obj['name'],
                        'color': obj['color'],
                        'value': obj['value'],
                        'img_path': 'http://192.168.60.171'+obj['img_path'],
                        'machine_desc': obj['machine_desc'],
                        'value_percent': obj['value_percent']
                    });
                });
                // console.log(response_object);
                // console.log(return_object);
                return return_object;

            }).catch((error: any) => {
                // ERROR FROM SERVER
                if (error.status && error.status !== 0) {
                    console.error('GET CONNECTION HISTORY ERROR ' + error.status, Observable.throw(new Error(error.status)));
                    return ({ status: 'error', error: 'ERROR ' + error.status });

                    // ERROR FROM CLIENT
                } else {
                    console.error('GET CONNECTION HISTORY ERROR 500 Internal Server');
                    return ({ status: 'error', error: 'ERROR 500' });
                }

            });



    }
}