import { Component, Input, OnInit, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '@services';
import { ProductCardComponent } from "@components";
import { CommonModule } from '@angular/common';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'products-card',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.scss',
  providers: [AppService]
})
export class ProductsCardComponent {

  constructor(
    private AppService: AppService
  ) { }

  public ano: number = new Date().getFullYear();

  @Input() product?: any

  private modalService = inject(NgbModal);
  closeResult: WritableSignal<string> = signal('');

  open(content: TemplateRef<any>) {
    console.log('Produto Selecionado:')
    console.log(this.product)

    this.modalService.open(content, { centered: true, size: 'xl' }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  public onImageError(event: Event) {
  const element = event.target as HTMLImageElement;
  element.src = 'assets/images/card-icon.jpeg';
}


  // // @Input() products?: any

  // public products = this.AppService.menuproducts;
  // public filterProduct: any;
  // public finished: boolean = false;

  // private startFilter() {
  //   this.filterProduct = this.products.filter((x) => x.categoria === this.categories.alias)
  //   this.filterProduct?this.finished = true:this.finished = false;
  // }

  ngOnInit(): void {
    // console.log(this.product)
  }
}
