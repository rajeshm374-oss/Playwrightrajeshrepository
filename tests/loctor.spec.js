import { test, expect } from '@playwright/test';
import testdat from '../testdata/testdata.json';

test('Verify the login page', async ({ page }) => {
  await page.goto('web/index.php/auth/login');
  await expect(page.locator('//p[@class="oxd-text oxd-text--p"][1]') ).toContainText("Username : Admin");
 await expect(page.locator ('//p[@class="oxd-text oxd-text--p"][1]')).toBeVisible("Username : Admin");
await expect(page.locator('//p[@class="oxd-text oxd-text--p"][1]')).toHaveText("Username : Admin");
await expect(page.locator('//p[text()="Password : admin123"]')).toHaveText("Password : admin123");

  await page.locator('//input[@name=username"]').fill(testdat.username);
  await page.locator('//button[ contains(.,"Login")]').click();
   await page.locator('//input[@class="oxd-input oxd-input--active" and @placeholder="Search"]').fill('rajesh');
   await page.locator('//button[@type="button" or @class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
   ////button[starts-with(type, "button")]
   // //button[contains(attrbutes name, "value")]
   await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click();
   await page.locator('//div[@class="oxd-brand-banner"]/img').click();
   await page.locator('//img[@src="/web/images/orangehrm-logo.png?v=1783336755185"]/../..').click();
    //span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]/following-sibling::time
    //(//span[@class="oxd-topbar-body-nav-tab-item"])[3]/parent::li
    //li[@class="oxd-topbar-body-nav-tab --parent --visited"]/child::span/child::i
    //(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[5]/ancestor::div 
    //getByText()
    //getByPlaceholder()
    //getByAltText()
    //getByTitle()
    //getByLabel()
    //getbyTestId() configutaion need to chech other wise data-testid 
    //getByRole()
  })