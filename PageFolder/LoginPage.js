// import { expect } from '@playwright/test';

export class LoginPage{
    constructor(page){
        this.page = page
        this.userNameField = page.locator('#user-name');
        this.passwordFeild = page.locator('#password');
        this.LoginBtn = page.locator('#login-button');
    }
     async VerifyLoginTitle()
    {
        return await this.page.title()
    }
    
    async login(user,pass)
    {
        await this.userNameField.fill(user)
        await this.passwordFeild.fill(pass)
    }

    async clickLogin()
    {
        await this.LoginBtn.click()
    }

   
}