/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProdaddComponent } from './prodadd.component';

describe('ProdaddComponent', () => {
  let component: ProdaddComponent;
  let fixture: ComponentFixture<ProdaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
