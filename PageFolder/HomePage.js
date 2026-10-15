import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.itemName = page.locator('#inventory_item_name');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

     async VerifyHomeTitle()
    {
        return await this.page.title()
    }

    async isAddToCartEnabled() {
        return await this.addToCartButton.isEnabled();
    }

   async addProductToCart() {
        await this.addToCartButton.click();
    }

    async getProductName() {
    return await this.page.locator('.inventory_item_name').first().textContent();
    }

    async clickCartIcon(){
        await this.cartIcon.click();
    }

}