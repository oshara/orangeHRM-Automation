import { loginValid } from "../../../login/login_valid"
import { navigateToLocations } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";
import { QA_ENV} from '../../../../configs/qa.env'
import { LocationsPage } from "../../../../pages/admin/oragnizations/locations/locations";

export const addLocationFunc = async(page)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToLocations(page);

    const LocationObj = new LocationsPage(page);
    await LocationObj.clickAddLocation();
    await LocationObj.fillLocationForm(QA_ENV.oragnizationInfor.locationInfor.locationName,QA_ENV.oragnizationInfor.locationInfor.city,QA_ENV.oragnizationInfor.locationInfor.state,QA_ENV.oragnizationInfor.locationInfor.zipCode,QA_ENV.oragnizationInfor.locationInfor.country,QA_ENV.oragnizationInfor.locationInfor.phone,QA_ENV.oragnizationInfor.locationInfor.fax,QA_ENV.oragnizationInfor.locationInfor.address,QA_ENV.oragnizationInfor.locationInfor.notes);
    await page.waitForTimeout(4000);

    return QA_ENV.oragnizationInfor.locationInfor.locationName;

}