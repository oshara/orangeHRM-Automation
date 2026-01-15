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

test.describe('Admin Module -Users section', () => {

    test('Add user', async ({ page }) => {
        await addUserFlow(page);
    })

    test('Search the newly added user', async ({ page }) => {
        await searchUserTest(page);
    });

    test('Delete the newly added user', async ({ page }) => {

        await deleteUserTest(page);
    });


});

test.describe('Admin Module -Jobs section', () => {

    test('Add Job Title', async ({ page }) => {
        await addJob(page);
    });

    test('Print out the Job Table', async ({ page }) => {
        await printoutJobTable(page);
    })

    test("Basic Job Table Functions", async ({ page }) => {
        await basicJobTableFunc(page);
    })

    test("Search a Job Title that was added", async ({ page }) => {
        await searchAddedJob(page);

    });

    test("Pay Grade - Add New Pay Grade", async ({ page }) => {
        await addNewPayGrade(page);
    });

    test("Pay Grade - Search Added Pay Grade", async ({ page }) => {
        await searchAddedPayGrade(page);
    });

    test('Pay Grade - Delete the added Pay Grade', async ({ page }) => {
        await deletePayGrade(page);
    })

    test("Employment Status - Add New Employment Status", async ({ page }) => {
        await addEmploymentStatus(page);
    })

    test("Employment Status - Search Added Employment Status", async ({ page }) => {
        await searchAddedEmployStatus(page);
    });

    test('Employment Status - Delete the added Employment Status', async ({ page }) => {
        await deleteEmploymentStatus(page);
    });

    test("Job Categories - Add New Job Category", async ({ page }) => {
        await addJobCategoryFun(page);
    });

    test.only("Job Categories - Search the Added Job Category",async({page})=>{
        await searchJobCategoriesFunc(page);

    })

});