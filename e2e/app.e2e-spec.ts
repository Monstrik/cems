import { CemsPage } from './app.po';

describe('cems App', () => {
  let page: CemsPage;

  beforeEach(() => {
    page = new CemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
