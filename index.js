//sliding features
var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
var rotateSum;

upbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum ; 
}

downbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(+90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum ; 
}




//emi calculator

const emi = () => {
    let amount = document.getElementById('amount').value;
    let rate = document.getElementById('interest').value;
    let time = document.getElementById('years').value;
    let interest = (amount * rate * time)/100;
    let total = Number(amount) + interest;
    let monthly = Number(total)/(time*12);
    document.getElementById('totalInterest').value = interest;
    document.getElementById('totalPayment').value = total;
    document.getElementById('monthlyPayments').value = monthly;
    //window.onbeforeunload = function () {return false;};
}
