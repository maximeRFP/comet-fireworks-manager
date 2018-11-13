import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { RfpPipesModule } from '@rfp/pipes/pipes.module';

import { RfpMaterialColorPickerComponent } from '@rfp/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        RfpMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        RfpPipesModule
    ],
    exports: [
        RfpMaterialColorPickerComponent
    ],
})
export class RfpMaterialColorPickerModule
{
}
