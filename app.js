const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


function checkNumberIsLucky(){
    const dob = dateOfBirth.value;
    const Sum = calculateSum(dob);
    if(Sum && dob){
        if(Sum%luckyNumber.value===0){
            outputBox.innerText = "Your Birthday is lucky🥂🥂!!!";
        }
        else{
            outputBox.innerText = "Your Birthday is not lucky🤞🤞";
        }
    }
    else{
        outputBox.innerText = "Please enter both fields😡😡😡";
    }
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for (i=0; i<dob.length;i++){
        sum = sum+ Number(dob.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener("click", checkNumberIsLucky)
    // console.log(dateOfBirth.value , luckyNumber.value))