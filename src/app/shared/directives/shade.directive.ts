import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[cfaShade]',
  standalone: true
})
export class ShadeDirective {

  /** Opacidade do 'Shade' */
  @Input() cfaOpacity: number = 1
  /** Tamanho do sombreamento do 'Shade' */
  @Input() cfaSize: 'sm' | 'md' | 'lg' | 'xl' = 'md'
  /**
   *  Cor do 'Shade'
   * @values 'theme-colors'
   * */
  @Input() cfaColor: string = 'inverse'
  /** Desabilitar o 'Shade' */
  @Input() cfaShadeDisabled: boolean = false


  constructor(
    private ElementRef: ElementRef
  ) {
    setTimeout(() => {
      if(!this.cfaShadeDisabled){
        const ELEMENT = this.ElementRef.nativeElement; //? Elemnto da diretiva
        const COLOR = getComputedStyle(document.querySelector(':root')!).getPropertyValue(`--bs-${this.cfaColor}-rgb`)
        ELEMENT.classList.add('shade__')
        ELEMENT.addEventListener('mousemove', (ev: any) => {
          const X = ev.layerX + 20;
          const Y = ev.layerY;

          ELEMENT.style.setProperty('--shade-mouse-x', `${X}px`);
          ELEMENT.style.setProperty('--shade-mouse-y', `${Y}px`);
          ELEMENT.style.setProperty('--shade-size', `${this._getShadeSize()}rem`);
          ELEMENT.style.setProperty('--shade-color', `${COLOR}`);
        })
        ELEMENT.addEventListener('mouseenter', (ev: any) => {
          ELEMENT.style.setProperty('--shade-opacity', this.cfaOpacity);
        })
        ELEMENT.addEventListener('mouseleave', (ev: any) => {
          ELEMENT.style.setProperty('--shade-opacity', 0);
        })
      }
    }, 1);
  }

  private _getShadeSize(): number {
    switch (this.cfaSize) {
      case 'sm': return 1;
      case 'md': return 2;
      case 'lg': return 3;
      case 'xl': return 4;
      default: return 2;
    }
  }

}