import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLinkOperatorsComponent } from './view-link-operators.component';

describe('ViewLinkOperatorsComponent', () => {
  let component: ViewLinkOperatorsComponent;
  let fixture: ComponentFixture<ViewLinkOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLinkOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLinkOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
