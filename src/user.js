class User {
    constructor (userName, password,cardNumber, email, phoneNumber, startTime, endTime) {
        this.userName = userName;
        this.password = password;
        this.cardNumber = cardNumber;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.startTime = startTime;
        this.endTime = endTime;  
    }

    totalPayment() {
        return (this.endTime - this.startTime) * 0.15 + 1 
    }
}

let u1 = new User ("John", "Hiroshima", "1234567891011121", "john_smith@gmail.com", "214-999-0000", 1700, 2300)
console.log(u1.totalPayment())

 module.exports = User