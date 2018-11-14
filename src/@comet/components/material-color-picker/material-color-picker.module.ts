import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { CometPipesModule } from '@comet/pipes/pipes.module';

import { CometMaterialColorPickerComponent } from '@comet/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        CometMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        CometPipesModule
    ],
    exports: [
        CometMaterialColorPickerComponent
    ],
})
export class CometMaterialColorPickerModule
{
}
