form = document.querySelector('#form')
first= document.getElementById("#first-name")

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     parent = document.querySelector('.user-data')

//     container =  document.createElement('div')

//     fN = document.createElement('p')
//     fN_data = document.querySelector('[placeholder*="First"]')
//     fN.innerText = fN_data.value
//     container.append(fN)

//     lN = document.createElement('p')
//     lN_data = document.querySelector('[placeholder*="Last"]')
//     lN.innerText = lN_data.value
//     container.append(lN)

//     if(fN_data.value != '' && lN_data.value != ''){
//         parent.append(container)
//     }

//     fN_data.value = ''
//     lN_data.value = ''
//     console.log('form submitted');
// })

form.addEventListener('submit',(e)=>{
        e.preventDefault()
    
        parent = document.querySelector('.user-data table')

        row_table = document.createElement('tr')

        arrData = ["First","Last","Address","Pincode","Gender","State","Country","Food"]

        for(let i of arrData){
            fN = document.createElement('td')
            fN_data = document.querySelector(`[placeholder*=${i}]`)
            fN.innerText = fN_data.value
            row_table.append(fN)
            fN_data.value = ''
        }
        parent.append(row_table)

        
       // fN = document.createElement('td')
        // fN_data = document.querySelector(`[placeholder*="Name"]`)
        // fN.innerText = fN_data.value
        // row_table.append(fN)
        
        // lN = document.createElement('td')
        // lN_data = document.querySelector('[placeholder*="Last"]')
        // lN.innerText = lN_data.value
        // row_table.append(lN)

        // email = document.createElement('td')
        // email_data = document.querySelector('[placeholder*="E-mail"]')
        // email.innerText = email_data.value
        // row_table.append(email)

        // password = document.createElement('td')
        // password_data = document.querySelector('[placeholder*="Password"]')
        // password.innerText = password_data.value
        // row_table.append(password)

        // number = document.createElement('td')
        // number_data = document.querySelector('[placeholder*="Mobile"]')
        // number.innerText = number_data.value
        // row_table.append(number)

    })