import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { RfpConfigService } from '@rfp/services/config.service';
import { RfpNavigationService } from '@rfp/components/navigation/navigation.service';
import { RfpPerfectScrollbarDirective } from '@rfp/directives/rfp-perfect-scrollbar/rfp-perfect-scrollbar.directive';
import { RfpSidebarService } from '@rfp/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-vertical-style-2',
    templateUrl  : './style-2.component.html',
    styleUrls    : ['./style-2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle2Component implements OnInit, OnDestroy
{
    rfpConfig: any;
    navigation: any;

    // Private
    private _rfpPerfectScrollbar: RfpPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {RfpConfigService} _rfpConfigService
     * @param {RfpNavigationService} _rfpNavigationService
     * @param {RfpSidebarService} _rfpSidebarService
     * @param {Router} _router
     */
    constructor(
        private _rfpConfigService: RfpConfigService,
        private _rfpNavigationService: RfpNavigationService,
        private _rfpSidebarService: RfpSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(RfpPerfectScrollbarDirective)
    set directive(theDirective: RfpPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._rfpPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._rfpNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._rfpPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        const activeNavItem: any = document.querySelector('navbar .nav-link.active');

                        if ( activeNavItem )
                        {
                            const activeItemOffsetTop       = activeNavItem.offsetTop,
                                  activeItemOffsetParentTop = activeNavItem.offsetParent.offsetTop,
                                  scrollDistance            = activeItemOffsetTop - activeItemOffsetParentTop - (48 * 3);

                            this._rfpPerfectScrollbar.scrollToTop(scrollDistance);
                        }
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._rfpSidebarService.getSidebar('navbar') )
                    {
                        this._rfpSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Get current navigation
        this._rfpNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._rfpNavigationService.getCurrentNavigation();
            });

        // Subscribe to the config changes
        this._rfpConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.rfpConfig = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._rfpSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._rfpSidebarService.getSidebar('navbar').toggleFold();
    }
}
