import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];

  addUser(user: { username: string; password: string }) {
    this.users.push(user);
  }

  validateUser(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }

  getAllUsers() {
    return this.users;
  }
}
