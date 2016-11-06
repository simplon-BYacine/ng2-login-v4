import { Ng2LoginV4Page } from './app.po';

describe('ng2-login-v4 App', function() {
  let page: Ng2LoginV4Page;

  beforeEach(() => {
    page = new Ng2LoginV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
