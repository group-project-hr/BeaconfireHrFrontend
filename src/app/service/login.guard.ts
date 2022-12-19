import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router, private http: HttpService,) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let pathName = window.location.pathname;

    let userinfo = this.storage.get("beaconfire-session");

    return new Promise((resolve, reject) => {
      resolve(true)
      if (pathName.includes('test')) {
        resolve(true)
      } else if (!userinfo || !userinfo.basicDataModel || !userinfo.basicDataModel.roleEnum || !userinfo.basicDataModel.userId || !userinfo.basicDataModel.email) {
        if (userinfo && userinfo.basicDataModel && userinfo.basicDataModel.roleEnum && userinfo.basicDataModel.roleEnum == RoleEnum.READY_FOR_SIGNUP && pathName === '/registration') {
          resolve(true)
        } else if (pathName === '/login' || pathName === '/verifytoken') {
          resolve(true)
        } else {
          location.href = "/login"
        }
      }
      else if (userinfo.basicDataModel.roleEnum == RoleEnum.READY_FOR_SIGNUP) {
        if (pathName === '/registration') {
          resolve(true)
        } else {
          location.href = "/registration"
        }
      }
      else if (userinfo.basicDataModel.roleEnum == RoleEnum.READY_FOR_APPLICATION_FORM) {

        if (pathName === '/application-form') {
          resolve(true)
        } else {
          location.href = "/application-form"

        }
      }
      else if (userinfo.basicDataModel.roleEnum == RoleEnum.STANDARD_USER) {
        if (employeeRoutes.has(pathName)) {
          resolve(true)
        } else {
          location.href = "/employee/housing"
        }
      } else if (userinfo.basicDataModel.roleEnum == RoleEnum.ADMIN) {
        if (hrRoutes.has(pathName)) {
          resolve(true)
        } else {
          location.href = "/hr/user_status_management"
        }
      }
      else {
        location.href = '/login'
        resolve(true)
      }
    }
    )
    // resolve(true)
    // if (!userinfo || !userinfo.basicDataModel || !userinfo.basicDataModel.roleEnum || !userinfo.basicDataModel.userId || !userinfo.basicDataModel.email) {
    //   // this.router.navigate(["/login"])
    //   resolve( true)
    // } else if (true) {
    //   resolve( true)
    // } else {

    //   // verify Token
    //   var api = "/api/validateToken";
    //   this.http.get(api, {
    //     auth: {
    //       username: userinfo.token,
    //       password: ''
    //     }
    //   }).then((response: any) => {             
    //     if (response.data.success == false && response.data.message=="token_error") {
    //       this.router.navigate(["/login"])
    //     }else{
    //       resolve(true);
    //     }
    //   })
    // }
  }

}

enum RoleEnum {
  READY_FOR_SIGNUP = "READY_FOR_SIGNUP",
  READY_FOR_APPLICATION_FORM = "READY_FOR_APPLICATION_FORM",
  READY_FOR_UPLOAD_DOCUMENT = "READY_FOR_UPLOAD_DOCUMENT",
  STANDARD_USER = "STANDARD_USER",
  ADMIN = "ADMIN"
}

const employeeRoutes = new Set<String>().add('/').add("/employee/housing").add("/employee/visa/file/preview").add("/employee/visa")
  .add("/employee/visa/user/fileslist")

const hrRoutes = new Set<String>().add('/').add("/hr/user_status_management").add("hr/application_workflow")