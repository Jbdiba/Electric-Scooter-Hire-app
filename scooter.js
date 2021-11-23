class Scooter {
    constructor (idNumber, chargingOrigin, chargingDropoff, checkedOut) {
        this.idNumber = idNumber;
        this.chargingOrigin = chargingOrigin;
        this.chargingDropoff = chargingDropoff;
        this.checkedOut = checkedOut;    
    }

    static chargingStations = ["Uptown", "Deep Ellum", "Downtown", "SMU"];

    isCheckedOut (checkedOut) {
        if (this.checkedOut === "Y" ) {
            return true;

        } else if (this.checkedOut === "N") {
            return false;
        } 
    }

}

let s1 = new Scooter (3, "Uptown", "Downtown", "Y" )
console.log(s1.isCheckedOut());

module.exports = Scooter;