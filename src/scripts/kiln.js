export const firePottery = (potteryToFire, temp) => {
    //creating a copy of the pottery as to not modify the original
    let firedPottery = {...potteryToFire}
    firedPottery.fired = true
    if (temp > 2200) {
        firedPottery.cracked = true
    } else {
        firedPottery.cracked = false
    }
    return firedPottery
}

