// Get the first script that contains the `available_dates` variable
let code = document.scripts[0].text;
TheBigBro();

function TheBigBro() {
    var bgn = code.indexOf("available_dates");
    var end = code.indexOf("fullCapicity_dates");
    var table = code.slice(bgn+20, end-9);
    if (table !== "") {
        var datee = table.slice(0,10);
        var dd = datee.slice(0,2);
        var mm = datee.slice(3,5);
        var yyyy = datee.slice(6,10);
        var dateeFin = [yyyy, mm, dd];
        var finDate= dateeFin.join("-");

        if(document.getElementById("app_date").value.length === 0 && finDate !== "") {
            $('#app_date').datepicker("update" ,finDate);
        } else {
            // Fill the form with the data you want
            var lastNames = ["last_Names_1", "last_Names_2", "last_Names_3", "last_Names_4"];
            var firstNames = ["first_Names_1", "first_Names_2", "first_Names_3", "first_Names_4"];
            var births = ["yyyy-mm-aa", "yyyy-mm-aa", "yyyy-mm-aa", "yyyy-mm-aa"]; // Date Of Birth
            var passNumbers = ["KN0000000", "LF0000000", "BH0000000", "BD0000000"]; // Passport Number
            var issueDates = ["yyyy-mm-aa", "yyyy-mm-aa", "yyyy-mm-aa", "yyyy-mm-aa"]; // Passport Issue Date
            var expiryDates = ["yyyy-mm-aa", "yyyy-mm-aa", "yyyy-mm-aa", "yyyy-mm-aa"]; // Passport Expiry Date
            var pptissuePalaces = ["city Name", "city Name", "city Name", "city Name"]; // Passport Issue Place

            var number = 4;
            var j=1;
            setTimeout(function(){
                for(var i=0; i<=number-1; i++){
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