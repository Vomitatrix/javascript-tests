const incomeHourlyInput = document.getElementById('incomeHourlyInput');
const incomeYearlyInput = document.getElementById('incomeYearlyInput');
const taxDueDisplay = document.getElementById('taxDue');
const grossYearlyDisplay = document.getElementById('grossYearly');
const grossMonthlyDisplay = document.getElementById('grossMonthly');
const grossBiweeklyDisplay = document.getElementById('grossBiweekly');
const grossWeeklyDisplay = document.getElementById('grossWeekly');
const grossDailyDisplay = document.getElementById('grossDaily');
const grossHourlyDisplay = document.getElementById('grossHourly');
const netYearlyDisplay = document.getElementById('netYearly');
const netMonthlyDisplay = document.getElementById('netMonthly');
const netBiweeklyDisplay = document.getElementById('netBiweekly');
const netWeeklyDisplay = document.getElementById('netWeekly');
const netDailyDisplay = document.getElementById('netDaily');
const netHourlyDisplay = document.getElementById('netHourly');

// Constant variables for the maximum amount of tax payable on each bracket
const TAX10 = 1027.5;
const TAX12 = 4807.5;
const TAX22 = 15213.5;
const TAX24 = 34647.5;
const TAX32 = 49335.5;
const TAX35 = 162718;

// Variables for the gross and net breakdown
let taxDue;
let grossYearly;
let grossMonthly;
let grossBiweekly;
let grossWeekly;
let grossDaily;
let grossHourly;
let netYearly;
let netMonthly;
let netBiweekly;
let netWeekly;
let netDaily;
let netHourly;

// Event listener for whenever a key is released while typing into the fields
incomeHourlyInput.addEventListener('keyup', calculateTax);
incomeYearlyInput.addEventListener('keyup', calculateTax);

// This function takes the gross yearly income, compares it to each bracket's lowest end
// Then it calculates the gross and net amounts
function calculateTax() {
    grossYearly = getIncome();

    if (grossYearly > 539900) {             // 37% tax over 539,900
        taxDue = ((grossYearly - 539900)*0.37) + TAX35;
    } else if (grossYearly > 215950) {      // 35% tax over 215,950
        taxDue = ((grossYearly - 215950) * 0.35) + TAX32;
    } else if (grossYearly > 170050) {      // 32% tax over 170,050
        taxDue = ((grossYearly - 170050) * 0.32) + TAX24;
    } else if (grossYearly > 89075) {       // 24% tax over 89,075
        taxDue = ((grossYearly - 89075) * 0.24) + TAX22;
    } else if (grossYearly > 41775) {       // 22% tax over 41,775
        taxDue = ((grossYearly - 41775) * 0.22) + TAX12;
    } else if (grossYearly > 10275) {       // 12% tax over 10,275
        taxDue = ((grossYearly - 10275) * 0.12) + TAX10;
    } else {                                // 10% tax up to 10,275
        taxDue = grossYearly * 0.1;
    }

    grossMonthly = (grossYearly / 12).toFixed(2);
    grossHourly = (grossYearly / 2080).toFixed(2);
    grossDaily = grossHourly * 8;
    grossWeekly = grossDaily * 5;
    grossBiweekly = grossWeekly * 2;

    netYearly = grossYearly - taxDue;
    netMonthly = (netYearly / 12).toFixed(2);
    netHourly = (netYearly / 2080).toFixed(2);
    netDaily = netHourly * 8;
    netWeekly = netDaily * 5;
    netBiweekly = netWeekly * 2;

    breakdownDisplayChange();
}

// This function returns the value in the hourly field if it is not empty converted to approximate work hours per year, otherwise it returns the value in the yearly field
function getIncome() {
    if (incomeHourlyInput.value != ''){
        let hourlyToYearly = incomeHourlyInput.value * 2080;
        return hourlyToYearly;
    } else {
        return incomeYearlyInput.value;
    }
}

// Separate function for changeing the text of the breakdown for readability
function breakdownDisplayChange() {
    taxDueDisplay.textContent = Number(taxDue).toLocaleString('en-US');
    grossYearlyDisplay.textContent = Number(grossYearly).toLocaleString('en-US');
    grossMonthlyDisplay.textContent = Number(grossMonthly).toLocaleString('en-US');
    grossBiweeklyDisplay.textContent = Number(grossBiweekly).toLocaleString('en-US');
    grossWeeklyDisplay.textContent = Number(grossWeekly).toLocaleString('en-US');
    grossDailyDisplay.textContent = Number(grossDaily).toLocaleString('en-US');
    grossHourlyDisplay.textContent = Number(grossHourly).toLocaleString('en-US');
    netYearlyDisplay.textContent = Number(netYearly).toLocaleString('en-US');
    netMonthlyDisplay.textContent = Number(netMonthly).toLocaleString('en-US');
    netBiweeklyDisplay.textContent = Number(netBiweekly).toLocaleString('en-US');
    netWeeklyDisplay.textContent = Number(netWeekly).toLocaleString('en-US');
    netDailyDisplay.textContent = Number(netDaily).toLocaleString('en-US');
    netHourlyDisplay.textContent = Number(netHourly).toLocaleString('en-US');
}