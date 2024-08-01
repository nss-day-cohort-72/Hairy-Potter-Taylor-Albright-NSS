// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import {toSellOrNotToSell} from "./PotteryCatalog.js"
import { PotteryList } from "./potteryList.js"

//5 pieces of pottery created here
let mug = makePottery('Mug', 2, 4)
let platter = makePottery('Platter', 5, 12)
let goblet = makePottery('Goblet', 2.5, 6)
let pot = makePottery('Pot', 15, 7)
let jug = makePottery('Jug', 10, 15)

//All pieces of pottery fired here
let firedMug = firePottery(mug, 1000)
let firedPlatter = firePottery(platter, 2000)
let firedGoblet = firePottery(goblet, 2201)
let firedPot = firePottery(pot, 2500)
let firedJug = firePottery(jug, 800)

//Setting a price to the pottery if it is not cracked
let pricedMug = toSellOrNotToSell(firedMug)
let pricedPlatter = toSellOrNotToSell(firedPlatter)
let pricedGoblet = toSellOrNotToSell(firedGoblet)
let pricedPot = toSellOrNotToSell(firedPot)
let pricedJug = toSellOrNotToSell(firedJug)

//HTML display
const displayPottery = PotteryList()
const potteryList = document.querySelector('.potteryList')
potteryList.innerHTML = `${displayPottery}`


