import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[cometWidgetToggle]'
})
export class CometWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
