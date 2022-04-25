const incomeButton = document.querySelector('button');
const yearlyIncomeDisplay = document.getElementById('yearlyIncome');
const taxDueDisplay = document.getElementById('taxDue');
const netIncomeDisplay = document.getElementById('netIncome');

const TAX10 = 1027.5;
const TAX12 = 4807.5;
const TAX22 = 15213.5;
const TAX24 = 34647.5;
const TAX32 = 49335.5;
const TAX35 = 162718;

let yearlyIncome;
let taxDue;
let netIncome;

incomeButton.addEventListener('click', calculateTax);

function calculateTax() {
    yearlyIncome = prompt('Input yearly income:');

    if (yearlyIncome > 539900) {
        taxDue = ((yearlyIncome - 539900)*0.37) + TAX35;
    } else if (yearlyIncome > 215950) {
        taxDue = ((yearlyIncome - 215950) * 0.35) + TAX32;
    } else if (yearlyIncome > 170050) {
        taxDue = ((yearlyIncome - 170050) * 0.32) + TAX24;
    } else if (yearlyIncome > 89075) {
        taxDue = ((yearlyIncome - 89075) * 0.24) + TAX22;
    } else if (yearlyIncome > 41775) {
        taxDue = ((yearlyIncome - 41775) * 0.22) + TAX12;
    } else if (yearlyIncome > 10275) {
        taxDue = ((yearlyIncome - 10275) * 0.12) + TAX10;
    } else {
        taxDue = yearlyIncome * 0.1;
    }

    netIncome = yearlyIncome - taxDue;
    
    yearlyIncomeDisplay.textContent = Number(yearlyIncome).toLocaleString('en-US');
    taxDueDisplay.textContent = Number(taxDue).toLocaleString('en-US');
    netIncomeDisplay.textContent = Number(netIncome).toLocaleString('en-US');
}