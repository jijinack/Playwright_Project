import {test,expect} from '../Fixtures/TestFixtures.js';


test.beforeEach('Login to SauceDemo', async({page})=>
{
    await page.goto('https://www.saucedemo.com/checkout-step-one.html')
});

test('Checkout', async({checkout})=>
{
    const checkTitle = await checkout.VerifyCheckoutTitle();
    expect(checkTitle).toBe('Checkout: Your Information');
    // await page.waitForTimeout(2000); 

    await checkout.enterCustomerDetails('Anu','Mol','670001');

    await checkout.clickContinue();
});