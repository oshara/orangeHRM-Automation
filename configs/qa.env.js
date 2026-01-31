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
        }

    }
}