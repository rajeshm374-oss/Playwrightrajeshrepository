import { test, expect } from '@playwright/test';

const credit = {
    set1 :{username :"Admin", password : "invlaidpassword"},
    set2 :{username :"invalidusername", password:"admin123"},
    set3 :{username :"Admin", password:"admin123"}
}
for(let running in credit){

test(`verify the run multiple- ${running}`, async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
await page.locator("//input[@placeholder='Username']").fill(credit[running].username)

await page.locator("//input[@placeholder='Password']").fill(credit[running].password)
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('button', { name: 'Login' }).isVisible()
})

}