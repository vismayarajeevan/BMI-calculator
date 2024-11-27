function calculateBMI(){

    // access all fields and display div
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const bmiResult =document.getElementById("bmi-result");
    const bmiStatus =document.getElementById("bmi-status");


// take input field values

const weight= parseFloat(weightInput.value);
const height= parseFloat(heightInput.value);

// check input fields are filled or not

if(!weight || !height){
    alert("Please enter valid weight and height");
}

// calculate bmi 

// 1. convert height in meters

const heightInMeter= height/100;
const bmi=(weight/(heightInMeter*heightInMeter)).toFixed(1);


// display status bar based on bmi

let status;
if(bmi<18.5){
    status="Underweight"
}else if(bmi<25){

    status="Normal weight"
}else if(bmi<30){

    status="Overweight"

}else{

    status="Obese"
}


// display results

bmiResult.textContent =`BMI: ${bmi}`;
bmiStatus.textContent=`Status: ${status}`;
}


// function when you click enter in keyboard

['weight','height'].forEach(id=>{
    document.getElementById(id).addEventListener("keypress", function(e){
        if(e.key=="Enter") calculateBMI()
    });
});