import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { SearchPage } from "../../pages/SearchPage";

test.describe("Busca de Produtos", () => {
  test("Deve buscar um produto e exibir resultados na grid", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    await homePage.goToHome();

    await homePage.searchFor("tshirt");

    await expect(searchPage.searchTitle).toBeVisible();

    await expect(searchPage.productGrid).toBeVisible();

    const count = await searchPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Deve exibir mensagem de buscar produto inexistente", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);

    await homePage.goToHome();

    await homePage.searchFor("aaaa");

    await expect(searchPage.keywordMessage).toHaveText(
      "No results found for aaaa",
    );
    await expect(searchPage.productCards).toHaveCount(0);
  });
});
