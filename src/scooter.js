class Scooter {
    constructor (idNumber, chargingOrigin, chargingDropoff, checkedOut) {
        this.idNumber = idNumber;
        this.chargingOrigin = chargingOrigin;
        this.chargingDropoff = chargingDropoff;
        this.checkedOut = checkedOut;    
    }

    static chargingStations = ["Uptown", "Deep Ellum", "Downtown", "SMU"];

    isRented(){
        this.checkedOut = !this.checkedOut;
    }

    }

module.exports = Scooter;