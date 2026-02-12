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

export const navigateToStructure = async(page)=>{
    const AdminSubMenuObj = new AdminSubMenu(page);
    await AdminSubMenuObj.clickStructureMenu();
}

export const navigateToSkills = async(page)=>{
    const AdminSubMenuObj = new AdminSubMenu(page);
    await AdminSubMenuObj.clickSkillsMenu();
}

export const navigateToEducation = async(page)=>{
    const AdminSubMenuObj = new AdminSubMenu(page);
    await AdminSubMenuObj.clickEducationMenu();
}

export const navigateToLisences = async(page)=>{
    const AdminSumMenuObj = new AdminSubMenu(page);
    await AdminSumMenuObj.clickLisencesmenu();
}

export const navigateToLanguages = async(page)=>{
    const AdminSubMenuObj = new AdminSubMenu(page);
    await AdminSubMenuObj.clickLanguagesMenu();
}