import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SnmpService } from 'services/snmp.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {

  snmpData: any = [];

  constructor( public snmpService: SnmpService) {}

  ngOnInit() {
    console.log('dashboard page');
    this.fetchSnmpData();
  }

  fetchSnmpData() {
    console.log('fetchSnmpData');
    this.snmpService.getSnmpData().then((data) => {
      this.snmpData = data;
    })
    
  }

  showData() {
    console.log(this.snmpData);
  }

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];


}
