import {test} from '@playwright/test';
import { AdminSubMenu } from '../../../pages/navigationMenus/admin/adminSubMenu';

export const navigateJobTitle = async (page)=>{

    const AdminSuMenuObj = new AdminSubMenu(page);
    await AdminSuMenuObj.clickJobTitleMenu();

}

export const navigatePayGrade = async(page)=>{
    const AdminSuMenuObj = new AdminSubMenu(page);
    await AdminSuMenuObj.clickPayGradeMenu();
}

export const navigateEmploymentStatus = async(page) =>{
     const AdminSuMenuObj = new AdminSubMenu(page);
     await AdminSuMenuObj.clickEmploymentStatusMenu();
}

export const navigateJobCategories = async(page) =>{
    const AdminSuMenuObj = new AdminSubMenu(page);
    await AdminSuMenuObj.clickJobCategoriesMenu();
}

export const navigateWorkShifts = async(page) =>{
    const AdminSuMenuObj = new AdminSubMenu(page);
    await AdminSuMenuObj.clickWorkShiftsMenu();

}

export const navigateToGeneralInformation = async(page)=>{
    const AdminSuMenuObj = new AdminSubMenu(page);
    await AdminSuMenuObj.clickGeneralInformationMenu();
}

export const navigateToLocations = async(page)=>{
    const AdminSuMenuObj = new AdminSubMenu(page);
    await AdminSuMenuObj.clickLocationsMenu();
}