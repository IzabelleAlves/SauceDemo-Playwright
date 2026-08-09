import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("Navegação - Home Page", () => {
  test("Deve carregar a página inicial com sucesso", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goToHome();

    // 3. Validação (Assert): Validar o texto do h3 na página
    const expectedTitle = 'Just a demo site showing off what Sauce can do.';
    await expect(homePage.headerTitle).toHaveText(expectedTitle);
  });
});
