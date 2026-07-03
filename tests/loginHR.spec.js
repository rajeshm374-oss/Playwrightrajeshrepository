import { test, expect } from '@playwright/test';
import testdata from "../testdata/testjsonformat.json"
import { faker } from '@faker-js/faker';

test('Verify the Login with valid user', async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(testdata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(testdata.Password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
});
test('Verify the add Employee', {tag :"@rajesh"}, async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.web_username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.web_password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  const firstName = Math.random().toString(36).replace(/[^a-z]/g, '').substring(0, Math.floor(Math.random() * 6) + 5);
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  console.log("name is enters")
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(faker.person.middleName());
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Mangalore');
  await page.getByRole('button', { name: 'Save' }).click();
});