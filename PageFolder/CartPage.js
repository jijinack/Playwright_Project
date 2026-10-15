export class CartPage{
    constructor(page){
        this.page = page;
          this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
             this.checkoutButton = page.locator('[data-test="checkout"]');
             //this.carttitle = page.locator('[data-test="title"]')
    }

    // async VerifyCartTitle()
    // {
    //     return await this.carttitle.textContent();
    // }

    async continueShoppingEnabled() {
        await this.continueShoppingButton.isEnabled();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}