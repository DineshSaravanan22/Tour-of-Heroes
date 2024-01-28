import { style } from '@angular/animations';
import { Directive, ElementRef,Renderer2,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private value:ElementRef , private render:Renderer2  ) {
    // value.nativeElement.style.color = 'blue';
    // render.setStyle(value.nativeElement,'backgroundColor','red')
    // value.nativeElement.style.width ='200px';
   }
  //  @HostListener('mouseover')onmouse(){
  // this.render.addClass(this.value.nativeElement,'boxes')
  //  }
   @HostBinding('style.backgroundColer')value1:string ='blue';
   @HostBinding('style.color')black:string ='blue';

}
