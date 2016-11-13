import { TopCrazePage } from './app.po';

describe('top-craze App', function() {
  let page: TopCrazePage;

  beforeEach(() => {
    page = new TopCrazePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
