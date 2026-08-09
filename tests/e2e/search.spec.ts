import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { SearchPage } from "../../pages/SearchPage";

test.describe("Busca de Produtos", () => {
  test("Deve buscar um produto e exibir resultados na grid", async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    // 1. Pré-condição: Estar na home
    await homePage.goToHome();

    // 2. Ação: Fazer a busca
    await homePage.searchFor('tshirt');

    // 3. Validação: Estar na tela de Search Results
    await expect(searchPage.searchTitle).toBeVisible();

    // 4. Validação: A grid de produtos deve aparecer
    await expect(searchPage.productGrid).toBeVisible();

    // 5. Validação: Deve ter retornado pelo menos 1 produto
    const count = await searchPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });
});
