export class CheckoutPage{
    constructor(page){
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('[data-test="continue"]');
        this.checkoutTitle = page.locator('[data-test="title"]')
    }
    async VerifyCheckoutTitle()
    {
        return await this.checkoutTitle.textContent();
    }

     async enterCustomerDetails(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}