import {test} from '@playwright/test';
import { NavigationMenuPage } from '../../pages/navigationMenus/navigationMenu';


export const navigateToAdminMenu = async(page)=>{

    const NavMenu = new NavigationMenuPage(page);
    await NavMenu.clickAdminMenu();

}

export const navigateToPimMenu = async(page)=>{

    const NavMenu = new NavigationMenuPage(page);
    await NavMenu.clickPimMenu();
}

export const navigateToLeaveMenu = async (page)=>{

    const NavMenu = new NavigationMenuPage(page);
    await NavMenu.clickLeaveMenu();

}

export const navigateToTimeMenu = async (page)=>{

    const NavMenu = new NavigationMenuPage(page);
    await NavMenu.clickTimeMenu();
}