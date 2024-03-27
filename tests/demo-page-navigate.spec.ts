import {test} from '@playwright/test';

test(
    'demo page navigate', async({page}) =>{
        await page.goto('https://demoqa.com/');
        await page.click('h5 >> text=Elements');
        await page.waitForURL('**/elements');
    }
);

test(
    'demo page navigate use promise', async({page}) =>{
        await page.goto('https://demoqa.com/');
        await Promise.all([
            await page.click('h5 >> text=Elements'),
            await page.waitForURL('**/elements')
        ]);
    }
);

