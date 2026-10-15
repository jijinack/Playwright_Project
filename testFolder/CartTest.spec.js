import {test,expect} from '../Fixtures/TestFixtures.js';

test.beforeEach('Login to SauceDemo', async({page})=>
{
    await page.goto('https://www.saucedemo.com/cart.html')
});

test('Verify cart', async({cart})=>
{      
    // await home.addProductToCart();
    // await homePage.clickCartIcon();

    await expect(cart.continueShoppingButton).toBeEnabled();

    await cart.proceedToCheckout();

})