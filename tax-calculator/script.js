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