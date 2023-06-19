function calculateNetSalary(basicSalary, benefits) {
  const NSSF_RATE = 0.06;
  const grossSalary = basicSalary + benefits;


  const nhifDeductions = getNHIFDeduction(grossSalary)
  const nssfDeductions = ((grossSalary * NSSF_RATE) > 6000) ? 6000 : grossSalary * NSSF_RATE;
  const deduction = nhifDeductions + nssfDeductions
  const paye = getPAYE(grossSalary, deduction)
  const totalDeductions = paye + deduction
  const netSalary = grossSalary - totalDeductions
  console.log(netSalary);
}
function getNHIFDeduction(grossSalary) {
  let deduction

  if (grossSalary <= 5999) {
    deduction = 150
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    deduction = 300
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    deduction = 400
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    deduction = 500
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    deduction = 600
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    deduction = 750
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    deduction = 850
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    deduction = 900
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    deduction = 950
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    deduction = 1000
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    deduction = 1100
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    deduction = 1200
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    deduction = 1300
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    deduction = 1400
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    deduction = 1500
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    deduction = 1600
  } else if (grossSalary >= 100000) {
    deduction = 1700
  }
  return deduction;

}
function getPAYE(grossSalary, deduction) {
  let paye
  const relief = 2400
  const taxableincome = grossSalary - deduction;
  if (taxableincome <= 24000) {
    paye = taxableincome * 0.1
  } else if (taxableincome >= 24001 && taxableincome <= 32333) {
    paye = taxableincome * 0.25
  } else if (taxableincome > 32334) {
    paye = taxableincome * 0.3
  }
  paye = paye - relief

  paye = (paye <= 2400) ? 0 : paye
  return paye
}

