import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.css']
})
export class TabLayoutComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("Tab layout comp created")
  }

  ngOnInit() {
    console.log("Tab layout ngOnInit")
  }

  ngOnDestroy() {
    console.log("Tab layout ngOnDestroy")
  }

}
