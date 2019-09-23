import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParaOptions } from './i-para-options';


// NOT a root level service. This is used for providing information to parallax items
// from the container
@Injectable()
export class ParaMouseService {
  public mouseStream$: Observable<{x: number, y: number}>;
  public options: ParaOptions;
  constructor() { }
}
