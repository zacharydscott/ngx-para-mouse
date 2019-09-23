import { NgModule } from "@angular/core";
import { ParaContainerDirective } from './para-container.directive';
import { ParaElementDirective } from './para-element.directive';

// import this to start using the library
@NgModule({
    declarations: [ParaContainerDirective, ParaElementDirective],
    exports: [ParaContainerDirective, ParaElementDirective]
})
export class ParaMouseModule{ }
