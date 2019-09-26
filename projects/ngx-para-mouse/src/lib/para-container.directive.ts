import { Directive, ElementRef, Input, HostBinding, OnInit } from '@angular/core';
import { fromEvent, never, merge } from 'rxjs';
import { ParaMouseService } from './para-mouse.service';
import { map, startWith } from 'rxjs/operators';
import { ParaOptions } from './i-para-options';

/** The container which holds any nested amount of para-elements */
@Directive({
  selector: '[paraContainer]',
  providers: [ParaMouseService]
})
export class ParaContainerDirective implements OnInit {
  @Input('paraContainer') options: ParaOptions;
  @HostBinding('style.overflow') overflow: string;
  constructor(private el: ElementRef, private ParaMouseService: ParaMouseService) {}
  ngOnInit() {
    // setting default values if options aren't provided, and setting the services values.
    // Since this is an element level provider, it will pass only to descendants.
    const defaultOptions: ParaOptions = {
      mouseOutReset: true,
      duration: '2s ease-out',
      slide: 5,
      overflow: 'hidden'
    };
    this.options = { ...defaultOptions, ...this.options };
    this.ParaMouseService.options = this.options;
    this.overflow = this.options.overflow;

    // Setting the adjustment observable which para-elements will use
    this.ParaMouseService;
    const mouseOutStream$ = fromEvent(this.el.nativeElement, 'mouseleave').pipe(
      map(() => {
        return {
          x: 0,
          y: 0
        };
      })
    );
    const natEl = this.el.nativeElement;
    const mouseMoveStream$ = fromEvent(this.el.nativeElement, 'mousemove').pipe(
      map((event: MouseEvent) => {
        return {
          x: event.pageX - natEl.offsetLeft - natEl.clientWidth / 2,
          y: event.pageY - natEl.offsetTop - natEl.clientHeight / 2
        };
      })
    );
    this.ParaMouseService.mouseStream$ = merge(
      mouseMoveStream$,
      this.options.mouseOutReset ? mouseOutStream$ : never()
    ).pipe(startWith({ x: 0, y: 0 }));
  }
}
