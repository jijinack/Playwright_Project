import{test as base,expect} from '@playwright/test'

import{ LoginPage } from '../PageFolder/LoginPage.js'
import{ HomePage } from '../PageFolder/HomePage.js'
import{ CartPage } from '../PageFolder/CartPage.js'
import{ CheckoutPage } from '../PageFolder/CheckoutPage.js';
import { PaymentPage } from '../PageFolder/PaymentPage.js';

export const test = base.extend({
    login: async({page},use)=>{
        const login = new LoginPage(page);
        await use(login);
    },

     home: async({page},use)=>{
        const home = new HomePage(page);
        await use(home);
    },

     cart: async({page},use)=>{
        const cart = new CartPage(page);
        await use(cart);
    },

     checkout: async({page},use)=>{
        const checkout = new CheckoutPage(page);
        await use(checkout);
    },

    payment: async({page},use)=>{
        const payment = new PaymentPage(page);
        await use(payment);
    }
});
export{expect};