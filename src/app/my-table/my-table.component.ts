import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
// import { AttendanceService } from '../../services/attendanceService';
/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['./my-table.component.scss'],
  templateUrl: './my-table.component.html',
})
export class TablePaginationExample implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    ) {}

  displayedColumns = [
    'id', 
    'name', 
    'start_work', 
    'end_work',
    'date',

    // 'can_id',
    //  'name',
    //  'first',
    //  'second',
    //  'third',
    //  'fourth',
    //  'rec_time'
  ];

  dataSource: any = new MatTableDataSource();
  obj = [];


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.fetchData();
  }

  // fetchData() {
  //   this.dataSource.data = this.connectionAttendanceService.getAttendance();
  //   console.log(this.dataSource);
  // }// กรณีที่ mock up ข้อมูลมา ไม่ต้องรอ

  fetchData() {
    // this.connectionAttendanceService.getAttendance().then((obj) => {
    //   this.dataSource.data = obj;
    //   console.log(this.dataSource.data);
    // });
  }// กรณีที่ ใช้ promiss
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
