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

export const navigateToRecruitmentMenu = async(page)=>{
    const NavMenu = new NavigationMenuPage(page);
    await NavMenu.clickRecruitementMenu();
}


export const navigateToMyInfoMenu = async(page)=>{
    const NavMenu = new NavigationMenuPage(page);
    await NavMenu.clickMyInforMenu();
}

export const navigateToClaimMenu = async(page)=>{
    const NavMenu = new NavigationMenuPage(page);
    await NavMenu.clickClaimMenu();
}