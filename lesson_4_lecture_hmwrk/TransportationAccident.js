var transportationAccident = {
//     "accident type": ["aviation accident", "civilian aviation accident", "military aviation accident"],
    accidentDate: Date().now(),

    $involvedTransportation: [],
    set vehicles(tr){ for(tr in transportation) this.involvedTransportation.push(tr)},
    get vehicles(){ return this.involvedTransportation; },
    
    numberOfDamagedPeople: 0,
    set damagedPeople(n){ this.numberOfDamagedPeople = n > 0 ? n : 0; },
    get damagedPeople(){ return this.numberOfDamagedPeople; },

    reason: "",
    set reason(s){ this.reason = s.length > 0 ? s : "The reason is undefined yet" },
    get reason(){ return this.reason; },

    toString: function(){
        return "Crash happened on " + this.accidentDate + ". The reason is: " + this.reason +
        ". Transportation involved: " + this.involvedTransportation.toString() +
        ". Number of damaged people is " + this.numberOfDamagedPeople;
    }
};

var transportation = {
    vehicle: ["Boeing 737", "Airbus A319", "MiG-29", "AH-64 Apache"]
};

var aviationAccident = Object.create(transportationAccident);
aviationAccident{
    accidentAltitude: 0,
//     (Math.random() * (25000))
    set altitude(height){ this.accidentAltitude = height >== 0 ? height : 0 },
    get altitude(){ return this.accidentAltitude; },
    toString: function(){
        return "Crash happened on " + this.accidentDate + ". The reason is: " + this.reason +
        ". Transportation involved: " + this.involvedTransportation.toString() +
        ". Number of damaged people is " + this.numberOfDamagedPeople;
    }
};
};

var civilianAviationAccident = Object.create(aviationAccident);
civilianAviationAccident{
    airlineName: "",
    set airline(name){ this.airlineName = name; },
    get airline(){ return this.airlineName; }
};

var militaryAviationAccident = Object.creat(aviationAccident);
militaryAviationAccident{
    accidentCountry: "",
    conflictingCountries: [],
    set country(name){ this.accidentCountry = name },
    get country(){ return this.accidentCountry; },
    set conflicting(names[]){ this.conflictingCountries = names; },
    get conflicting(){ return this.conflictingCountries; }
};

hasInfo = function(searchString){
    for(var info in accident){
        if(searchString.isIn ){
            return true;
        }
    }
    return false;
}



// var accident = {
//     date: Date(), //Date.now(),
//     vehicle: [],
//     damagedPeopleNumber: 0,
//     reason: "undefined yet",
//     string: toString()
// }

// accident.vehicle.__proto__ = transportation;

// var transportation = {
//     civilianAviation: ['Boeing 737', 'AirbusA19'],
//     militaryAviation: ['MiG-29', 'AH-64 Apache']
// }

// get = function(accidentObject){ return accidentObject.toString(); }

// toString = function(){
//     return 'accident' + this.date.toString() +
//     this.vehicle.toString() + 
//     this.damagedPeopleNumber.toString() + 
//     this.reason.toString();
// }

