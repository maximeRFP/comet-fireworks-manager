import { Component } from '@angular/core';

import { RfpTranslationLoaderService } from '@rfp/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {RfpTranslationLoaderService} _rfpTranslationLoaderService
     */
    constructor(
        private _rfpTranslationLoaderService: RfpTranslationLoaderService
    )
    {
        this._rfpTranslationLoaderService.loadTranslations(english, turkish);
    }
}
