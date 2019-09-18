import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLinkOperatorComponent } from './add-new-link-operator.component';

describe('AddNewLinkOperatorComponent', () => {
  let component: AddNewLinkOperatorComponent;
  let fixture: ComponentFixture<AddNewLinkOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewLinkOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLinkOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
