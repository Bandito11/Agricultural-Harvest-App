import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsAbundanceComponent } from './crops-abundance.component';

describe('CropsAbundanceComponent', () => {
  let component: CropsAbundanceComponent;
  let fixture: ComponentFixture<CropsAbundanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsAbundanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsAbundanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
