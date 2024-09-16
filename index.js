function calculateLoan() {

    let loanAmountEl = parseFloat(document.getElementById("loan-amount").value);
    let interestRatelEl = parseFloat(document.getElementById("interest-rate").value);
    let monthsEl = parseInt(document.getElementById("months").value);
    
    let monthlyInterestRate = (interestRatelEl / 100) / 12;
    let payment = (loanAmountEl * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, monthsEl)) /
                  (Math.pow(1 + monthlyInterestRate, monthsEl) - 1);
    
    document.getElementById("payment").innerHTML = `Monthly Payment: ${payment.toFixed(2)}`;
}



