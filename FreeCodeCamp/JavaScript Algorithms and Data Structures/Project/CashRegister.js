// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

export function checkCashRegister(price, cash, cid) {
  if (
    typeof price !== 'number' ||
    typeof cash !== 'number' ||
    !Array.isArray(cid) ||
    cid.length === 0
  ) {
    return undefined;
  }

  const sortedCid = cid.toReversed();
  let theExactChange = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];

  let theChangeDue = Number((cash - price).toFixed(2));
  let totalCashInCID = 0;
  let isExactChange = true;

  for (let index = 0; index < sortedCid.length; index++) {
    totalCashInCID += sortedCid[index][1];
    const cash = sortedCid[index][1];
    if (cash === theChangeDue) {
      return { status: 'CLOSED', change: cid };
    }

    if (
      theChangeDue % theExactChange[index][1] === 0 &&
      sortedCid[index][1] / theExactChange[index][1] === 0
    ) {
      isExactChange = false;
    }
  }

  if (totalCashInCID < theChangeDue || !isExactChange) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  for (let index = 0; index < theExactChange.length; index++) {
    let amount = theExactChange[index][1];

    let numberOfCash = Math.ceil(sortedCid[index][1] / theExactChange[index][1]);

    while (numberOfCash * amount > theChangeDue) {
      numberOfCash--;
    }

    sortedCid[index][1] = numberOfCash * amount;

    let newChangeDue = Number((theChangeDue - numberOfCash * amount).toFixed(2));

    theChangeDue = newChangeDue;
  }

  return { status: 'OPEN', change: sortedCid.filter((item) => item[1] !== 0) };
}

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
