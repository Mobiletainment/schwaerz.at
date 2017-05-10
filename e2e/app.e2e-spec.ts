import { Schwaerz.AtPage } from './app.po';

describe('schwaerz.at App', () => {
  let page: Schwaerz.AtPage;

  beforeEach(() => {
    page = new Schwaerz.AtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
