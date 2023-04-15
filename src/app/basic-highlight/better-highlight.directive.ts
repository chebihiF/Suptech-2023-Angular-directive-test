import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private rendrer: Renderer2) { }
  
  
  ngOnInit(): void {
    //this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }

}
