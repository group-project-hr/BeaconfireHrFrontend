import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class UserFilesService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any[]> {
    return this.httpClient
      .get<any[]>('/api/visa/user/fileslist/1');
  }
}
