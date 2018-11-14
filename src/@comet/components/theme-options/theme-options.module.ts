import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';

import { CometDirectivesModule } from '@comet/directives/directives';
import { CometMaterialColorPickerModule } from '@comet/components/material-color-picker/material-color-picker.module';
import { CometSidebarModule } from '@comet/components/sidebar/sidebar.module';

import { CometThemeOptionsComponent } from '@comet/components/theme-options/theme-options.component';

@NgModule({
    declarations: [
        CometThemeOptionsComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,

        CometDirectivesModule,
        CometMaterialColorPickerModule,
        CometSidebarModule
    ],
    exports     : [
        CometThemeOptionsComponent
    ]
})
export class CometThemeOptionsModule
{
}
