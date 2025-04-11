import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router,private userService: UserService) {}
  username: string = '';
  password: string = '';
  ngOnint() {}
  alreadyUser() {
    this.router.navigate(['login']);
  }
  onSubmit() {
    if (this.username && this.password) {
      this.userService.addUser({ username: this.username, password: this.password });
      this.router.navigate(['/login']);
    }
  }
}
