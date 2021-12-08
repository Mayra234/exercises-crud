const operationsForm = document.getElementById('operations-form');
const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const operationSymbol = document.getElementById('operation-symbol');
const executeOperation = document.getElementById('execute-operation');
const headerTable = document.getElementById('header-table');
const contentTable = document.getElementById('content-table');

let result = 0;
let mathematicalOperation = [];

executeOperation.addEventListener('click', function () {
  addOperation();
});

function addOperation() {
  mathematicalOperation.push({
    numberOne: firstNumber.ariaValueMax,
    symbol: operationSymbol.value,
    numberTwo: secondNumber.value,
  });
  renderOperation();

  firstNumber.value = '';
  secondNumber.value = '';
  operationSymbol.value = '';

  validate();
}

function updateOperation(index) {
  const newNumberOne = parseFloat(
    prompt('Escriba el primer numero de la operación a cambiar')
  );
  const newSymbol = prompt('');
}
