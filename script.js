/** Add any JavaScript you need to this file. */
function validateForm() {
    var valid = false;

    if(fname && lname)
    {
        valid = true;
    }

    return valid;
}

function validatePhoneNumber() {
    var input = document.form1.phone.value.trim();
    if (parseInt(input) != input) {
        alert('Please enter a proper phone number.');
        document.form1.phone.focus();
        return false; // failed for validation
    }
    return true; // passed for validation
}  //  End of function

function validateAlpha(nameID) {
    var valid = true;
    var alphaElem = document.getElementsById(nameID);
    var inputValue = alphaElem.value.trim();
    inputValue = inputValue.toUpperCase();

    for (var i = 0; i < inputValue.length; i++) {
        // check all characters are letters
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") {
            valid = false;
        }
    }

    if (!valid) {
        alert("Name : Please enter a name with all alphabetical letters.");
        alphaElem.focus();
        return false;
    }
    return true;
} 

function validatePass() {
    var valid = false;
    var pass = document.getElementById("password");
}

