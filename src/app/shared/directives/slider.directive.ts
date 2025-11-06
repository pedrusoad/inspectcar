import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

import KeenSlider, { KeenSliderInstance, KeenSliderOptions } from 'keen-slider'
@Directive({
  selector: '[cfaSlider]',
  standalone: true
})
export class SliderDirective implements AfterViewInit, OnDestroy {
  @Input() config?: KeenSliderOptions
  public slider?: KeenSliderInstance

  constructor(
    private ElementRef: ElementRef
  ) { }

  private transformMainRef() {
    /**
     ** Adcionar a classe do keen-slider para o elemento principal
     */
    const ELEMENT: Element = this.ElementRef.nativeElement; //? Elemnto da diretiva
    ELEMENT.classList.add("keen-slider")

  }

  private transformSlides() {
    /**
     ** Adcionar a classe do keen-slide para todos os slides
     */
    const ELEMENT: Element = this.ElementRef.nativeElement; //? Elemnto da diretiva
    const SLIDES = ELEMENT.querySelectorAll("[slide]")
    SLIDES.forEach((slide) => {
      slide.classList.add("keen-slider__slide")
    })
  }

  ngAfterViewInit(): void {
    this.transformMainRef();
    this.transformSlides();
    const ELEMENT: any = this.ElementRef.nativeElement; //? Elemnto da diretiva
    this.slider = new KeenSlider(ELEMENT, this.config)
  }

  ngOnDestroy(): void {
    this.slider?.destroy();
  }
}
