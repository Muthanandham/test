import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ClipboardModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Marvel';
  valueToCopy: any;
  template: string = '';
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  showText: boolean = false;
  constructor(private clipboard: Clipboard) {}
  ngOninit() {}
  onSubmit() {
    if (this.firstName !== '' && this.lastName !== '' && this.age !== '') {
      this.showText = true;

      this.template = `Your Name is ${this.firstName} ${this.lastName} and you are ${this.age} Old.`;
      this.clipboard.copy(this.template);
    }
  }
}
