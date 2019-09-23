import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParaOptions } from './i-para-options';

@Injectable()
export class ParaMouseService {
  public mouseStream$: Observable<{x: number, y: number}>;
  public options: ParaOptions;
  constructor() { }
}
 