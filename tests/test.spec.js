import { test } from '@playwright/test';
import { addUserFlow } from './admin/user-management/add_user';
import { searchUserTest } from './admin/user-management/search_added_user';
import { deleteUserTest } from './admin/user-management/delete_added_user';
import { addJob } from './admin/jobs/job-titles/add_job';
import { printoutJobTable } from './admin/jobs/job-titles/printout_job_table';
import { basicJobTableFunc } from './admin/jobs/job-titles/basic_job_table_func';
import { addNewPayGrade } from './admin/jobs/pay-grades/add_pay_grade';
import { searchAddedPayGrade } from './admin/jobs/pay-grades/search_added_pay_grade';
import { deletePayGrade } from './admin/jobs/pay-grades/delete_added_pay_grade';
import { addEmploymentStatus } from './admin/jobs/employment-status/add_employment_status';
import { searchAddedEmployStatus } from './admin/jobs/employment-status/search_added_employment_status';
import { deleteEmploymentStatus } from './admin/jobs/employment-status/delete_employment_status';
import { addJobCategoryFun } from './admin/jobs/job-categories/add_job_categories';
import { searchJobCategoriesFunc } from './admin/jobs/job-categories/search_job_categories';
import { deleteJobCategoriesFunc } from './admin/jobs/job-categories/delete_job_categories';
import { editGeneralInfor } from './admin/organization/general-information/edit_general_information';
import { addLocationFunc } from './admin/organization/locations/add_location';
import { searchAddedLocationFunc } from './admin/organization/locations/search_added_location';
import { QA_ENV } from '../configs/qa.env';
import { addNewStructureFunc } from './admin/organization/structure/add_structure';
import { searchAddedStructureFunc } from './admin/organization/structure/search_structure';
import { deleteAddedStructureFunc } from './admin/organization/structure/delete_structure';
import { addNewSkillFunc } from './admin/qualifications/skills/add_skill';
import { searchAddeSkillFunc } from './admin/qualifications/skills/search_skill';
import { deleteAddedSkillFunc } from './admin/qualifications/skills/delete_skill';
import { addLicenseFunc } from './admin/qualifications/licenses/add_license';
import { searchLicenseFunc } from './admin/qualifications/licenses/search_license';
import { deleteLicenseFunc } from './admin/qualifications/licenses/delete_license';
import { addMembershipsFunc } from './admin/qualifications/memberships/add_memberships';
import { searchMembershipFunc } from './admin/qualifications/memberships/search_memberships';
import { deleteMembershipFunc } from './admin/qualifications/memberships/delete_memberships';
import { editDOBFunc, editDrivingLicenseFunc, editEmployeeIDFunc, editMaritalStatusFunc, editNationalityFunc } from './myInfo/personal-details/edit_custom_field';
import { addAttachmentFunc } from './myInfo/personal-details/add_attachment';
import { editBloodTypeFunc, editTextFieldFunc } from './myInfo/personal-details/edit_personal_details';
import { editContactDetailsFunc, editEmailAddressFunc, editTelephoneDetailsFunc } from './myInfo/contact-details/edit_contact_details';
// test.describe('Admin Module -Users section', () => {

//     test('Add user', async ({ page }) => {
//         await addUserFlow(page);
//     })

//     test('Search the newly added user', async ({ page }) => {
//         await searchUserTest(page);
//     });

//     test('Delete the newly added user', async ({ page }) => {

//         await deleteUserTest(page);
//     });


// });

test.describe('Admin Module -Jobs section', () => {

    // test('Add Job Title', async ({ page }) => {
    //     await addJob(page);
    // });

    // test('Print out the Job Table', async ({ page }) => {
    //     await printoutJobTable(page);
    // })

    // test("Basic Job Table Functions", async ({ page }) => {
    //     await basicJobTableFunc(page);
    // })

    // test("Search a Job Title that was added", async ({ page }) => {
    //     await searchAddedJob(page);

    // });

    // test("Pay Grade - Add New Pay Grade", async ({ page }) => {
    //     await addNewPayGrade(page);
    // });

    // test("Pay Grade - Search Added Pay Grade", async ({ page }) => {
    //     await searchAddedPayGrade(page);
    // });

    // test('Pay Grade - Delete the added Pay Grade', async ({ page }) => {
    //     await deletePayGrade(page);
    // })

    // test("Employment Status - Add New Employment Status", async ({ page }) => {
    //     await addEmploymentStatus(page);
    // })

    // test("Employment Status - Search Added Employment Status", async ({ page }) => {
    //     await searchAddedEmployStatus(page);
    // });

    // test('Employment Status - Delete the added Employment Status', async ({ page }) => {
    //     await deleteEmploymentStatus(page);
    // });

    test("Job Categories - Add New Job Category", async ({ page }) => {
        await addJobCategoryFun(page);
          await page.waitForTimeout(3000);
    });

  

    test("Job Categories - Search the Added Job Category",async({page})=>{
        await searchJobCategoriesFunc(page);
          await page.waitForTimeout(3000);

    });
    test('Job Categories - Delete the Added Job Category',async({page})=>{
        await deleteJobCategoriesFunc(page);
    });

});

