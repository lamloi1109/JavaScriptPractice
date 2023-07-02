// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

import { checkCashRegister } from './CashRegister.js';

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

describe('checkCashRegister(price, cash, cid)', () => {
  it('should return undefined if price is invalid', () => {
    const cash = 20;
    const cid = [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
    ];
    expect(checkCashRegister('', cash, cid)).toBeUndefined();
    expect(checkCashRegister([], cash, cid)).toBeUndefined();
    expect(checkCashRegister({}, cash, cid)).toBeUndefined();
    expect(checkCashRegister(null, cash, cid)).toBeUndefined();
    expect(checkCashRegister(undefined, cash, cid)).toBeUndefined();
  });

  it('should return undefined if cash is invalid', () => {
    const price = 20;
    const cid = [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
    ];
    expect(checkCashRegister(price, undefined, cid)).toBeUndefined();
    expect(checkCashRegister(price, null, cid)).toBeUndefined();
    expect(checkCashRegister(price, {}, cid)).toBeUndefined();
    expect(checkCashRegister(price, [], cid)).toBeUndefined();
    expect(checkCashRegister(price, '', cid)).toBeUndefined();
  });

  it('should return undefined if cid is invalid', () => {
    const price = 20;
    const cash = 20;
    expect(checkCashRegister(price, cash, undefined)).toBeUndefined();
    expect(checkCashRegister(price, cash, null)).toBeUndefined();
    expect(checkCashRegister(price, cash, {})).toBeUndefined();
    expect(checkCashRegister(price, cash, [])).toBeUndefined();
    expect(checkCashRegister(price, cash, '')).toBeUndefined();
  });
 
  it('should return an object', () => {
    expect(
      checkCashRegister(19.5, 20, [
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
    ).toEqual({ status: 'OPEN', change: [['QUARTER', 0.5]] });

    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toEqual({ status: 'INSUFFICIENT_FUNDS', change: [] });
    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toEqual({
      status: 'CLOSED',
      change: [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ],
    });

    expect(
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
    ).toEqual({
      status: 'OPEN',
      change: [
        ['TWENTY', 60],
        ['TEN', 20],
        ['FIVE', 15],
        ['ONE', 1],
        ['QUARTER', 0.5],
        ['DIME', 0.2],
        ['PENNY', 0.04],
      ],
    });

    expect(
      checkCashRegister(19.5, 20, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 1],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toEqual({ status: 'INSUFFICIENT_FUNDS', change: [] });
  });
});
