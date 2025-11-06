import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '@services';
import { ProductsCardComponent } from "@components";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'categorie-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ProductsCardComponent
  ],
  templateUrl: './categorie-menu.component.html',
  styleUrl: './categorie-menu.component.scss',
  providers: [AppService]
})
export class CategorieMenuComponent {

  constructor(
    private AppService: AppService
  ) { }

  public ano: number = new Date().getFullYear();

  @Input() categories?: any
  // @Input() products?: any

  public products = this.AppService.menuproducts;
  public filterProduct: any;
  public finished: boolean = false;

  private startFilter() {
    this.filterProduct = this.products.filter((x) => x.categoria === this.categories.alias)
    this.filterProduct?this.finished = true:this.finished = false;
  }
  
  ngOnInit(): void {
    this.startFilter()
  }
}
