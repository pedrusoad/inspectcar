import { Component } from '@angular/core';
import { AppService, BannerService } from '@services';
import { AppModule } from '@core';
import { ProductCardComponent } from "@components";
import { FormsModule } from '@angular/forms';


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
  portasSelecionadas: string = '';
  tipoSelecionado: string = '';

  // public banners: Banner[] = this.BannerService.banners

  // Banner

  // private parseBrDate(dateStr: string): Date {
  //   if (!dateStr || !dateStr.includes('/')) {
  //     return new Date('Invalid'); // garante que vai cair no filtro depois
  //   }

  //   const [day, month, year] = dateStr.split('/').map(Number);
  //   return new Date(year, month - 1, day);
  // }

//   getActiveBanners(): Banner[] {
//   const today = new Date();
//   const weekday = today.getDay() === 0 ? 1 : today.getDay() + 1;

//   return this.banners.filter(b => {
//     let validWeekday = true;
//     let validDate = true;

//     // Validar weekday (se tiver)
//     if (b.weekdays && b.weekdays.length > 0) {
//       validWeekday = b.weekdays.includes(weekday);
//     }

//     // Validar dateRange (se tiver)
//     if (b.startDate && b.endDate) {
//       const start = this.parseBrDate(b.startDate);
//       const end = this.parseBrDate(b.endDate);

//       if (isNaN(start.getTime()) || isNaN(end.getTime())) {
//         console.warn('Data inválida em banner:', b);
//         validDate = false;
//       } else {
//         end.setHours(23, 59, 59, 999);
//         validDate = today >= start && today <= end;
//       }
//     }

//     // Só entra se passar em todos os filtros que existem
//     return validWeekday && validDate;
//   });
// }



  // public categories = this.AppService.categorias;

  // Categoria Inicial Ativa
  // activeSection = this.categories[0].id;

  // @ViewChild('sticky') stickyElement!: ElementRef;

  // scrollToSection(id: string) {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     const stickyHeight = this.stickyElement.nativeElement.offsetHeight;
  //     const top = el.getBoundingClientRect().top + window.scrollY - stickyHeight;
  //     window.scrollTo({ top, behavior: 'smooth' });
  //   }
  // }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   for (const section of this.categories) {
  //     const el = document.getElementById(section.alias);
  //     if (el) {
  //       const rect = el.getBoundingClientRect();
  //       if (rect.top <= 150 && rect.bottom >= 100) {
  //         this.activeSection = section.id;
  //         this.scrollActiveItemIntoView();
  //         break;
  //       }
  //     }
  //   }
  // }

  // scrollActiveItemIntoView() {
  //   const activeBtn = document.querySelector('.btn.fw-bold');
  //   activeBtn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  // }

  ngOnInit(): void {
    this.marcas = this.AppService.getMarcas();
  }

}