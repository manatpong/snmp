import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }

  selected_menu: string;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  

  ngOnInit() {

    this.selected_menu = 'my-dashboard';

  }


  selectMenu(event) {

    this.selected_menu = event.currentTarget.id;

  }


}
