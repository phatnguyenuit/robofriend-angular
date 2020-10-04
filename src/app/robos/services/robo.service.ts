import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Singleton service: 2 ways:
// Reference: https://angular.io/guide/singleton-services#singleton-services
// providedIn: 'root
// Include the service in the AppModule or in a module that is only imported by the AppModule

@Injectable()
export class RoboService {
  private static URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getList() {
    const users = this.http.get<Robo[]>(RoboService.URL).toPromise();
    return users;
  }
}
