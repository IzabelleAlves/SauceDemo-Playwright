import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

// Agrupamos os testes relacionados à Home usando test.describe
test.describe("Navegação - Home Page", () => {
  test("Deve carregar a página inicial com sucesso", async ({ page }) => {
    // 1. Instanciamos o nosso Page Object
    const homePage = new HomePage(page);

    // 2. Ação: Navegamos para a Home
    await homePage.goToHome();

    // 3. Validação (Assert): Verificamos se o título da página está correto
    // Observação: É uma boa prática de QA sempre ter pelo menos um 'expect' por teste.
    const title = await homePage.getPageTitle();

    // De acordo com o HTML capturado, o título tem "Sauce Demo"
    expect(title).toContain("Sauce Demo");
  });
});
