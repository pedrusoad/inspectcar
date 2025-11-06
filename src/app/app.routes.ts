import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'politica-de-privacidade',
    component: PrivacyPolicyComponent
  },
  {
    path: '**',
    redirectTo:'',
    pathMatch:'full'
  }
];