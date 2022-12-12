import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor() { }

  get(apiUrl: string, config?: any) {
    if (arguments.length == 1) {
      return new Promise((resolve, reject) => {
        axios.get(apiUrl)
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
    }else{
      return new Promise((resolve, reject) => {
        reject("parameter error");
      })
    }
  }
}
