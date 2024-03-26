import {test} from '@playwright/test';

test(
    'access menu by hover', async({page}) =>{
        await page.goto('https://playwright.dev/');
        await page.hover('css=div.navbar__item.dropdown--hoverable');
        await page.click('css=a[href="/python/"]');
        
        /*const findEleTxt = await page.waitForSelector('css=b.navbar__title.text--truncate');
        const txt = await findEleTxt.textContent();
        console.log('${txt}');*/
        await page.waitForSelector('text= Playwright for Python');
    }
);