const { test, expect } = require('@playwright/test');

test('Add employee flow', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);

  await page.goto('/web/index.php/pim/addEmployee');
  await expect(page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();

  await page.getByRole('textbox', { name: 'First Name' }).fill('Rajesh');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('Mallari');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('g');

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Successfully Saved')).toBeVisible({ timeout: 20000 });
});
