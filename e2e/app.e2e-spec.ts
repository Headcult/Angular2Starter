import { Angular2starterPage } from './app.po';

describe('angular2starter App', function() {
  let page: Angular2starterPage;

  beforeEach(() => {
    page = new Angular2starterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
