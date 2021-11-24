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
let u1 = new User ("Me", "Topsecret", "375894", "me@nomail.com", "214-777-0000", 1900, 2345)
console.log(u1.totalPayment())

 module.exports = User;