import React from 'react'
import { View, StyleSheet, Text, DefaultTheme } from 'react-native'

function breakDown(x, squirts = []) {
    if (x % 5 != 0) {
        alert('Use multiples of five')
    } else {
        switch (true) {
            case x >= 90:
                squirts.push(45)
                x = ninety(x)
                break;
            case x >= 50:
                squirts.push(25)
                x = fifty(x)
                break;
            case x >= 20:
                squirts.push(10)
                x = twenty(x)
                break;
            case x >= 10:
                squirts.push(5)
                x = ten(x)
                break;
            default:
                squirts.push(2.5)
                x = five(x)
                break;
        }
    }
    if (x > 0) {
        return breakDown(x, squirts)
    } else {
        return squirts
    }
}
const ninety = (x) => {
    return x -= 90
}
const fifty = (x) => {
    return x -= 50
}
const twenty = (x) => {
    return x -= 20
}
const ten = (x) => {
    return x -= 10
}
const five = (x) => {
    return x -= 5
}
export const reduceNums = (x) => {
    return x.reduce((r, e) => {
        return r[e] ? ++r[e] : r[e] = 1, r
    }, {});
}
export const returnCalc = (x) => {
    x -= 45
    let brkdn = breakDown(x)
    let res = reduceNums(brkdn)
    return res
}
