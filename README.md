# OrangeHRM Automation Test Suite

A comprehensive Playwright-based test automation suite for OrangeHRM. This project automates testing across multiple modules including Admin, Claims, MyInfo, Recruitment, and Menu Navigation.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Test Categories](#test-categories)
- [Running Tests](#running-tests)
- [Configuration](#configuration)

---

## Overview

This automation project uses **Playwright** to test the OrangeHRM system. The test suite covers:

- **User Management**: Adding, searching, and deleting users
- **Admin Module**: Job titles, employment status, pay grades, job categories, organizations, and qualifications
- **Organization**: General information, locations, and organizational structure
- **Claims**: Adding and searching claim records
- **MyInfo**: Personal details, emergency contacts, and attachments
- **Recruitment**: Managing candidates and vacancies
- **Menu Navigation**: Verifying menu navigation across different modules

---

## Project Structure

```
orangeHRM-Automation/
├── pages/                          # Page Object Models for all modules
│   ├── login.js                    # Login page object
│   ├── admin/                      # Admin module pages
│   ├── claim/                      # Claims module pages
│   ├── myInfo/                     # MyInfo module pages
│   ├── recruitment/                # Recruitment module pages
│   └── navigationMenus/            # Navigation menu pages
├── tests/                          # Test files organized by module
│   ├── login/                      # Login tests
│   ├── admin/                      # Admin module tests
│   ├── claim/                      # Claims tests
│   ├── myInfo/                     # MyInfo tests
│   ├── recruitment/                # Recruitment tests
│   └── menu-navigation/            # Menu navigation tests
├── configs/                        # Configuration files
│   └── qa.env.js                   # QA environment configuration
├── common/                         # Common data and utilities
│   └── admin_data.json             # Admin test data
├── assets/                         # Static assets
├── playwright.config.js            # Playwright configuration
├── playwright-report/              # Generated test reports
└── test-results/                   # Test result artifacts
```

---

## Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd orangeHRM-Automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Configure environment**
   - Update `configs/qa.env.js` with your OrangeHRM instance credentials and base URL
   - Example:
     ```javascript
     export const QA_ENV = {
       baseURL: 'https://your-orangehrm-instance.com',
       credentials: {
         user: {
           username: 'your-username',
           password: 'your-password'
         }
       }
     };
     ```

---

## Test Categories

### 1. Login Tests
**Location**: `tests/login/`

| Test | Description |
|------|-------------|
| `login_valid.js` | Verify successful login with valid credentials |
| `login_invalid.js` | Verify proper error handling with invalid credentials |

---

### 2. Admin Module Tests
**Location**: `tests/admin/`

#### 2.1 User Management
**Location**: `tests/admin/user-management/`

| Test | Description |
|------|-------------|
| `add_user.js` | Add a new system user |
| `search_added_user.js` | Search for newly created user |
| `delete_added_user.js` | Delete a user account |

#### 2.2 Jobs Section
**Location**: `tests/admin/jobs/`

| Test | Description |
|------|-------------|
| `employment-status/` | Add, search, and delete employment status records |
| `job-categories/` | Add, search, and delete job categories |
| `job-titles/` | Add, search, and delete job titles |
| `pay-grades/` | Add, search, and delete pay grades |

#### 2.3 Organization Section
**Location**: `tests/admin/organization/`

| Test | Description |
|------|-------------|
| `general-information/` | Edit general organization information |
| `locations/` | Add, search, and delete organization locations |
| `structure/` | Add, search, and delete organizational structure |

#### 2.4 Qualifications Section
**Location**: `tests/admin/qualifications/`

| Test | Description |
|------|-------------|
| `skills/` | Add, search, and delete skills |
| `education/` | Manage education qualifications |
| `languages/` | Manage language qualifications |
| `licenses/` | Manage professional licenses |
| `memberships/` | Manage professional memberships |

---

### 3. Claims Module Tests
**Location**: `tests/claim/`

| Test | Description |
|------|-------------|
| `add_claim.js` | Create a new claim record |
| `search_added_claim.js` | Search for newly created claims |

---

### 4. MyInfo Module Tests
**Location**: `tests/myInfo/`

| Test | Description |
|------|-------------|
| `personal-details/` | |
| └─ `edit_personal_details.js` | Edit employee personal information |
| └─ `edit_custom_field.js` | Edit custom fields in personal details |
| └─ `add_attachment.js` | Add file attachments to personal records |
| `contact-details/` | |
| └─ `edit_contact_details.js` | Edit employee contact information |
| `emergency-contacts/` | |
| └─ `emergency_contacts.js` | Add emergency contact information |
| └─ `search_added_emergency_contact.js` | Search for added emergency contacts |

---

### 5. Recruitment Module Tests
**Location**: `tests/recruitment/`

| Test | Description |
|------|-------------|
| `candidates/` | |
| └─ `add_new_candidates.js` | Add new job candidates |
| └─ `search_added_candidate.js` | Search for newly added candidates |
| `vancancies/` | |
| └─ `add_vacancy.js` | Create new job vacancy postings |
| └─ `search_added_vacancy.js` | Search for created vacancies |

---

### 6. Menu Navigation Tests
**Location**: `tests/menu-navigation/`

| Test | Description |
|------|-------------|
| `navigation_menus.js` | Verify main menu navigation |
| `admin-menu-navigations/` | |
| └─ `admin_menu_navigations.js` | Verify Admin module menu navigation |
| `claim-menu-navigations/` | |
| └─ `claim_navigations.js` | Verify Claims module menu navigation |
| `my-infor-navigations/` | |
| └─ `my_infor_navigations.js` | Verify MyInfo module menu navigation |
| `recruitment-menu-navigations/` | |
| └─ `recruitment_menu_navigations.js` | Verify Recruitment module menu navigation |

---

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in Headed Mode (Browser Visible)
```bash
npx playwright test --headed
```

### Run Specific Test File
```bash
npx playwright test tests/login/login_valid.js
```

### Run Tests by Module
```bash
# Admin tests
npx playwright test tests/admin/

# Claims tests
npx playwright test tests/claim/

# MyInfo tests
npx playwright test tests/myInfo/

# Recruitment tests
npx playwright test tests/recruitment/

# Menu navigation tests
npx playwright test tests/menu-navigation/
```

### Debug Mode
```bash
npx playwright test --debug
```

### Generate HTML Report
```bash
npx playwright test
npx playwright show-report
```

---

## Configuration

### Playwright Configuration
Edit `playwright.config.js` to customize:

- **Test directory**: `testDir: './tests'`
- **Parallel execution**: `fullyParallel: false`
- **Headless mode**: `headless: false`
- **Browser**: Currently configured for Chromium (Firefox and WebKit commented out)
- **Retries**: Set to 2 on CI, 0 locally
- **Workers**: Disabled for sequential test execution

### Environment Configuration
Update `configs/qa.env.js` for your environment:

```javascript
export const QA_ENV = {
  baseURL: 'https://your-orangehrm-url.com',
  credentials: {
    user: {
      username: 'admin',
      password: 'password'
    }
  }
};
```

### Test Data
Admin test data is stored in `common/admin_data.json` and can be modified as needed.

---

## Test Execution Flow

1. **Login**: Each test authenticates using credentials from `qa.env.js`
2. **Navigation**: Test navigates to the relevant module section
3. **Action**: Test performs the required action (add, search, delete, edit)
4. **Verification**: Test verifies the action was successful
5. **Cleanup**: Tests clean up by deleting created records where applicable

---

## Page Object Pattern

This project uses the Page Object Model (POM) pattern:

- **Pages**: Located in `pages/` directory
- **Methods**: Encapsulate interactions with page elements
- **Reusability**: Pages are imported and reused across tests
- **Maintainability**: Centralized element selectors for easier updates

### Example Usage
```javascript
import { LoginPage } from '../../pages/login.js';

const loginPage = new LoginPage(page);
await loginPage.login(username, password);
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Tests fail with "Cannot find module" | Run `npm install` and ensure all dependencies are installed |
| Tests timeout | Increase timeout in playwright.config.js or check if OrangeHRM instance is running |
| "Browser not found" error | Run `npx playwright install` |
| Incorrect element selectors | Update selectors in page object files |
| Authentication fails | Verify credentials in `configs/qa.env.js` |

---

