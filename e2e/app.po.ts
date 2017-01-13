import { browser, element, by } from 'protractor';

export class Angular2starterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-sidenav-layout div md-toolbar div md-toolbar-row button span md-icon')).getText();
  }
}
