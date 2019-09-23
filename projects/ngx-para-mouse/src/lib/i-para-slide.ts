// The typing for scaling the parallax effect
type xySlider = { xSlide: number; ySlide: number };
export type ParaSlide = number | { xSlide: number; ySlide: number };

export function isNumber(slide: number | ParaSlide): slide is number {
  return typeof slide === 'number';
}
