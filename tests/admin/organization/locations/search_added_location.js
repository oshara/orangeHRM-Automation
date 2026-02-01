import { LocationsPage } from "../../../../pages/admin/oragnizations/locations/locations";
import { loginValid } from "../../../login/login_valid"
import { navigateToLocations } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";
import { QA_ENV } from "../../../../configs/qa.env";

export const searchAddedLocationFunc = async(page, locationName)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToLocations(page);
    
    const LocationObj = new LocationsPage(page);
    await LocationObj.searchLocationByName(locationName);

}