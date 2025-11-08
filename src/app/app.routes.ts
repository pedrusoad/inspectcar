import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { MenuOrcamentoComponent } from './page/menu-orcamento/menu-orcamento.component';
import { CroquiComponent } from './page/croqui/croqui.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu-orcamento',
    component: MenuOrcamentoComponent
  },
  {
    path: 'croqui/:alias',
    component: CroquiComponent
  },
  // {
  //   path: 'politica-de-privacidade',
  //   component: PrivacyPolicyComponent
  // },
  {
    path: '**',
    redirectTo:'',
    pathMatch:'full'
  }
];