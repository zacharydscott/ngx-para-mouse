import { Directive, ElementRef, AfterContentInit, Input, HostBinding } from '@angular/core';
import { fromEvent, never, merge } from 'rxjs';
import { ParaMouseService } from './para-mouse.service';
import { map, startWith } from 'rxjs/operators';
import { ParaOptions } from './i-para-options';

@Directive({
  selector: '[ParaContainer]',
  providers: [ParaMouseService]
})
export class ParaContainerDirective implements AfterContentInit {
  @Input('ParaContainer') options: ParaOptions;
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
    // Setting the adju

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
            x: event.offsetX - natEl.clientWidth / 2,
            y: event.offsetY - natEl.clientHeight / 2
          };
        })
      );
    this.ParaMouseService.mouseStream$ = merge(
      mouseMoveStream$,
      this.options.mouseOutReset ? mouseOutStream$ : never()
    ).pipe(startWith({x:0,y:0}));
  }
  ngAfterContentInit() {
    console.log('width', this.el.nativeElement.offsetWidth, this.el.nativeElement.offsetHeight);
  }
}
