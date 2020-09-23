function compute() {
    let principal = document.getElementById("principal").value;
    if (principal <= 0) {
        document.getElementById("principal").value = "";
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } 
    else {
        let rate = document.getElementById("rate").value;
        let years = document.getElementById("years").value;
        let interest = principal * years * rate / 10;
        let year_date =  new Date().getFullYear() + parseInt(years,10);
        document.getElementById("result").innerHTML = 
            "If you deposit <mark>" + principal + "</mark>,<br>\
            at an interest rate of <mark>" + rate + "%</mark>.<br>\
            You will receive an amount of <mark>" + interest + "</mark>,<br>\
            in the year <mark>" + year_date + "</mark>";
    }
}
     
function readSlider() {
    document.getElementById("rateDisplay").innerHTML = document.getElementById("rate").value + "%";
}