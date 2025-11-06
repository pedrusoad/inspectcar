import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '@services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  providers: [AppService]
})
export class ProductCardComponent {

  constructor(
    // private AppService: AppService
  ) { }

  // public ano: number = new Date().getFullYear();

  
}
