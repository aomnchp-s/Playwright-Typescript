import {test, expect} from '@playwright/test';

test(
    'login with valid username should redirect to profile page', async({page}) => {
        //script for action.
        await page.goto('https://demoqa.com/login');
        //fill a data to textfield.
        await page.fill('id=userName','demoqa');
        await page.fill('id=password','Welcome1!');
        //click button.
        await page.click('id=login');

        //script for expected.
        //wait until see the logout button into 30 sec(time by defaullt).
        await page.waitForSelector('id=submit');
        const userName = await page.textContent('id=userName-value');
        await expect(userName).toEqual('demoqa');
    }
);