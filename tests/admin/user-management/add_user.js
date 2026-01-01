import { loginValid } from '../../login/login_valid';
import { navigateToAdminMenu } from '../../menu-navigation/navigation_menus';
import { AdminPage } from '../../../pages/admin/user-management/users/admin';


export const addUserFlow = async (page) => {
    await loginValid(page);
    await navigateToAdminMenu(page);

    const AdminObj = new AdminPage(page);
    await AdminObj.clickAddUser();

    await AdminObj.selectUserRole('ESS');
    await AdminObj.selectStatus('Enabled');
    await AdminObj.enterEmployeeName('Timothy Lewis');
    await AdminObj.enterUserName('tim1235');
    await AdminObj.enterPassword('Password123!','Password123!');
    await AdminObj.clickSaveBtn();
   
}