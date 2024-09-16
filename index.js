function calculateLoan() {

    loanAmountEl = document.getElementById("loan-amount").value;
    interestRatelEl = document.getElementById("interest-rate").value;
    monthsEl = document.getElementById("months").value;
    
    interest = (loanAmountEl * (interestRatelEl * 0.01)) / monthsEl;
    payment = (loanAmountEl / monthsEl + interest).toFixed(2);
    
    document.getElementById("payment").innerHTML = `Monthly Payment: ${payment}`;
}



