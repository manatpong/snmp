import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';

import * as _ from 'lodash';

@Injectable()
export class AttendanceService {

    private ROOT_URL: string = 'localhost:44333/';
    //private ROOT_URL: string = 'http://192.168.60.225/';

    constructor(private _http: Http) { };

    getAttendance() {

         const headers: any = new Headers({ 'Content-Type': 'application/json' });
         const options: any = new RequestOptions({ headers: headers });
        const return_object = [];

        return this._http.get(this.ROOT_URL + 'APIs/get_working/index.php', { headers: headers })
        //return this._http.get(this.ROOT_URL + 'log/can/protocol_desc.php', { headers: headers })
             .toPromise().then((response: any) => {
                 const response_object = JSON.parse(response._body);

                // response_object.forEach(function (obj) {
                //     return_object['id'] = obj['id'];
                //     return_object['name'] = obj['name'];
                //     return_object['start_work'] = obj['start_time'];
                //     return_object['end_time'] = obj['end_time'];
                //     return_object['date'] = obj['end'];
                // });
                _.each(response_object, (obj) => {

                    return_object.push({
                        'id': obj['id'],
                        'name': obj['name'],
                        'start_work': obj['start_work'],
                        'end_work': obj['end_work']
                    });
                });
                // _.each(response_object, (obj) => {
                //     return_object.push({
                //         'can_id': obj['can_id'],
                //         'first': obj['1st'],
                //         'second': obj['2nd'],
                //         'third': obj['3rd'],
                //         'fourth': obj['4th'],
                //         'name': obj['name'],
                //         'rec_time': obj['rec_time']
                //     });
                // });

                return return_object;
            //    // console.log(return_object);

            }).catch((error: any) => {
                // ERROR FROM SERVER
                if (error.status && error.status !== 0) {
                    console.error('GET WORKING ERROR ' );
                    return ({ status: 'error', error: 'ERROR ' + error.status });

                    // ERROR FROM CLIENT
                } else {
                    console.error('GET CONNECTION HISTORY ERROR 500 Internal Server');
                    return ({ status: 'error', error: 'ERROR 500' });
                }

            });
            

        // const mock_data = [{ 
        //     'num': 1, 
        //     'name': 'Manatpong', 
        //     'start_work': Date(), 
        //     'end_work': Date()
        // },
        // {
        //     'num': 2, 
        //     'name': 'Janjira', 
        //     'start_work': Date(), 
        //     'end_work': Date()
        // }]

        //return mock_data;
    }
}