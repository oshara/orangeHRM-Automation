export const QA_ENV ={
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',

    credentials:{
        user:{
            username: 'Admin',
            password: 'admin123'    
        },

        invalidUser:{
            username: 'user',
            password : 'user123'
        }
    },



    oragnizationInfor:{
        generalInfor:{
            organizationName :'Orange HRM New Edit',
            employeeNumber: '220',
            registrationNumber :'7006000',
            taxIdNumber:'TX1002',
            phoneNumber:'077918288929',
            faxNumber:'109393820',
            email:'generalInfor@gmail.com',
            address1: '111/B Baker Street',
            address2:'Near City Hospital',
            cityName: 'Austin',
            stateName: 'Texas',
            countryName:'United States',
            zipCode: '78701',
            note:'This is general information edit note'




        },

        locationInfor:{
            locationName :`Head Office _${Date.now()}`,
            city: 'Austin',
            state: 'Texas',
            zipCode: '80000',
            country :'Switzerland',
            phone: '077918288929',
            fax: '109393820',
            address: '111/B Baker Street, Near City Hospital',
            notes: 'This is Head Office location added for testing activities'
        },
        structureInfor:{
            unitId :`H-1112_${Date.now()}`,
            name: 'QA Team',
            description :'This is a test description on the QA team'
        }
        
    },
    skillsInfor:{
            skillName : `Communication Skill _${Date.now()}`,
            description: 'This is a description about the added skill'
        },
    liceseInfor:{
        licenseName : `License _${Date.now()}`
    },

    myInfor:{
        personalInfor:{
            firstName:'Will1',
            middleName:'Jones',
            lastName:'Wade',
            employeeID:'839920',
            otherID: 'BN03003',
            drivingLicenseNum :'RR - 21992888 ',
            drivingLicensNumExpDate :'2028-22-05',
            nationalityName :'Zambian',
            maritalStatus : 'Other',
            dob:'1990-05-06',
            bloodType:'O+',
            testField: 'test new',
          attachmentFilePath: 'assets/sample1.pdf',
            comment: 'adding a custom field comment'

        },

        contactDetails:{
            address1:'Main Street',
            address2: 'Hudson River',
            city: 'NewYork',
            state:'Eastern',
            zipcode:'388244',
            country:'United States',
            homeTelephoneNumber: '0400000000',
            mobileNumber:'077918288929',
            workNumber: '0400060000',
            workEmail:'work123@gmail.com',
            otherEmail:'other123@gmail.com',
            attachmentPath:'assets/sample1.pdf',
            comment:'test comment on contact deatails attachment section',

        },

        emergencyContactDetails:{
            name:`Nate Smith_${Date.now()}`,
            relationshipName: 'Cousin',
            homeTelephoneNumber:'0470000000',
            mobileTelephoneNumber:'0450000000',
            workTelephoneNumber:'0480000000',
            filePath :'assets/sample1.pdf',
            emergencyComment :'adding comment in emergency contact section'

        }

    },
    recruitment:{
        candidates:{
            firstName: 'Alexandar',
            middleName: 'Jason',
            lastName: 'Harrington',
            vacancyName: 'Software Engineer',
            email:'testqa@gmail.com',
            contactNumber:'0404000010',
            filePath :'assets/sample1.pdf',
            keywords:'Manual Testing, Bugs, Test Mangement',
            dateOfApplication:'2026-01-01',
            notes:'Adding QA related note'

        },

        vancancies:{
            vacancyName: `SLC -QA Engineer_${Date.now()}`,
            jobTitle: 'Content Specialist',
            description:'Adding a comment on the vacancy post',
            hrDetatils:'Thomas Kutty Benny',
            positionCount:'5',
        }
    },

    claim:{
        employeeName:'Jobin Mathew Sam',
        event:'Travel Allowance',
        currency:'Japanese Yen',
        remarks:'This is a test claim added by automation script'
    }

}