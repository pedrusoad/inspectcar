import { Injectable } from '@angular/core';
export interface Banner {
  name: string;
  src: string;
  srcMobile: string;
  type: 'weekday' | 'dateRange' | 'fixed';
  link?: string;         // 'http://w...'
  weekdays?: number[];      // 1-dom, 2-seg, 3-ter, 4-qua, 5-qui, 6-sex, 7-sab
  startDate?: string;       // '04/11/2025'
  endDate?: string;         // '25/12/2025'
}

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

  public banners: Banner[] = [
    {
      name: 'Seu Aniversário',
      src: 'assets/images/banners/seu-aniversario.jpg',
      srcMobile: 'assets/images/banners/seu-aniversario-mobile.jpg',
      type: 'fixed',
      link: 'https://api.whatsapp.com/send?phone=5562996767419&text=Ol%C3%A1%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20comemorar%20meu%20anivers%C3%A1rio%20no%20Ponto%20do%20A%C3%A7a%C3%AD!'
    },
    {
      name: 'Hallowen 2025',
      src: 'assets/images/banners/hallowen-25.jpg',
      srcMobile: 'assets/images/banners/hallowen-25-mobile.jpg',
      type: 'dateRange',
      startDate: '01/10/2025',
      endDate: '31/11/2025'
    }
  ];

}