import { CometNavigation } from '@comet/types';

export const navigation: CometNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'employe',
                title    : 'Employés',
                translate: 'NAV.EMPLOYE.TITLE',
                type     : 'item',
                icon     : 'people',
                url      : '/employes'
            }
        ]
    }
];
