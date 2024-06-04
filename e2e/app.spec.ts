import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');
  // Find the element grid button and add click
  await page.getByRole('link', { name: 'Navigate to grid page' }).click();
  //   // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/grid');
  //   // The new page should contain an h1 with "About"
  //   await expect(page.locator("h1")).toContainText("About");
});
