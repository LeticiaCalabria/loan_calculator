function calculateLoan() {

    let loanAmountEl = parseFloat(document.getElementById("loan-amount").value);
    let interestRateEl = parseFloat(document.getElementById("interest-rate").value);
    let monthsEl = parseInt(document.getElementById("months").value);
    
    let monthlyInterestRate = (interestRateEl / 100) / 12;
    let payment = (loanAmountEl * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, monthsEl)) /
                  (Math.pow(1 + monthlyInterestRate, monthsEl) - 1);
    
    document.getElementById("payment").innerHTML = `Monthly Payment: ${payment.toFixed(2)}`;
}

const btnEl = document.querySelector(".btn");

function calculateTip() {

    let billAmountEl = parseFloat(document.getElementById("bill-amount").value);
    let tipPercentageEl = parseFloat(document.getElementById("tip-percentage").value);

    let tipTotal = billAmountEl + (billAmountEl * (tipPercentageEl / 100));
    
    document.getElementById("tip-payment").innerHTML = `Total: ${tipTotal.toFixed(2)}`;
}



