export class ClaimPage {
    constructor(page){
        this.page=page;
        this.assignClaimButton = page.locator('//div[@class="orangehrm-header-container"]/button');
        this.employeeNameInputField = page.locator('//div[@class="oxd-autocomplete-wrapper"]/div/input').first();
        this.employeeNameOptions= page.locator('//div[@role="option"]');
        this.eventOptionDropDown = page.locator('(//div[@class="oxd-select-wrapper"])[1]')
        this.eventList = page.locator('//div[@role="option"]');
        this.currenyDropDown = page.locator('(//div[@class="oxd-select-wrapper"])[2]');
        this.currencyList = page.locator('//div[@role="option"]');

        this.remarksInputField = page.locator('(//div[@class="oxd-form-row"])[3]/div/div/div/div[2]/textarea');
        this.saveButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');


        
    }

    async clickAssignClaimBtn(){
            await this.assignClaimButton.click();
            
        }

    async enterEmployeeName(employeeName){
        await this.employeeNameInputField.fill(employeeName);
        await this.page.waitForTimeout(2000);
        const employeeNameCount = await this.employeeNameOptions.count();

        for(let x=0; x< employeeNameCount;x++){
            const employeeNameText = await this.employeeNameOptions.nth(x).innerText();
            if(employeeNameText== employeeName){
                await this.employeeNameOptions.nth(x).click();
                break;
            }
        }
        
    }

    async clickEvent(eventName){
        await this.eventOptionDropDown.click();
        await this.page.waitForTimeout(2000);

        const eventListCount = await this.eventList.count();

        for(let x=0; x< eventListCount;x++){
            const eventText = await this.eventList.nth(x).innerText();
            if(eventText== eventName){
                await this.eventList.nth(x).click();
                break;
            }
        }
    }

    async clickCurreny(currency){
        await this.currenyDropDown.click();
        await this.page.waitForTimeout(4000);

        const currencyCount = await this.currencyList.count();
        console.log('currency count is '+currencyCount);

        for(let x=0; x<currencyCount; x++){
            const currencyText = await this.currencyList.nth(x).innerText();
            if(currencyText== currency){
                await this.currencyList.nth(x).click();
                break;
            }
        }
    }

    async enterRemarks(remarks){
        await this.remarksInputField.fill(remarks);
        await this.page.waitForTimeout(2000);

    }

    async clickSaveBtn(){
        await this.saveButton.click();
    }

    async fillClaimForm(employeeName,eventName,currency,remarks){
        await this.clickAssignClaimBtn();
        await this.enterEmployeeName(employeeName);
        await this.clickEvent(eventName);
        await this.clickCurreny(currency);
        await this.enterRemarks(remarks);

        await this.clickSaveBtn();
    }

}