import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsRecommendedComponent } from './crops-recommended.component';

describe('CropsRecommendedComponent', () => {
  let component: CropsRecommendedComponent;
  let fixture: ComponentFixture<CropsRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsRecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
