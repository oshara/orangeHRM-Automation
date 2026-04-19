import { ClaimMenuPage } from "../../../pages/navigationMenus/claims/claimMenu"

export const navigateToMyClaimMenu =async(page)=>{

    const ClaimMenuObj = new ClaimMenuPage(page);
    await ClaimMenuObj.clickMyClaimMenu(page);

}

export const navigateToEmployeeClaiMenu = async(page)=>{

    const ClaimMenuObj = new ClaimMenuPage(page);
    await ClaimMenuObj.clickEmployeeClaimMenu(page);
}