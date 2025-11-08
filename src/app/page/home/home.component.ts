import { Component } from '@angular/core';
import { AppService, BannerService, VehicleService, CommonService } from '@services';
import { AppModule } from '@core';
import { ProductCardComponent } from "@components";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


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
  selector: 'app-home',
  standalone: true,
  imports: [
    AppModule,
    BtnComponent,
    BtnLinkComponent,
    BtnRouteComponent,
    SliderDirective,
    ProductCardComponent,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    AppService,
    BannerService
  ]
})

export class HomeComponent {

  constructor(
    private AppService: AppService,
    private VehicleService: VehicleService,
    private router: Router,
    private CommonService: CommonService,
    // private BannerService: BannerService,
    // config: NgbCarouselConfig
  ) {
    // config.interval = 10000;
    // config.wrap = true;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  marcas: any[] = [];
  marcaSelecionada: string = '';
  modeloVeiculo: string = '';
  placaVeiculo: string = '';
  portasSelecionadas: string = '';
  tipoSelecionado: string = '';
  veiculoBackup: any[] = [];

  public verificarCampos() {
    if (
      !this.marcaSelecionada ||
      !this.modeloVeiculo ||
      !this.placaVeiculo ||
      !this.portasSelecionadas ||
      !this.tipoSelecionado
    ) {
      alert('Por favor, preencha todos os dados do veículo antes de continuar!');
    } else {
      this.VehicleService.veiculo.push({
        marca: this.marcaSelecionada,
        placa: this.placaVeiculo,
        modelo: this.modeloVeiculo,
        portas: this.portasSelecionadas,
        tipo: this.tipoSelecionado
      });
      this.VehicleService.backupVeiculo = [];
      this.VehicleService.backupVeiculo.push({
        marca: this.marcaSelecionada,
        placa: this.placaVeiculo,
        modelo: this.modeloVeiculo,
        portas: this.portasSelecionadas,
        tipo: this.tipoSelecionado
      });
      this.CommonService.delLocalStorage('veiculo');
      this.CommonService.delLocalStorage('backupVeiculo');
      this.CommonService.setLocalStorage('veiculo', this.VehicleService.veiculo, 1000000);
      this.CommonService.setLocalStorage('backupVeiculo', this.VehicleService.backupVeiculo, 1000000);
      this.router.navigate(['/menu-orcamento']);
    }
  }

  public carregaVeiculoBack() {
    this.marcaSelecionada = this.veiculoBackup[0].marca;
    this.modeloVeiculo = this.veiculoBackup[0].modelo;
    this.placaVeiculo = this.veiculoBackup[0].placa;
    this.portasSelecionadas = this.veiculoBackup[0].portas;
    this.tipoSelecionado = this.veiculoBackup[0].tipo;
  }

  ngOnInit(): void {
    if (this.CommonService.getLocalStorage('backupVeiculo')) {
      this.VehicleService.backupVeiculo = this.CommonService.getLocalStorage('backupVeiculo');
      this.veiculoBackup = this.CommonService.getLocalStorage('backupVeiculo');
      console.log(this.veiculoBackup);
    } else {
      console.log('Nenhum veículo de backup encontrado no localStorage.');
    }
    this.marcas = this.AppService.getMarcas();
    console.log('Veiculo principal:');
    console.log(this.VehicleService.veiculo);
    console.log('Veiculo backup:');
    console.log(this.VehicleService.backupVeiculo);

  }

}