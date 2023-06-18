function calculateNetSalary(basicSalary, benefits) {
    const TAX_RATE = 0.2;
    const NHIF_RATE = 0.02;
    const NSSF_RATE = 0.05;
    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * TAX_RATE;
  
    const nhifDeductions = grossSalary * NHIF_RATE;
    const nssfDeductions = grossSalary * NSSF_RATE;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return {
      grossSalary,
      payee,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };
  }
  const basicSalary = parseFloat(prompt("Enter the basic salary: "));
  const benefits = parseFloat(prompt("Enter the benefits: "));
  const {
    grossSalary,
    payee,
    nhifDeductions,
    nssfDeductions,
    netSalary,
  } = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary: $", grossSalary);
  console.log("Payee (Tax): $", payee);
  console.log("NHIF Deductions: $", nhifDeductions);
  console.log("NSSF Deductions: $", nssfDeductions);
  console.log("Net Salary: $", netSalary);
  