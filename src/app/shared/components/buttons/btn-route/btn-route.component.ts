import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { BtnComponent } from '@components';
import { AppModule } from '@core'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cfa-btn-route',
  standalone: true,
  imports: [
    AppModule,
    BtnComponent,
    RouterModule
  ],
  templateUrl: './btn-route.component.html',
  styleUrl: './btn-route.component.scss'
})
export class BtnRouteComponent {

  @ViewChild('button') __button!: TemplateRef<any>;


  /**
  * type do btn
  **/
  @Input() router?: string

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
  @Input() theme?: '01' | '02' | '03' | '04' = '01'

  /**
   * estilo do btn
   */
  @Input() variant?: 'gradient' | 'outline' | 'flat' = 'gradient'


}
