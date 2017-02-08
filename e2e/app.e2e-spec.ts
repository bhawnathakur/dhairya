import { DhairyaPage } from './app.po';

describe('dhairya App', function() {
  let page: DhairyaPage;

  beforeEach(() => {
    page = new DhairyaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
