import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CatalogPage } from "../../pages/CatalogPage";
import { BlogPage } from "../../pages/BlogPage";
import { AboutUsPage } from "../../pages/AboutUsPage";

test.describe("Navegação pelo Menu Principal", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
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

    await homePage.clickMenuItem("Blog");
    await expect(blogPage.firstPost).toBeVisible();
  });

  test("Deve navegar para a página About Us", async ({ page }) => {
    const aboutUsPage = new AboutUsPage(page);
    await homePage.clickMenuItem("About Us");
    await expect(aboutUsPage.pageTitle).toBeVisible();
  });
});
