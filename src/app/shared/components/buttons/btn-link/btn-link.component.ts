import { Component, ElementRef, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { BtnComponent } from '@components';
import { AppModule } from '@core'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'btn-link',
  standalone: true,
  imports: [
    AppModule,
    BtnComponent,
    RouterModule
  ],
  templateUrl: './btn-link.component.html',
  styleUrl: './btn-link.component.scss'
})
export class BtnLinkComponent implements OnChanges {

  constructor() {
    setTimeout(() => {
      this.addedLink()
      this.addedDownload()
    }, 100)
  }
  @ViewChild('linkButton') __link_button!: ElementRef<any>;

  /**
  * target do link
  **/
  @Input() target?: '_blank' | '_self' = '_blank'

  /**
  * href do link
  **/
  @Input() href?: string

  /**
  * download do link
  **/
  @Input() download?: string

  /**
   * adicionar clases no btn
   **/
  @Input() classes?: string
  /**
   * adicionar style no btn
   **/
  @Input() styles?: string
  /**
   * tema do btn
   */
  @Input() theme?: '01' | '02' | '03' | '04' | '05' = '01'

  /**
   * estilo do btn
   */
  @Input() variant?: 'gradient' | 'outline' | 'flat' = 'gradient'
  /**
   * disabled do btn
   */
  @Input() disabled?: boolean

  private addedLink() {
    if (this.href === undefined || this.disabled) {
      delete this.__link_button.nativeElement.href
    } else {
      this.__link_button.nativeElement.href = this.href
    }
  }
  private addedDownload() {
    if (this.download === undefined || this.disabled) {
      delete this.__link_button.nativeElement.href
    } else {
      this.__link_button.nativeElement.download = this.download
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']?.currentValue !== undefined) {
      setTimeout(() => {
        this.addedLink()
        this.addedDownload()
      }, 10)
    }
  }
}
