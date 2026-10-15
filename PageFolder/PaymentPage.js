export class PaymentPage{
    constructor(page){
    this.page = page;
    this.finishBtn = page.locator('#finish');
}

async clickFinishBtn(){
    await this.finishBtn.click();
    
}
}