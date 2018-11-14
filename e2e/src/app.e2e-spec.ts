import { CometPage } from './app.po';

describe('Comet App', () => {
    let page: CometPage;

    beforeEach(() => {
        page = new CometPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Comet!');
    });
});
