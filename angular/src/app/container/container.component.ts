import { TabLayoutComponent } from './../tab-layout/tab-layout.component';
import { StackLayoutComponent } from './../stack-layout/stack-layout.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { GridLayoutComponent } from '../grid-layout/grid-layout.component';
import { HostTemplateDirective } from '../directives/host-template.directive';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  // get the host directive, that contains reference to viewref
  @ViewChild(HostTemplateDirective)
  hostDirective: HostTemplateDirective;

  // ng-template viewContainer
  viewContainer: ViewContainerRef;

  componentsMap = {
    'grid': GridLayoutComponent,
    'stack': StackLayoutComponent,
    'tab': TabLayoutComponent
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.viewContainer = this.hostDirective.viewContainerRef;
    console.log(this.viewContainer)

    this.loadLayout('tab');
  }

  loadLayout(layoutName: string) {
      console.log('layout to load ', layoutName);

      let componentFactory = this.componentFactoryResolver
                                .resolveComponentFactory(this.componentsMap[layoutName]);
 
      this.viewContainer.clear();

    let componentRef = this.viewContainer.createComponent(componentFactory);


  }

}
