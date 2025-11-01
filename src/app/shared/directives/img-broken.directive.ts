import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNavite = this.elHost.nativeElement;
    console.log('esta img revento --> ', this.elHost);
    elNavite.src = '/images/imagen_broken.png'    
  }
  constructor(private elHost: ElementRef) {
    // console.log(this.elHost);
  }

}
