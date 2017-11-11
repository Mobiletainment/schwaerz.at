import { SchwaerzAtPage } from './app.po';

describe('schwaerz.at App', () => {
  let page: SchwaerzAtPage;

  beforeEach(() => {
    page = new SchwaerzAtPage();
  });

  it('should display brand', () => {
    page.navigateTo();
    expect(page.getBrand()).toBeDefined();
  });
});
