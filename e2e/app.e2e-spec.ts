import { SchwaerzAtPage } from './app.po';

describe('schwaerz.at App', () => {
  let page: SchwaerzAtPage;

  beforeEach(() => {
    page = new SchwaerzAtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getBrand()).toBeDefined();
  });
});
