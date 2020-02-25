import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSideNavClose() {
    this.closeSideNav.emit();
  }

}
