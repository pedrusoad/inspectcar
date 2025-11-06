import { Component } from '@angular/core';

import {
  BtnComponent
} from "@components"

@Component({
  selector: 'feature-back',
  standalone: true,
  imports: [
    BtnComponent
  ],
  templateUrl: './back.component.html',
  styleUrl: './back.component.scss'
})
export class BackComponent {

  public goToTop() {
    let mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      window?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

}