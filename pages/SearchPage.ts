import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  readonly searchTitle: Locator;
  readonly productGrid: Locator;
  readonly productCards: Locator;
  readonly keywordMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.searchTitle = page.getByRole('heading', { name: 'Search Results' });
    this.keywordMessage = page.locator('#keyword');
    this.productGrid = page.locator('.product-grid');
    this.productCards = this.productGrid.locator('.columns'); 
  }
}
