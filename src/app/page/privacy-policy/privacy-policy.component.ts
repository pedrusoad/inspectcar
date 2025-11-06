import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppModule } from '@core';
import { BtnComponent } from '@components';

import {
  FooterComponent,
} from "@components"
import { BackComponent } from '@features';

@Component({
  selector: 'cfa-privacy-policy',
  standalone: true,
  imports: [
    AppModule,
    FooterComponent,
    RouterModule,
    BtnComponent,
    BackComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor() { }

  ngOnInit() {
    window?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }

}