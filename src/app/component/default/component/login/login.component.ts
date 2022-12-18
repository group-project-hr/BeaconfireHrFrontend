import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let loginRequest = {
        username: this.validateForm.value['username'],
        password: this.validateForm.value['password']
      }
      this.http.post("/authapi/auth/login", loginRequest).then((res: any) => {
        let userinfo = this.storage.get("beaconfire-session");
        if (userinfo) {
          console.log(userinfo.basicDataModel.roleEnum == RoleEnum.READY_FOR_APPLICATION_FORM)

          console.log(userinfo.basicDataModel.roleEnum)

          if (userinfo.basicDataModel.roleEnum === RoleEnum.READY_FOR_APPLICATION_FORM) {
            window.location.href = '/application-form'
          } else if (userinfo.basicDataModel.roleEnum == RoleEnum.STANDARD_USER) {
            console.log("!!!!!!!!!")
            window.location.href = '/employee/housing'
          }else if(userinfo.basicDataModel.roleEnum === RoleEnum.ADMIN){
            window.location.href = '/hr/user_status_management'
          }
      
        }
      }).catch(error => {
        alert(error.response.data)
      })

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder, private http: HttpService, private storage: StorageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}

enum RoleEnum {
  READY_FOR_SIGNUP = "READY_FOR_SIGNUP",
  READY_FOR_APPLICATION_FORM = "READY_FOR_APPLICATION_FORM",
  READY_FOR_UPLOAD_DOCUMENT = "READY_FOR_UPLOAD_DOCUMENT",
  STANDARD_USER = "STANDARD_USER",
  ADMIN = "ADMIN"
}