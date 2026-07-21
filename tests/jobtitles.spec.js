const { test, expect } = require('@playwright/test');

test('Add a new job title in OrangeHRM', async ({ page }) => {
  const jobTitle = `Automation ${Date.now()}`;
  const description = 'Created by Playwright automation';

  await page.goto('/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard\/index/);

  await page.goto('/web/index.php/admin/viewJobTitleList');
  await page.getByRole('button', { name: /add/i }).click();

  await expect(page).toHaveURL(/saveJobTitle/);

  await page.locator('input[name="jobTitleName"]').fill(jobTitle);
  await page.locator('textarea').first().fill(description);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('.oxd-toast')).toContainText(/success|saved/i, { timeout: 15000 });
  await expect(page).toHaveURL(/viewJobTitleList/);
  await expect(page.locator('body')).toContainText(jobTitle);
});
