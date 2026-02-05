import { LocationsPage } from "../../../../pages/admin/oragnizations/locations/locations";
import { loginValid } from "../../../login/login_valid"
import { navigateToLocations } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";



export const deleteAddedLocationFunc = async(page,locationName)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigateToLocations(page);

    const LocationObj = new LocationsPage();
    await LocationObj.searchLocationByName(locationName);
    await LocationObj.deleteLocationByName(locationName);
    await page.pause();
}