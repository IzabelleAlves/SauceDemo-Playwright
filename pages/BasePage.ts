import { Page, Locator } from "@playwright/test";
export class BasePage {
  protected page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search' });
  }

  async navigateTo(path: string) {
    await this.page.goto(path);
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }
}
