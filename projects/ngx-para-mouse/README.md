# Ngx-Para-Mouse

Provides a simple way to create mouse position driven parallax effects in your angular projects

## Setup

Download the package with:

```bash
npm install ngx-para-mouse --save
```

add it to the target NgModule (app module for root availability):

```bash
@NgModule({
    ...
    imports: [ParaMouseModule, ...]
    ...
})
```

## Basic Usage

Use the directives 'paraContainer' to an element to set it as the "window" to the parallax effect. In a child element, add the directive 'paraElement' to set it as an element that should respond to mouse position. You can nest multiple paraContainer elements. This will cause the element to move relative to it's parent, "stacking" the movement.

```bash
<div style="text-align:center">
  <div class="cont" paraContainer>
    <div class="para-1" paraElement>
      <img paraElementsrc="../assets/para-mouse.png" class="para-mouse" alt="">
    </div>
  </div>
</div>
```

## Configuration

Configuration is available, whichh can be passed through the paraContainer directive.

```bash
<div style="text-align:center">
  <div class="cont"
    [paraContainer]="{
      mouseOutReset: true,
      duration: '3s ease',
      slide: {xSlide: 15, ySlide: 25},
      overflow: 'hidden'
    }">
    <div class="para-1" paraElement>
      <img paraElement src="../assets/para-mouse.png" class="para-mouse" alt="">
    </div>
  </div>
</div>
```

The properties do the following:
- MouseOutReset (default: true)- causes the effect to reset when the
  cursor leaves the container
- Duration (default: '2s ease-out')- sets the transition-duration property
  for the underlying css
- Slide (default: 5)- sets the ratio of mouse movement to element movement in percentage,
can be a number or an object {xSlide: number, ySlide: number}.
- Overflow (default: true)- hides overflow of elements

Configurations are of type 'ParaOptions' if you want to use the interface for .ts creation.

```bash
export interface ParaOptions {
    mouseOutReset?: boolean;
    duration?: string;
    slide?: ParaSlide
    overflow?: string;
}
```

Finally, you can override the slide properties property on any paraElement
```bash
<div style="text-align:center">
  <div class="cont"
    [paraContainer]="{
      mouseOutReset: true,
      duration: '3s ease',
      slide: {xSlide: 15, ySlide: 25}, 
      overflow: 'hidden'
    }">
    <div class="para-1" [paraElement]="25">
    </div>
  </div>
</div>
```