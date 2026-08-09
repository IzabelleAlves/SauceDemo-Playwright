import { Page } from '@playwright/test';

/**
 * BasePage: Contém métodos comuns para todas as páginas (ex: navegação, cliques genéricos).
 * Isso evita repetição de código nas outras classes do POM.
 */
export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navega para a URL especificada
   */
  async navigateTo(path: string) {
    await this.page.goto(path);
  }

  /**
   * Retorna o título da página atual
   */
  async getPageTitle(): Promise<string> {
    return this.page.title();
  }
}
