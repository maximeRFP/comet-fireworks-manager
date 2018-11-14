import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { COMET_CONFIG } from '@comet/services/config.service';

@NgModule()
export class CometModule
{
    constructor(@Optional() @SkipSelf() parentModule: CometModule)
    {
        if ( parentModule )
        {
            throw new Error('CometModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : CometModule,
            providers: [
                {
                    provide : COMET_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
