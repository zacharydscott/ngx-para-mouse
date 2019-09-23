import { Directive, HostBinding, OnDestroy, Input, OnInit } from '@angular/core';
import { ParaMouseService } from './para-mouse.service';
import { Subscription } from 'rxjs';
import { ParaSlide, isNumber } from './i-para-slide';

@Directive({
  selector: '[ParaElement]'
})
export class ParaElementDirective implements OnDestroy, OnInit {
  @Input('ParaElement') slide: ParaSlide;
  @Input() duration: string;
  @HostBinding('style.transform') transform: string;
  @HostBinding('style.transition') elementDuration: string;

  private mouseSub: Subscription;

  constructor(private ParaMouseService: ParaMouseService) {}
  ngOnInit() {
    this.slide = this.slide || this.ParaMouseService.options.slide;
    console.log(this.slide)
    let xSlide;
    let ySlide;
    if (!isNumber(this.slide)) {
      xSlide = this.slide.xSlide*.01;
      ySlide = this.slide.ySlide*.01;
    } else {
      [xSlide, ySlide] = [this.slide*.01, this.slide*.01]
    }
    this.elementDuration = this.duration || this.ParaMouseService.options.duration;
    this.mouseSub = this.ParaMouseService.mouseStream$.subscribe((event: {x: number, y: number}) => {
      // console.log(event)
      this.transform =
        'translate(' +
        -event.x * xSlide +
        'px, ' +
        -event.y * ySlide +
        'px)';
    });
  }

  ngOnDestroy() {
    this.mouseSub.unsubscribe();
  }
}
