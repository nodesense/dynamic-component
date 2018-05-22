import { ChartComponent } from './../chart/chart.component';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostTemplateDirective } from '../directives/host-template.directive';
import { ReportComponent } from '../report/report.component';
import { ProgressComponent } from '../progress/progress.component';
import { MyGridApplicationComponent } from '../my-grid-application/my-grid-application.component';

@Component({
  selector: 'app-stack-layout',
  templateUrl: './stack-layout.component.html',
  styleUrls: ['./stack-layout.component.css']
})
export class StackLayoutComponent implements OnInit {

  @ViewChild(HostTemplateDirective)
  hostDirective: HostTemplateDirective;

  // ng-template viewContainer
  viewContainer: ViewContainerRef;

  componentsMap = {
    'grid': MyGridApplicationComponent,
    'chart': ChartComponent,
    "report": ReportComponent,
    "progress": ProgressComponent
  }
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 

  }

  
  ngOnInit() {
    this.viewContainer = this.hostDirective.viewContainerRef;
    console.log(this.viewContainer)

    this.loadComponent('grid');
  }

  loadComponent(componentName: string) {
      console.log('component to load ', componentName);

       let componentFactory = this.componentFactoryResolver
                                .resolveComponentFactory(this.componentsMap[componentName]);

     let componentRef = this.viewContainer.createComponent(componentFactory);
     let component: ChartComponent = <ChartComponent>componentRef.instance;
     
     if (component.removeChild) {
        component.removeChild.subscribe( comp => {
          console.log("Susbcribe called")
          let index = this.viewContainer.indexOf(componentRef.hostView);
          this.viewContainer.remove(index)
        })
     }
    

  }

  removeRandom() {
    console.log("Components Length ", this.viewContainer.length)
    let index = Math.floor(Math.random() * (this.viewContainer.length + 1));
    console.log(index)
    this.viewContainer.remove(index) 
  }

  clear() {
    this.viewContainer.clear();
  }

}
