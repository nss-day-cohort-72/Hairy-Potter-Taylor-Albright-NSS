export const firePottery = (potteryToFire, temp) => {
    let firedPottery = {...potteryToFire}
    firedPottery.fired = true
    if (temp > 2200) {
        firedPottery.cracked = true
    } else {
        firedPottery.cracked = false
    }
    console.log(firedPottery)
    return firedPottery
}