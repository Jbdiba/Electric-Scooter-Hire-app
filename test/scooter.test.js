const {test,expect} = require('@jest/globals')
const Scooter = require('../src/scooter')

describe('Scooter', () => {
    const testScooter = new Scooter (3, "Uptown", "Downtown", true )

    test ('test scooter parameters', () => {
        expect(testScooter.idNumber).toBe(3)
        expect(testScooter.chargingOrigin).toBe('Uptown')
        expect(testScooter.chargingDropoff).toBe('Downtown')
        expect(testScooter.checkedOut).toBeTruthy
    })

    test ('test rent method', () => {
        testScooter.isRented()
        expect(testScooter.checkedOut).toBeFalsy()

    })
})