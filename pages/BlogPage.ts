import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class BlogPage extends BasePage {
  readonly firstPost: Locator;

  constructor(page: Page) {
    super(page);
    this.firstPost = page.getByText("First Post", { exact: false });
  }
}
