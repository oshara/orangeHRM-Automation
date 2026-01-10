import { PayGradePage } from "../../../../pages/admin/job/pay-grades/payGrades";
import { loginValid } from "../../../login/login_valid"
import { navigatePayGrade } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";


export const deletePayGrade =async (page,payGradeName)=>{

    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigatePayGrade(page);

    const PayGradePageObj = new PayGradePage(page);

    await PayGradePageObj.deleteCreatedPayGrade(payGradeName);
    await page.waitForTimeout(3000);
    
}