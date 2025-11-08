import { Component } from '@angular/core';
import { AppService, BannerService, VehicleService, CommonService } from '@services';
import { AppModule } from '@core';
import { ProductCardComponent } from "@components";
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';


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
    // private VehicleService: VehicleService,
    private router: Router,
    private route: ActivatedRoute,
    // private CommonService: CommonService,
  ) { }

  alias!: string;

  public voltarMenu() {
    setTimeout(() => {
      this.router.navigate(['/menu-orcamento']);
    }, 200);
  }

  ngOnInit(): void {
    this.alias = this.route.snapshot.paramMap.get('alias')!;
    console.log('Alias selecionado:', this.alias);
  }

}