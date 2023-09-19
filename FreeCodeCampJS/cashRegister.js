/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change. ******

Return {status: "CLOSED", change: [...]} with cash-in-drawer 
as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

const CurrencyUnitLookUp = [
  {
    unit: "PENNY",
    val: 0.01,
  },
  {
    unit: "NICKEL",
    val: 0.05,
  },
  {
    unit: "DIME",
    val: 0.1,
  },
  {
    unit: "QUARTER",
    val: 0.25,
  },
  {
    unit: "ONE",
    val: 1,
  },
  {
    unit: "FIVE",
    val: 5,
  },
  {
    unit: "TEN",
    val: 10,
  },

  {
    unit: "TWENTY",
    val: 20,
  },
  {
    unit: "ONE HUNDRED",
    val: 100,
  },
]
function checkCashRegister(price, cash, cid) {
  let status = "Unknown"
  let change = cash - price // (cash - price == change)
  let changeArr = []
  let changeObj = {}
  let drawerMoney = 0
  let tempVal = 0
  let cidCopy = [...cid]
  console.log("BeforeCID: ", cid)
  console.log("Open Cash in drawer: ", cidCopy)
  for (let i = 0; i < cid.length; i++) {
    cidCopy[i] = cid[i].slice()
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    let currencyUnit = CurrencyUnitLookUp[i]["unit"]
    let currencyValue = CurrencyUnitLookUp[i]["val"]
    // console.log(cid[i][1], currencyValue, change - currencyValue, change)
    if (cid[i][1] >= currencyValue && change - currencyValue >= 0) {
      if (changeObj.hasOwnProperty(currencyUnit)) {
        tempVal = changeObj[currencyUnit] + currencyValue

        changeObj[currencyUnit] = Math.round(tempVal * 100) / 100
      } else {
        changeObj[currencyUnit] = currencyValue
      }
      change = (change - currencyValue).toFixed(2)
      cid[i][1] = Math.round((cid[i][1] - currencyValue) * 100) / 100
      i++
    }
  }
  if (change > 0) {
    //insufficient funds
    status = "INSUFFICIENT_FUNDS"
  }
  if (change == 0) {
    drawerMoney = cid.reduce((sum, ele) => {
      return sum + ele[1]
    }, 0)
    if (drawerMoney) {
      status = "OPEN"
      for (const [key, value] of Object.entries(changeObj)) {
        changeArr.push([key, value])
        // console.log("changeArr: ", changeArr)
      }
    } else {
      status = "CLOSED"
      console.log("CLOSED: cash in drawerrrr", cidCopy)
    }
  }

  return { status: status, change: status == "CLOSED" ? cidCopy : changeArr }
}

const result = checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
])
// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ])
console.log("Result: ", result)
