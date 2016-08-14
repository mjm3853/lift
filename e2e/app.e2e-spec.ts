import { LiftPage } from './app.po';

describe('lift App', function() {
  let page: LiftPage;

  beforeEach(() => {
    page = new LiftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
