import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CatalogPage extends BasePage {
  readonly pageTitle: Locator;
  readonly productGrid: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    super(page);
    // Título da página para validar que o menu funcionou
    this.pageTitle = page.getByRole('heading', { name: 'Products' });
    
    // A section inteira da grid que você encontrou no HTML
    this.productGrid = page.locator('.product-grid');
    
    // Cada card de produto individual (a div que tem a classe 'four columns')
    this.productCards = this.productGrid.locator('.four.columns');
  }
}
