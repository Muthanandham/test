import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },

  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
];
