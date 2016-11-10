import { Ang2appPage } from './app.po';

describe('ang2app App', function() {
  let page: Ang2appPage;

  beforeEach(() => {
    page = new Ang2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
