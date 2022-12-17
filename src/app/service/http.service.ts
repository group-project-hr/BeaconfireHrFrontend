import { Injectable } from '@angular/core';
import axios from "axios";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private storage: StorageService) {

    axios.interceptors.request.use(config => {
      let userinfo = this.storage.get("beaconfire-session");
      if (userinfo && config.headers) {
        config.headers["beaconfire-session"] = JSON.stringify(userinfo)
      }
      return config
    }, error => { return Promise.reject(error) })
    
    axios.interceptors.response.use(response => {
      if (response.data.basicDataModel) {
        this.storage.set("beaconfire-session", response.data)
      }
      return (response)
    }, error => {
      return Promise.reject(error)
    })


  }


  get(apiUrl: string, config?: any) {
    if (arguments.length == 1) {
      return new Promise((resolve, reject) => {
        axios.get(apiUrl,)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
      })
    } else if (arguments.length == 2) {
      return new Promise((resolve, reject) => {
        axios.get(apiUrl, config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
      })
    } else {
      return new Promise((resolve, reject) => {
        reject("parameter error");
      })
    }

  }
  post(apiUrl: string, params: any, config?: any) {
    if (arguments.length == 2) {
      return new Promise((resolve, reject) => {
        axios.post(apiUrl, params)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
      })
    } else if (arguments.length == 3) {
      return new Promise((resolve, reject) => {
        axios.post(apiUrl, params, config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error);
          });
      })
    } else {
      return new Promise((resolve, reject) => {
        reject("parameter error");
      })
    }
  }
}
