import { CaminhoPage } from './app.po';

describe('caminho App', function() {
  let page: CaminhoPage;

  beforeEach(() => {
    page = new CaminhoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
