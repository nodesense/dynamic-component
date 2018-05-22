import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackLayoutComponent } from './stack-layout.component';

describe('StackLayoutComponent', () => {
  let component: StackLayoutComponent;
  let fixture: ComponentFixture<StackLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
