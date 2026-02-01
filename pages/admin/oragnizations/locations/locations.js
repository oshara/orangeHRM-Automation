import {expect} from '@playwright/test';
export class LocationsPage{
    constructor(page){
        this.page =  page;
        this.addLocationButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');

        this.locationNameInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[1]/div/div[2]/input');
        this.cityInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[2]/div/div[2]/input');
        this.stateInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[3]/div/div[2]/input');
        this.zipCodeInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[4]/div/div[2]/input');

        this.countryDropdown = page.locator('//div[@class="oxd-select-wrapper"]');
        this.countryDropdownList = page.locator('//div[@role="listbox"]/div/span')
        this.phoneInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[6]/div/div[2]/input');
        this.faxInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[7]/div/div[2]/input');
        this.addressInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[8]/div/div[2]/textarea');
        this.notesInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[9]/div/div[2]/textarea');

        this.saveLocationButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.toastSuccessMessage = page.locator('//div[@class="oxd-toast-start"]/div[2]/p[2]');

        this.searchLoctionByNameInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[1]/div/div[2]/input');
        this.searchButton = page.locator('(//div[@class="oxd-form-actions"])/button[2]');
        this.locationTableRows = page.locator('//div[@class="oxd-table-card"]');
        this.locationTableRows2= page.locator('//div[@class="oxd-table-body"]/div/div');


    }

    async clickAddLocation(){
        await this.addLocationButton.click();
    }

    async fillLocationForm(locationName,city,state,zipCocde,country,phone,fax,address,notes){
        await this.locationNameInput.fill(locationName);
      await expect(this.locationNameInput).toHaveValue(locationName);
      console.log("Location Name entered is "+ locationName);

        await this.cityInput.fill(city);
        await this.stateInput.fill(state);  

        await this.zipCodeInput.fill(zipCocde);
        
        await this.countryDropdown.click();
        
        const countryCount = await this.countryDropdownList.count();
        console.log("Total Country Count is " +countryCount);

        for(let x=0;x< countryCount;x++){
            const selectedCountry = await this.countryDropdownList.nth(x).innerText();
            if(selectedCountry ==country){
                await this.countryDropdownList.nth(x).click();
                console.log("Selected Country is "+ selectedCountry);
                break;

            }
        }

        await this.phoneInput.fill(phone);
        await this.faxInput.fill(fax);
        await this.addressInput.fill(address);
        await this.notesInput.fill(notes);

        await this.saveLocationButton.click();
      

        await expect(this.toastSuccessMessage).toHaveText("Successfully Saved");
        
     
    }

    async searchLocationByName(locationName){
        await this.searchLoctionByNameInput.fill(locationName);
        await this.searchButton.click();
        await this.page.waitForTimeout(2000);
        const rowCount = await this.locationTableRows.count();
       
        for(let r=0;r< rowCount;r++){
            const row = await this.locationTableRows.nth(r);
            const tds = row.locator('div');
         for(let z=0;z< await tds.count();z++){
            const cellText = await tds.nth(z).innerText();
            if(cellText ==locationName){
                 expect(cellText).toBe(locationName);
                console.log("Location Name found in table: "+ cellText);
                break;
            }
         }

    }

    }
}
       