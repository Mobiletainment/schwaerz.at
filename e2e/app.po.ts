import { browser, by, element } from 'protractor';

export class SchwaerzAtPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrand() {
    return element(by.css('app-root .brand'));
  }
}
