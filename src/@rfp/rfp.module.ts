import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { RFP_CONFIG } from '@rfp/services/config.service';

@NgModule()
export class RfpModule
{
    constructor(@Optional() @SkipSelf() parentModule: RfpModule)
    {
        if ( parentModule )
        {
            throw new Error('RfpModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : RfpModule,
            providers: [
                {
                    provide : RFP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
