import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[rfpWidgetToggle]'
})
export class RfpWidgetToggleDirective
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
