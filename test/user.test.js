const {test,expect} = require('@jest/globals')
const User = require('../src/User')

describe('User', () => {
    const testUser = new User ("John", "Hiroshima", "1234567891011121", "john_smith@gmail.com", "214-999-0000", 1700, 2300)

    test ('test user parameters', () => {
        expect(testUser.userName).toBe('John')
        expect(testUser.password).toBe('Hiroshima')
        expect(testUser.cardNumber).toBe('1234567891011121')
        expect(testUser.email).toBe('john_smith@gmail.com')
        expect(testUser.startTime).toBe(1700)
        expect(testUser.endTime).toBe(2300)
    })

    test ('test payment method', () => {
        expect(testUser.totalPayment()).toBe(91)
    })
})