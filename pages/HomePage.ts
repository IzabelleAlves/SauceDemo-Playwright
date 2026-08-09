import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  // Declaramos os localizadores da página
  readonly navMenu: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    super(page);
    // Atribuímos os elementos aos nossos localizadores
    this.navMenu = page.locator("nav");
    this.headerTitle = page.getByRole("heading", { name: /Just a demo site/i });
  }

  async goToHome() {
    await this.navigateTo("/");
  }
}
