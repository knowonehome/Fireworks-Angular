import { FireworkAppPage } from './app.po';

describe('firework-app App', () => {
  let page: FireworkAppPage;

  beforeEach(() => {
    page = new FireworkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
