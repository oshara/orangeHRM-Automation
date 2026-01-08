import { PayGradePage } from "../../../../pages/admin/job/pay-grades/payGrades";
import { loginValid } from "../../../login/login_valid";
import { navigatePayGrade } from "../../../menu-navigation/admin-menu-navigations/admin_menu_navigations";
import { navigateToAdminMenu } from "../../../menu-navigation/navigation_menus";



export const addNewPayGrade = async (page) => {
    await loginValid(page);
    await navigateToAdminMenu(page);
    await navigatePayGrade(page);

    const PayGradePageObj = new PayGradePage(page);
    const payGradeName = `Pay Grade _${Date.now()}`;
    await PayGradePageObj.addPayGrade(payGradeName);
    await PayGradePageObj.addCurrencyToGrade('AUD - Australian Dollar');

    await PayGradePageObj.fillMinimumSalary('500');
    await PayGradePageObj.fillMaximumSalary('1500');
    await PayGradePageObj.saveCurrencyButton();


   return payGradeName;
}