test.describe('Admin Module - Organization section', () => {
    test('General Information -Edit General Information', async({page})=>{
        await editGeneralInfor(page);
    });

    test("Locations - Add New Location",async({page})=>{
        const addedLocationName = await addLocationFunc(page);
        console.log("Added Location Name: " + addedLocationName);
    })

    test("Locations - Search the Added Location",async({page})=>{
        const locationName = QA_ENV.oragnizationInfor.locationInfor.locationName;
        await searchAddedLocationFunc(page, locationName);
    })
    test('Locations- Delete the Added Location' ,async({page})=>{
        const locationName = QA_ENV.oragnizationInfor.locationInfor.locationName;
        await searchAddedLocationFunc(page, locationName);
    })

    test('Structure - Add New Structure',async({page})=>{
        const addedStructureName = await addNewStructureFunc(page);
        console.log("Added Structure Name: " + addedStructureName);
    })

    test('Structure - Search the Added New Structure',async({page})=>{
        const structureName = QA_ENV.oragnizationInfor.structureInfor.name;
        await searchAddedStructureFunc(page, structureName);
       
    })

    test('Structure - Delete the Added Structure' , async({page})=>{
        await deleteAddedStructureFunc(page);
    });

    
});

    test.describe('Admin Module - Qualification Section',()=>{
        test('Skills - Add a new Skill',async({page})=>{
            await addNewSkillFunc(page);
        })

        test('Skills - Search the added Skill',async({page})=>{
            await searchAddeSkillFunc(page);
        })

        test('Skills - Delete the added Skill',async({page})=>{
            await deleteAddedSkillFunc(page);
        })

        test('Licenses - Add a new License',async({page})=>{
           await addLicenseFunc(page);
           
        })

        test('Licenses - Search the Added License',async({page})=>{
            await searchLicenseFunc(page);

        })

        test('Licenses - Delete the Added License',async({page})=>{
            await deleteLicenseFunc(page)
        })

        test('Memberships - Add New Membership',async({page})=>{
            await addMembershipsFunc(page);
        })

        test('Memberships - Search the Added Membership',async({page})=>{
            await searchMembershipFunc(page);
        })

        test('Memberships - Delete the Added Membership',async({page})=>{

            await deleteMembershipFunc(page);
        })
   
   
    });

    test.describe("Admin Module - My Infor Section",()=>{
        
        test('Perosnal Details - Edit Name Fields',async({page})=>{

            await editCustomFields(page);
            

        })

        test('Personal Details - Edit employee ID and other ID',async({page})=>{
            await editEmployeeIDFunc(page);

        })

        test("Personal Details - Edit Driving License Details",async({page})=>{

            await editDrivingLicenseFunc(page);
        })

        test('Personal Details - Edit Nationaltiy',async({page})=>{
            await editNationalityFunc(page);

        })

        test('Personal Details - Edit Marital Details',async({page})=>{
            await editMaritalStatusFunc(page);
        })

        test('Personal Details - Edit DOB',async({page})=>{
            await editDOBFunc(page);
        })

        test('Personal Details - Edit Blood Type',async({page})=>{
            await editBloodTypeFunc(page);
        })

        test('Personal Details - Edit Text Field',async({page})=>{
            await editTextFieldFunc(page);
        })

        test('Personal Details - Add Attachment',async({page})=>{
            await addAttachmentFunc(page);
        })
        
    })

    test.describe('My Infor - Contact Details',()=>{
        test('Contact Details',async({page})=>{
            await editContactDetailsFunc(page);
            
        })
        test('Edit Mobile Numbers',async({page})=>{
            await editTelephoneDetailsFunc(page);
        })

        test('Edit Email Address', async({page})=>{
            await editEmailAddressFunc(page);
        })

        test.only('Add New Attachment',async({page})=>{
            await addAttachmentFunc(page);

        })


    })