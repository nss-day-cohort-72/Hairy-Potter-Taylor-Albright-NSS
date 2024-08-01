// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import {toSellOrNotToSell, usePottery} from "./PotteryCatalog.js"
// Make 5 pieces of pottery at the wheel
let potteryCollection = []
potteryCollection.push(makePottery('mug', 2, 4))
let mug = makePottery('mug', 2, 4)
let platter = makePottery('platter', 5, 12)
let goblet = makePottery('goblet', 2.5, 6)
let pot = makePottery('pot', 15, 7)
let jug = makePottery('jug', 10, 15)

let firedMug = firePottery(mug, 1000)
let firedPlatter = firePottery(platter, 3000)
let firedGoblet = firePottery(goblet, 2200)
let firedPot = firePottery(pot, 2199)
let firedJug = firePottery(jug, 2210)

//PRICING
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedGoblet)
toSellOrNotToSell(firedPot)
toSellOrNotToSell(firedJug)

console.log(usePottery())


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

