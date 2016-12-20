import { AngularTeslaProjectPage } from './app.po';

describe('angular-tesla-project App', function() {
  let page: AngularTeslaProjectPage;

  beforeEach(() => {
    page = new AngularTeslaProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
