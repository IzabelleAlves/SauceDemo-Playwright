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

  // Novo método: Como o menu de navegação aparece em todas as páginas,
  // ele deve pertencer à BasePage. Assim, qualquer página herda essa ação.
  async clickMenuItem(menuName: string) {
    // Para evitar o erro de Strict Mode (múltiplos elementos encontrados),
    // nós primeiro isolamos a busca para o menu principal (#main-menu)
    // e DEPOIS buscamos o link dentro dele.
    await this.page.locator('#main-menu').getByRole('link', { name: menuName, exact: true }).click();
  }
}
