import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoboService {
  private static URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getList() {
    const users = this.http.get<Robo[]>(RoboService.URL).toPromise();
    return users;
  }
}
