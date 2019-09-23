import { ParaSlide } from './i-para-slide';

/**
 *  Setting of basic parallax options which sets global and default values
 * @property {mouseOutReset} default: true- causes the effect to reset when the
 * @property {duration} default: '2s ease-out'- sets the transition-duration property
 * for the underlying css
 * @property {slide} default: 5- sets the ratio of mouse movement to element movement in percentage,
can be a number or an object {xSlide: number, ySlide: number}.
 * @property {overflow} default: true- hides overflow of elements
 */
export interface ParaOptions {
    mouseOutReset?: boolean;
    duration?: string;
    slide?: ParaSlide
    overflow?: string;
}
