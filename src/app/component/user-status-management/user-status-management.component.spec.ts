import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusManagementComponent } from './user-status-management.component';

describe('UserStatusManagementComponent', () => {
  let component: UserStatusManagementComponent;
  let fixture: ComponentFixture<UserStatusManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatusManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatusManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
