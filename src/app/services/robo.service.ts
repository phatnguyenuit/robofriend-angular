import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoboService {
  private static URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getList() {
    const users = this.http.get<User[]>(RoboService.URL).toPromise();
    return users;
  }
}

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: { lat: string; lng: string };
    lat: string;
    lng: string;
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
}
