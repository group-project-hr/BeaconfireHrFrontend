import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilesListComponent } from './user-files-list.component';

describe('UserFilesListComponent', () => {
  let component: UserFilesListComponent;
  let fixture: ComponentFixture<UserFilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFilesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
