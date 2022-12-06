const prompt = require('prompt-sync')();

salario_liq = prompt('Salário líquido: R$');
salario_liq = parseInt(salario_liq);
salario_bru = salario_liq * 0.9;

console.log('Salário bruto R$', salario_bru);