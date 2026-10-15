import {test,expect} from '../Fixtures/TestFixtures.js';
test.beforeEach('Login to SauceDemo', async({page})=>
{
     await page.goto('https://www.saucedemo.com/checkout-step-two.html')
});

test('Click Finish', async({payment})=>
{
    await payment.clickFinishBtn();
})