import { RfpPage } from './app.po';

describe('Rfp App', () => {
    let page: RfpPage;

    beforeEach(() => {
        page = new RfpPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to Rfp!');
    });
});
