// Create a personAccount out function. It has firstName, lastName, incomes, expenses inner variables.
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// INCOMES = Thu nhập
// EXPENSES = Chi phí
function createPersonAccount(fName = 'unknown', lName = 'unknown') {
  let firstName = fName;
  let lastName = lName;
  let incomeList = [];
  let expenseList = [];

  function totalIncome() {
    if (!Array.isArray(incomeList) || incomeList.length === 0) {
      return 0;
    }
    return incomeList.reduce((total, income) => total + income.income, 0);
  }

  function totalExpense() {
    if (!Array.isArray(expenseList) || expenseList.length === 0) {
      return 0;
    }
    return expenseList.reduce((total, expense) => total + expense.expense, 0);
  }

  function getAccountInfo() {
    let accountInfo = `AccountInfo: ${firstName} ${lastName}\n`;
    return accountInfo;
  }

  function getAccountBalance() {
    return `AccountBalance: ${totalIncome() - totalExpense()}`;
  }

  function addExpense(description, expense) {
    if (!Array.isArray(expenseList)) {
      return;
    }

    const expenseObject = {
      description,
      expense,
    };

    return expenseList.push(expenseObject);
  }

  function addIncome(description, income) {
    if (!Array.isArray(incomeList)) {
      return;
    }

    const incomeObject = {
      description,
      income,
    };

    return incomeList.push(incomeObject);
  }

  return {
    totalExpense,
    totalIncome,
    getAccountBalance,
    getAccountInfo,
    addExpense,
    addIncome,
  };
}

const personAccount = createPersonAccount('Lam Phuoc', 'Loi');
personAccount.addIncome('part time', 10000);
personAccount.addIncome('part time 1', 20000);
personAccount.addIncome('part time 2', 30000);
personAccount.addExpense('Learn JS', 30000);
console.log(personAccount.getAccountInfo());
console.log(personAccount.getAccountBalance());
