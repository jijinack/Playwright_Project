import {test,expect} from '../Fixtures/TestFixtures.js'

test.beforeEach('Login to SauceDemo', async({page})=>
{
    await page.goto('https://www.saucedemo.com/inventory.html')
});

test('Verify Home page and Add products to cart', async({page,home})=>
{  
    const hometitle = await home.VerifyHomeTitle();
    expect(hometitle).toContain('Swag Labs')
    await page.waitForTimeout(2000); 

    await expect(home.addToCartButton).toBeEnabled();

    await home.addProductToCart();
    const productName = await home.getProductName();
    console.log(productName);
    expect(productName).toBe('Sauce Labs Backpack');

    await home.clickCartIcon();
    await page.waitForTimeout(2000); 

});