import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { SearchPage } from "../../pages/SearchPage";

test.describe("Busca de Produtos", () => {
  // 1. Declaramos as variáveis fora para que tanto o beforeEach quanto os testes possam enxergá-las.
  let homePage: HomePage;
  let searchPage: SearchPage;

  // 2. Usamos o test.beforeEach do próprio Playwright
  test.beforeEach(async ({ page }) => {
    // 3. Instanciamos as páginas antes de CADA teste
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
    
    // 4. Executamos a pré-condição que se repete
    await homePage.goToHome();
  });
  
  test("Deve buscar um produto e exibir resultados na grid", async () => {
    await homePage.searchFor("tshirt");

    await expect(searchPage.searchTitle).toBeVisible();
    await expect(searchPage.productGrid).toBeVisible();

    const count = await searchPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Deve exibir mensagem de buscar produto inexistente", async () => {
    await homePage.searchFor("aaaa");

    await expect(searchPage.keywordMessage).toHaveText(
      "No results found for aaaa",
    );
    await expect(searchPage.productCards).toHaveCount(0);
  });
});
