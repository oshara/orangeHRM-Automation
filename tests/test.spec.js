import { test } from '@playwright/test';
import { addUserFlow } from './admin/user-management/add_user';
import { searchUserTest } from './admin/user-management/search_added_user';
import { deleteUserTest } from './admin/user-management/delete_added_user';
import { addJob } from './admin/jobs/job-titles/add_job';
import { printoutJobTable } from './admin/jobs/job-titles/printout_job_table';
import { basicJobTableFunc } from './admin/jobs/job-titles/basic_job_table_func';
import { searchAddedJob } from './admin/jobs/job-titles/search_the_added_job';

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