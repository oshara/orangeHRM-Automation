export class LocationsPage{
    constructor(page){
        this.page =  page;
        this.addLocationButton = page.locator('(//div[@class="orangehrm-header-container"])/div/button');

        this.locationNameInput = page.locator('//div[@class="oxd-grid-item oxd-grid-item--gutters"]/div[1]/div[2]/input');
        this.cityInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[2]/div/div[2]/input');
        this.stateInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[3]/div/div[2]/input');
        this.zipCodeInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[4]/div/div[2]/input');

        this.countryDropdown = page.locator('//div[@class="oxd-select-wrapper"]');
        this.phoneInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[6]/div/div[2]/input');
        this.faxInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[7]/div/div[2]/input');
        this.addressInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[8]/div/div[2]/textarea');
        this.notesInput = page.locator('(//div[@class="oxd-grid-item oxd-grid-item--gutters"])[9]/div/div[2]/textarea');

    }
}