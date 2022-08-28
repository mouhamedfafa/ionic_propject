import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';



@Injectable({ providedIn: 'root' })
export class UserService {


  urlUser="http://127.0.0.1:8000/api"
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.urlUser}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.urlUser}/users`,user);
    }

    delete(id: number) {
        return this.http.delete(`${this.urlUser}/users${id}`);
    }
}
