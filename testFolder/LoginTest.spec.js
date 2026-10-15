import {test,expect} from '../Fixtures/TestFixtures.js'

test('Login to SauceDemo', async({page,login})=>
{
    await page.goto('https://www.saucedemo.com');
       
    const logtitle = await login.VerifyLoginTitle();
    expect(logtitle).toContain('Swag Labs')
    await page.waitForTimeout(2000)

})
