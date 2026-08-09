import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  readonly searchTitle: Locator;
  readonly productGrid: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    super(page);
    this.searchTitle = page.getByRole('heading', { name: 'Search Results' });
    this.productGrid = page.locator('.product-grid');
    // Para pegar a lista de produtos retornados (filhos da grid)
    this.productCards = this.productGrid.locator('.columns'); 
  }
}
