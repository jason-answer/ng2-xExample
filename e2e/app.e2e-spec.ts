import { ng2xExamplePage } from './app.po';

describe('ng2xExamplePage App', () => {
  let page: ng2xExamplePage;

  beforeEach(() => {
    page = new ng2xExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
