let calc_screen = document.getElementById("screen");

buttons = document.querySelectorAll("button");

let inputField = "";

for (item of buttons) {
    item.addEventListener("click", (e) => {

        buttonText = e.target.innerText;

        if (buttonText == "X") {
            buttonText = "*";
            inputField += buttonText;
            calc_screen.value = inputField;
        }
        else if (buttonText == "AC")            // TO CLEAR ALL THE DATA FROM INPUT FIELD
        {
            inputField = "";
            calc_screen.value = inputField;
        }
        else if (buttonText == "C")             // TO CLEAR CHARACTER BY CHARACTER
        {
            inputField = inputField.substr(0, inputField.length - 1);
            calc_screen.value = inputField;
        }
        else if (buttonText == "=")             // TO EVALUATE THE EXPRESSION FORMED
        {
            calc_screen.value = eval(inputField);
        }
        else {
            inputField += buttonText;
            calc_screen.value = inputField;
        }
    });
}