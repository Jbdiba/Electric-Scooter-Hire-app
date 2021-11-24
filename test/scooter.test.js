const {test,expect} = require('@jest/globals')
const Scooter = require('../src/scooter')

describe('Scooter', () => {
    const testScooter = new Scooter (3, "Uptown", "Downtown", "Y" )

    test ('test scooter parameters', () => {
        expect(testScooter.idNumber).toBe(3)
        expect(testScooter.chargingOrigin).toBe('Uptown')
        expect(testScooter.chargingDropoff).toBe('Downtown')
        expect(testScooter.checkedOut).toBe('Y')
    })

    test ('test isCheckedOut method', () => {
        expect(testScooter.isCheckedOut()).toBe(true)

    })
})