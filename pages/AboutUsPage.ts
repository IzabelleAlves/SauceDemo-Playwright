import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AboutUsPage extends BasePage {
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    // Baseado no codegen: locator '#page-content' com heading 'About Us'
    this.pageTitle = page.locator('#page-content').getByRole('heading', { name: 'About Us' });
  }
}
