import { browser, by, element } from 'protractor';

export class CometPage {
    navigateTo(): any {
        return browser.get('/');
    }

    getParagraphText(): any {
        return element(by.css('app #main')).getText();
    }
}
