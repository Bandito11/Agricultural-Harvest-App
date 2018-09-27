import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsNoproductionComponent } from './crops-noproduction.component';

describe('CropsNoproductionComponent', () => {
  let component: CropsNoproductionComponent;
  let fixture: ComponentFixture<CropsNoproductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsNoproductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsNoproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
