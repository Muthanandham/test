import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}
  username: string = '';
  password: string = '';
  errorMessage = '';

  ngOnint() {}
  signUp() {
    this.router.navigate(['sign-up']);
  }
  onSubmit() {
    const isValid = this.userService.validateUser(this.username, this.password);
    if (isValid) {
      this.router.navigate(['/main']);
    } else {
      this.errorMessage = 'Wrong credentials';
    }
  }
}
