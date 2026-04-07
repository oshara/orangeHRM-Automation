import { DependentsPage } from "../../../pages/myInfo/dependents/dependents";
import { MyInfoPage } from "../../../pages/navigationMenus/myInfo/myInforMenu"

export const contactMenuNav = async(page)=>{

    const ContactMenuObj = new MyInfoPage(page);
    await ContactMenuObj.clickContactDetailsMenu();

}

export const emergencyContactMenuNav = async(page)=>{

    const EmergencyContactMenuObj = new MyInfoPage(page)
    await EmergencyContactMenuObj.clickEmergencyContactMenu();
    
}

export const dependentsMenuNav = async(page)=>{
    const DependencyMenuObj = new MyInfoPage(page);
    await DependencyMenuObj.dependentsMenuClick();
}