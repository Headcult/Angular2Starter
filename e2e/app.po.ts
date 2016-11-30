import { browser, element, by } from 'protractor';

export class Angular2starterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-sidenav-layout')).isPresent();
  }
}
