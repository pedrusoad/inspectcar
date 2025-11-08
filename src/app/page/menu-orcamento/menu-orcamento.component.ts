import { Component } from '@angular/core';
import { AppService, BannerService, VehicleService, CommonService } from '@services';
import { AppModule } from '@core';
import { ProductCardComponent } from "@components";
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { BackComponent } from '@features';



import {
  SliderDirective
} from '@directives'

import {
  BtnLinkComponent,
  BtnComponent,
  BtnRouteComponent,
  FooterComponent,
  TimerComponent,
} from '@components'
const COMPONENTS = [
  BtnLinkComponent,
  BtnComponent,
  BtnRouteComponent,
  FooterComponent,
  TimerComponent,

]

@Component({
  selector: 'app-menu-orcamento',
  standalone: true,
  imports: [
    AppModule,
    BtnComponent,
    BtnLinkComponent,
    BtnRouteComponent,
    SliderDirective,
    ProductCardComponent,
    FormsModule,
    RouterModule,
    BackComponent

  ],
  templateUrl: './menu-orcamento.component.html',
  styleUrl: './menu-orcamento.component.scss',
  providers: [
    AppService,
    BannerService
  ]
})

export class MenuOrcamentoComponent {

  constructor(
    private AppService: AppService,
    private VehicleService: VehicleService,
    private router: Router,
    private CommonService: CommonService,


  ) { }

  public veiculo: any[] = [];

  public voltarHome() {
    this.VehicleService.veiculo = [];
    this.CommonService.delLocalStorage('veiculo');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500);
  }

  public editarCroqui(n: number): void {
    const lados: Record<number, string> = {
      1: 'lateral-direita',
      2: 'lateral-esquerda',
      3: 'frontal',
      4: 'traseira',
      5: 'teto'
    };

    const lado = lados[n];
    if (lado) {
      console.log('Navegando para o croqui do lado:', lado);
      this.router.navigate(['/croqui', lado]);
    } else {
      console.warn('Número inválido para o croqui:', n);
    }
  }



  ngOnInit(): void {
    if (!this.VehicleService.veiculo || this.VehicleService.veiculo.length === 0) {
      // this.router.navigate(['/']);
    }
    setTimeout(() => {
      this.veiculo = this.VehicleService.veiculo
      console.log(this.veiculo);
    }, 200);
    console.log('Veiculo principal:');
    console.log(this.VehicleService.veiculo);
    console.log('Veiculo backup:');
    console.log(this.VehicleService.backupVeiculo);
  }

}