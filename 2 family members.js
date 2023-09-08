// Get the first script that contains the `available_dates` variable
let code = document.scripts[0].text;
TheBigBro();

function TheBigBro() {
    let bgn = code.indexOf("available_dates");
    let end = code.indexOf("fullCapicity_dates");
    let table = code.slice(bgn+20, end-9);
    if (table !== "") {
        let datee = table.slice(0,10);
        let dd = datee.slice(0,2);
        let mm = datee.slice(3,5);
        let yyyy = datee.slice(6,10);
        let dateeFin = [yyyy, mm, dd];
        let finDate= dateeFin.join("-");

        if(document.getElementById("app_date").value.length === 0 && finDate !== "") {
            $('#app_date').datepicker("update" ,finDate);
        } else {
            // Fill the form with the data you want
            let lastNames = ["LAST NAME 1", "LAST NAME 2"];
            let firstNames = ["FIRST NAME 1", "FIRST NAME 2"];
            let births = ["1995-09-12", "1995-09-12"]; // Date Of Birth
            let passNumbers = ["IO3924670", "XO2918460"]; // Passport Number
            let issueDates = ["2023-01-01", "2023-01-01"]; // Passport Issue Date
            let expiryDates = ["2028-01-01", "2028-01-01"]; // Passport Expiry Date
            let pptissuePalaces = ["CITY 1", "CITY 2"]; // Passport Issue Place

            let number = 2;
            let j=1;
            setTimeout(function(){
                for(let i=0; i<=number-1; i++){
                    document.getElementById('app_time-'+j).selectedIndex = document.getElementById('app_time-'+j).length-1;
                    document.getElementById('VisaTypeId-'+j).selectedIndex = "1";
                    document.getElementById('first_name-'+j).value=firstNames[i];
                    document.getElementById('last_name-'+j).value=lastNames[i];
                    document.getElementById('passport_number-'+j).value=passNumbers[i];
                    $('#date_of_birth-'+j).datepicker("update" ,births[i]);
                    $('#pptIssueDate-'+j).datepicker("update" ,issueDates[i]);
                    $('#pptExpiryDate-'+j).datepicker("update" ,expiryDates[i]);
                    document.getElementById('pptIssuePalace-'+j).value=pptissuePalaces[i];
                    j++
                }
            }, 4000)
        }
    }
}