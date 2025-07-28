// 11. Si la membresia es plus, el bono es de 500 y cuando no es de 200


let membership = "Plus"
let bonusPremium = 500
let bonusRegular = 200
let membershipsPremium = ["Plus", "Prime"]
let membershipRegular = ["Free", "Basic"]

if (membershipsPremium.includes(membership)) {
    bonusPremium = 500
} else if (membershipRegular.includes(membership)) {
    bonusRegular = 200
}


console.log(`Membership ${membershipsPremium.join(', ')} has ${bonusPremium}`)
console.log(`Membership ${membershipRegular.join(', ')} has ${bonusRegular}`)

console.log(`Current Membership ${membership}`)