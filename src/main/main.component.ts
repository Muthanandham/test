import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ClipboardModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
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
