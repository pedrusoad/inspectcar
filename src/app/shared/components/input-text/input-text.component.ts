import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm, NgModel } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppModule } from 'app/core';
import { CommonService } from '@services';

@Component({
  selector: 'cfa-input-text',
  standalone: true,
  imports: [
    AppModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  providers: [
    provideNgxMask(),
    CommonService
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('ngInput') __ngInput!: NgModel

  /**Atributo name do input */
  @Input() name?: string

  /**
   * Atributo required do input
   * @default true
   **/
  @Input() required?: boolean = true;

  /**Atributo placeholder do input */
  @Input() placeholder?: string

  /**
   * Type do input
   * @param text input de texto
   * @param email input como tipo email, contento validação de email
   * @param tel input de telefone, com máscara de telefone e de números
   * @param document input para CPF/CNPJ, com máscara de CPF/CNPJ
   * @param area input de texto com mais de uma linha
   * @default 'text'
   */
  @Input() type?: 'text' | 'email' | 'tel' | 'document' = 'text'

  /**
   * Atributo disabled do input
   * @default false
   **/
  @Input() disabled?: boolean = false
  /**
   * adicionar clases no input
   **/
  @Input() classes?: string
  /**
   * dicionar style no input
   **/
  @Input() styles?: string
  /**
   * Atributo id do input
   **/
  @Input() id?: string

  /**
   * Atributo readOnly do input
   * @default false
   *  */
  @Input() readonly?: boolean = false

  /**
   * Adiciona a classe de 'isInvalid' no input
   * @default false
   *  */
  @Input() isInvalid?: boolean = false

  @Input() hideInvalidMsg?: boolean = false
  /**
   * Limite máxmimo de caracteres no input
   * @default 100
   * */
  @Input() maxlength?: number = 100

  /**
   * Limite mínimo de caracteres no input
   * @default 3
   * */
  @Input() minlength?: number = 3

  /**Pattern personalizada para o menu */
  @Input() pattern?: string

  /**Icone antes do texto do input */
  @Input() prefixIcon?: string

  /**Icone depois do texto do input */
  @Input() sufixIcon?: string

  /**Icone depois do texto do input */
  @Input() iconColor?: string

  /**Evento para quando o campo do input for alterado */
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  /**Evento para quadno o campo do input desfocado */
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();

  /**Evento para quadno o campo do input focado */
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();

  /**Define o label do input
   * Caso não seja passado o nome do input sera usado como label
   */
  @Input() label!: string

  /**
   * Popover de duvida
   */
  @Input() question?: any

  /**
   * placement do popover de question
   * @default 'top'
   * */
  @Input() questionPlacement?: 'top' | 'left' | 'right' | 'bottom' = 'top'

  /** Formulario do input*/
  @Input() ngForm!: NgForm

  /** Valor do input  */
  @Input() value?: string

  /** Mascara personalizada do input*/
  @Input() mask?: string
  @Input() showMaskTyped: boolean = false
  @Input() dropSpecialCharacters: boolean = true

  /** Tamanho do Input */
  @Input() size?: 'sm' | 'md' | 'lg' = 'lg'

  /**
   * Mostrar o tamnanho maximo input
   * @default false
   *  */
  @Input() showMaxLength?: boolean = false

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() requiredChange: EventEmitter<boolean> = new EventEmitter<boolean>();



  /**
   ** Patterns - BEGIN
   */


  public emailPattern = "[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  public dataPattern = "^(?:(?:(?:0[1-9]|1\d|2[0-9])\/(0[1-9]|1[0-2]))|(?:(?:29|30)\/(0[13-9]|1[0-2]))|(?:(?:31)\/(0[13578]|1[02])))(?:\/\d{4})$";
  public telMask = "(00) 0000-0000||(00) 0 0000-0000"


  /**
   ** Patterns - BEGIN
   */



  constructor(
    private CommonService: CommonService
  ) { }



  public onInputChange() {
    this.onChange.emit(this.value);
    this.valueChange.emit(this.value)
    if (this.type === 'document') {
      this.isInvalid = !this.CommonService.isValid(this.value!);
    }
  }

  /**
   ** Implements
   */

  ngOnInit(): void {
    if (!this.name) {
      this.name = this.label.trim().toLowerCase().normalize('NFC').replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-');
    }
    if (!this.id) {
      this.id = this.name;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ngForm.addControl(this.__ngInput)
    }, 0)
  }
  ngOnDestroy(): void {
    this.ngForm.removeControl(this.__ngInput);
  }
}
