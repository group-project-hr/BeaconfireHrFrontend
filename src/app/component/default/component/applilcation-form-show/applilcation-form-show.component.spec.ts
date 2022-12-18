import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplilcationFormShowComponent } from './applilcation-form-show.component';

describe('VisaComponent', () => {
  let component: ApplilcationFormShowComponent;
  let fixture: ComponentFixture<ApplilcationFormShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplilcationFormShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplilcationFormShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
