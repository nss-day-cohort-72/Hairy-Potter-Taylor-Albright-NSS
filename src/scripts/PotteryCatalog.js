let potteryToSell = []
export const toSellOrNotToSell = (potteryToTest) => {
    //creating a copy of the pottery as to not modify the original
    let pricedPottery = potteryToTest
    if (pricedPottery.weight >= 6) {
        pricedPottery.price = 40
    } else if (pricedPottery.weight < 6) {
        pricedPottery.price = 20
    }
    if (!pricedPottery.cracked) {
        potteryToSell.push(pricedPottery)
    }
    return pricedPottery
}
export const usePottery = () => {
    let mapPottery = potteryToSell.map(item => item)
    return mapPottery
}
