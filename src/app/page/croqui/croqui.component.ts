import { Component } from '@angular/core';
import { AppService, BannerService, VehicleService, CommonService } from '@services';
import { AppModule } from '@core';
import { ProductCardComponent } from "@components";
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


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
  selector: 'app-croqui',
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
  templateUrl: './croqui.component.html',
  styleUrl: './croqui.component.scss',
  providers: [
    AppService,
    BannerService
  ]
})

export class CroquiComponent {

  constructor(
    // private AppService: AppService,
    private VehicleService: VehicleService,
    private router: Router,
    private route: ActivatedRoute,
    // private CommonService: CommonService,
  ) { }

  alias!: string;
  marks: { xPercent: number; yPercent: number }[] = [];
  public veiculo: any[] = [];

  public voltarMenu() {
    setTimeout(() => {
      this.router.navigate(['/menu-orcamento']);
    }, 200);
  }


  onImageClick(event: MouseEvent) {
    const container = (event.currentTarget as HTMLElement).getBoundingClientRect();

    const x = event.clientX - container.left;
    const y = event.clientY - container.top;

    const xPercent = (x / container.width) * 100;
    const yPercent = (y / container.height) * 100;

    this.marks.push({ xPercent, yPercent });
  }

  ngOnInit(): void {
    if (!this.VehicleService.veiculo || this.VehicleService.veiculo.length === 0) {
      this.router.navigate(['/']);
    }
    this.veiculo = this.VehicleService.veiculo
    this.alias = this.route.snapshot.paramMap.get('alias')!;
    console.log('Alias selecionado:', this.alias);
  }

}