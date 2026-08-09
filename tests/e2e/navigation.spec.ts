import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CatalogPage } from "../../pages/CatalogPage";
import { BlogPage } from "../../pages/BlogPage";
import { AboutUsPage } from "../../pages/AboutUsPage";

test.describe("Navegação pelo Menu Principal", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    // Partimos da Home, exatamente como discutimos sobre Isolamento de Testes!
    await homePage.goToHome();
  });

  test("Deve navegar para a página de Catálogo", async ({ page }) => {
    const catalogPage = new CatalogPage(page);

    await homePage.clickMenuItem("Catalog");

    await expect(catalogPage.pageTitle).toBeVisible();
    await expect(catalogPage.productGrid).toBeVisible();
    
    const count = await catalogPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Deve navegar para a página do Blog", async ({ page }) => {
    const blogPage = new BlogPage(page);

    // 1. AÇÃO: Clica no menu Blog
    await homePage.clickMenuItem("Blog");

    // 2. ASSERÇÃO: Verifica se o primeiro post está visível
    await expect(blogPage.firstPost).toBeVisible();
  });

  test("Deve navegar para a página About Us", async ({ page }) => {
    const aboutUsPage = new AboutUsPage(page);

    // 1. AÇÃO: Clica no menu About Us
    await homePage.clickMenuItem("About Us");

    // 2. ASSERÇÃO: Verifica se o título da página Sobre Nós apareceu
    await expect(aboutUsPage.pageTitle).toBeVisible();
  });
});
