import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AppModule } from '@core'
import { ShadeDirective } from '@directives';

@Component({
  selector: 'cfa-btn',
  standalone: true,
  imports: [
    AppModule,
    ShadeDirective
  ],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent implements AfterViewInit {

  @ViewChild('button') __button!: ElementRef<any>;

  /**
  * type do btn
  **/
  @Input() type?: 'button' | 'submit' | 'link' | 'link-e' = 'button'

  /**
   * adicionar clases no btn
   **/
  @Input() classes?: string
  /**
   * adicionar style no btn
   **/
  @Input() styles?: string

  /**
   * diretiva de disabled do botão
   **/
  @Input() disabled?: boolean

  /**
   * tema do btn
   */
  @Input() theme?: '01' | '02' | '03' | '04' | '05' = '01'

  /**
   * estilo do btn
   */
  @Input() variant?: 'gradient' | 'outline' | 'flat' = 'gradient'
  /**
   * tamanha da borda
   */
  @Input() borderWidth?: number = 1
  /**
   * tamanha da borda
   */
  @Input() borderRadius?: number = 4


  public cfaSize: any = 'md'
  public cfaColor: string = 'inverse'
  public cfaOpacity: number = 1
  public cfaBorder: number = 1


  private addStyleAtts() {
    this.__button.nativeElement.style.setProperty('--bs-border-width', `${this.borderWidth}px`);
    this.__button.nativeElement.style.setProperty('--bs-border-radius', `${this.borderRadius}px`);
  }
  private _configureShade() {
    switch (this.variant) {
      case 'flat':
        this.cfaSize = 'sm'
        this.cfaColor = 'inverse'
        this.cfaOpacity = .6
        break;
      case 'gradient':
        this.cfaSize = 'md'
        this.cfaColor = 'inverse'
        this.cfaOpacity = 1
        break;
      default:
        this.cfaSize = 'sm'
        this.cfaColor = 'inverse'
        this.cfaOpacity = 0
    }
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this._configureShade()
      this.addStyleAtts();

    }, 10)
  }
}
