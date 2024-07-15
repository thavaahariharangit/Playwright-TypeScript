import {type Locator, type Page } from '@playwright/test';

export class DocsPageModel {
  readonly page: Page;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  readonly installation: Locator;
  readonly article: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.installation = page.locator('h1', { hasText: 'Installation' });
    this.article = page.locator('article');
  }

  async goto() {
    await this.page.goto('https://playwright.dev/docs/intro');
  }

  async pageObjectModel() {
    await this.pomLink.click();
  }
}