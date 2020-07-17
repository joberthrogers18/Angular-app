import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  async getTitleText(): Promise<string> {
    browser.get(await element(by.css('app-root #learn')).getAttribute('href'));
    browser.sleep(5000);

    return element(
      by.id('tour-of-heroes-app-and-tutorial')
    ).getText() as Promise<string>;
  }
}
