import { Component } from '@angular/core';

import { CometTranslationLoaderService } from '@comet/services/translation-loader.service';

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
     * @param {CometTranslationLoaderService} _cometTranslationLoaderService
     */
    constructor(
        private _cometTranslationLoaderService: CometTranslationLoaderService
    )
    {
        this._cometTranslationLoaderService.loadTranslations(english, turkish);
    }
}
