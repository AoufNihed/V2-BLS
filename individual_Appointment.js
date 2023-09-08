const Days = [];
for(var i = 0; i<=document.scripts.length; i++){
    if (document.scripts[i].text.indexOf("available_dates") != -1) {
        code = document.scripts[i].text;
        doMagic();
    }
}

function doMagic() {
    var bgn = code.indexOf("available_dates");
    var end = code.indexOf("fullCapicity_dates");
    var table = code.slice(bgn+20, end-9);
    if (table !== "") {
        var datee = table.slice(0,10);
        var dd = datee.slice(0,2);
        var mm = datee.slice(3,5);
        var yyyy = datee.slice(6,10);
        var dateeFin = [yyyy, mm, dd];
        var finDate = dateeFin.join("-");

        if(document.getElementById("app_date").value.length === 0 && finDate !== "") {
            $('#app_date').datepicker("update" ,finDate);
        } else {
            // Fill the form with the data you want
            var firstNames = "John Doe";
            var lastNames = "Doe";
            var births = "1990-01-01"; // Date Of Birth
            var passNumbers = "1234567890"; // Passport Number
            var issueDates = "2023-01-01"; // Passport Issue Date
            var expiryDates = "2028-01-01"; // Passport Expiry Date
            var pptissuePalaces = "New York"; // Passport Issue Place

            document.getElementById('first_name').value = firstNames;
            document.getElementById('last_name').value = lastNames;
            $('#dateOfBirth').datepicker("update" ,births);
            document.getElementById('passport_no').value = passNumbers;
            $('#pptIssueDate').datepicker("update" ,issueDates);
            $('#pptExpiryDate').datepicker("update" ,expiryDates);
            document.getElementById('pptIssuePalace').value = pptissuePalaces;

            // Play a sound
            var audio = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-the-sound-pack-tree/tspt_german_ambulance_sirens_wailing_loop_041.mp3');
            audio.play();

            // Select the last time slot
            document.getElementById("app_time").selectedIndex = document.getElementById('app_time').length-1;
            document.getElementById("VisaTypeId").selectedIndex = "1";

            // Auto-submit the form after 10 seconds
            var stopconsubmit = setInterval(function() {
                document.getElementsByClassName("btn primary-btn")[0].click();
            }, 10*1000);

            // Stop auto-submitting when the button is clicked
            document.getElementsByClassName("btn primary-btn")[0].onclick = function () {
                'use strict'
                console.log('STOP CLICKING SUBMIT');
                clearTimeout(stopconsubmit);
            }
        }
    }
}