class User {
    constructor (userName, password,cardNumber, email, phoneNumber, startTime, endTime) {
        this.userName = userName;
        this.password = password;
        this.cardNumber = cardNumber;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.starTime = startTime;
        this.endTime = endTime;  
        this.timeRented = [];
    }

    payment(timeRented) {
        return (timeRented * .15) + 1
    }

    totalTime(endTime,startTime) {
        const timeDifference = endTime - startTime;
        this.timeRented.push(timeDifference);
    }
}

module.exports = User;