import { CometConfig } from '@comet/types';

/**
 * Default Comet Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/pages/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */

export const cometConfig: CometConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme      : 'theme-default',
    customScrollbars: true,
    layout          : {
        style    : 'vertical-layout-1',
        width    : 'fullwidth',
        navbar   : {
            primaryBackground  : 'comet-navy-700',
            secondaryBackground: 'comet-navy-900',
            folded             : false,
            hidden             : false,
            position           : 'left',
            variant            : 'vertical-style-1'
        },
        toolbar  : {
            customBackgroundColor: false,
            background           : 'comet-white-500',
            hidden               : false,
            position             : 'below-static'
        },
        footer   : {
            customBackgroundColor: true,
            background           : 'comet-navy-900',
            hidden               : false,
            position             : 'below-fixed'
        },
        sidepanel: {
            hidden  : false,
            position: 'right'
        }
    }
};
