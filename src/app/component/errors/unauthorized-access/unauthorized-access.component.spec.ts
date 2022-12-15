import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedAccessComponent } from './unauthorized-access.component';

describe('UnauthorizedAccessComponent', () => {
  let component: UnauthorizedAccessComponent;
  let fixture: ComponentFixture<UnauthorizedAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
