import { NinjaDirectoryPage } from './app.po';

describe('ninja-directory App', () => {
  let page: NinjaDirectoryPage;

  beforeEach(() => {
    page = new NinjaDirectoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
