import {test} from '@playwright/test';

test(
    'basic playwright locator', async({page}) =>{
        await page.goto('https://demoqa.com/login');
        await page.fill('id=userName','aomnchp');
        await page.fill('css=input[type="password"]','Aom@1234');
        await page.click('id=login');
        //await page.waitForNavigation(); **DEPRECATED, use frame.waitForURL() instead.
        const findUserName = await page.waitForSelector('id=userName-value');
        const userNameTxt = await findUserName.textContent();
        console.log('Text: ' + userNameTxt);
    }
);