import { test, expect } from '@playwright/test';
test("Verdiy the login", async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
await page.locator("//input[@placeholder='Username']").fill("Admin")
await page.locator("//input[@placeholder='Password']").fill("admin123")
})