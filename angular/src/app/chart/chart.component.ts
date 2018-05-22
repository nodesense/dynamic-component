import { Component, OnInit, Output, EventEmitter, ViewRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Output()
  removeChild: EventEmitter<any> = new  EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.removeChild.emit(this);
  }

}
