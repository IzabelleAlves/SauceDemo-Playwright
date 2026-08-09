import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class BlogPage extends BasePage {
  readonly firstPost: Locator;

  constructor(page: Page) {
    super(page);
    // Baseado no codegen: '12 Mar First Post Posted by'
    // Como profissionais, evitamos amarrar locators a datas ou textos mutáveis.
    // Usamos um { exact: false } apenas na parte principal do texto para tornar o teste mais robusto.
    this.firstPost = page.getByText('First Post', { exact: false });
  }
}
