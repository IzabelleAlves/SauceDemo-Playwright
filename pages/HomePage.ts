import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * HomePage: Representa a página inicial (Home) do sistema.
 * Aqui ficam todos os seletores (Locator) e ações específicas dessa página.
 */
export class HomePage extends BasePage {
  // Locators
  // Exemplo: O botão de carrinho, a barra de busca, etc.
  // Como o site é um Shopify padrão, vamos usar alguns seletores genéricos por enquanto
  // e podemos ajustá-los depois de inspecionar a página real.

  // readonly searchInput: Locator;
  // readonly cartIcon: Locator;

  constructor(page: Page) {
    super(page); // Chama o construtor da BasePage

    // Inicialização dos Locators
    // this.searchInput = page.locator('input[type="search"]');
    // this.cartIcon = page.locator('.cart-icon, [href="/cart"]');
  }

  /**
   * Navega diretamente para a Home Page
   */
  async goToHome() {
    // Como a baseUrl está no playwright.config.ts, passamos apenas '/'
    await this.navigateTo("/");
  }

  // Exemplos de métodos que podemos adicionar depois:
  // async searchForProduct(productName: string) { ... }
  // async goToCart() { ... }
}
