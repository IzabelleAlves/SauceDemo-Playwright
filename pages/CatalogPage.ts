import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CatalogPage extends BasePage {
  readonly pageTitle: Locator;
  readonly productGrid: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.getByRole('heading', { name: 'Products' });
    
    this.productGrid = page.locator('.product-grid');
    
    // Cada card de produto individual (a div que tem a classe 'four columns')
    this.productCards = this.productGrid.locator('.four.columns');
  }
}
