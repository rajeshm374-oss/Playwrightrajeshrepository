import { test, expect } from '@playwright/test';
import testdata from "../testdata/testjsonformat.json"
import { faker } from '@faker-js/faker';
// const ExcelJS = require('exceljs');
const path = require('path');


test('Verify the add Employee-xlsx',  async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const emp="Admin";
  await page.getByRole('textbox', { name: 'Username' }).fill(emp);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.web_password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();

//   const workbook = new ExcelJS.Workbook();

//     await workbook.xlsx.readFile(
//         path.join(__dirname, '../testdata/excel.xlsx')
//     );
 
//     const worksheet = workbook.getWorksheet(1);

//     worksheet.eachRow((row, rowNumber) => {
//         if (rowNumber === 1) { // skip header
//            const  firstName = row.getCell(1).value;
//            const   lastName = row.getCell(2).value;
//             console.log(firstName, lastName);
//         }

  
  // await page.getByRole('textbox', { name: 'First Name' }).fill("raju");

  // await page.getByRole('textbox', { name: 'Middle Name' }).click();
  // await page.getByRole('textbox', { name: 'Middle Name' }).fill(faker.person.middleName());
  // await page.getByRole('textbox', { name: 'Last Name' }).click();
  // await page.getByRole('textbox', { name: 'Last Name' }).fill("m");
  // await page.getByRole('button', { name: 'Save' }).click();
});