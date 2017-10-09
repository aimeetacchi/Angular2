import { CatDirectoryPage } from './app.po';

describe('cat-directory App', function() {
  let page: CatDirectoryPage;

  beforeEach(() => {
    page = new CatDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
