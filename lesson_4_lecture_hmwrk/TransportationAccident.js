/**
Create an object which represents an accident which involves transportation(авария).
The object should:
•   Have a date
•   Have a list of transportation that was involved
•   Only valid transportation can be added to the list (*)
•   Have a number of damaged people
•   Contain text which represents the reason e.g. "The accident happened
because the driver of Fiat was drunk."
•   toString() method should print out nice, formatted info about the accident
e.g. "Crash happened on December 2. Reason: ..." (**)
•   Create a method called hasInfo which takes a string as an argument.
Method will return true if the given string matches some string in the date,
reason or in the list of transportation. (***)
Create another object which extends accident, object which represents aviation
accidents :
•   Should contain a number which represents on which altitude the problem
occurred
Create another object which extends  air accidents, object which represents
civilian aviation accidents:
•   Should contain the name of the airline e.g. Alitalia 
Create another object which extends air accidents, object which represents
military aviation accidents:
•   Should contain information about the country on which territory the
accident happened
•   Should contain a list of the countries that are involved in the conflict
*- Create another objects which are representing transportation. Those
objects should keep a list of all transportation. Each subclass of accidents
should has its own list of valid transportation e.g. for the civilian aviation
accidents it should be Boeing 737, Airbus A319 and so on, for the military
aviation accidents it should be MiG-29, AH-64 Apache. When user is trying to
add new transportation to the list accident's transportation list you should
verify if the new transportation is valid one.
** - Make sure that child accidents print out their additional information
e.g. aviation accidents should provide an info about altitudes.
*** - Make sure that child accidents are also searching in their additional
fields e.g. military aviation accident should also search in the list of
countries  Try implementing polymorphism.

What should you pay attention to:
•   Try using as much stuff from the previous lessons as you can 
•   Try adding new child objects, new properties, new methods which are not
mentioned in the letter
•   Make sure your code is handling 'bad cases' e.g. invalid data
•   Although it is pretty bad approach, but for this homework you can test
your code only in Google Chrome and use __proto__ to access parent class.
What is not important:
•   Don't spent time on gathering data e.g. if you are creating a list of
transportation 3 transportation are enough. Same with the rest of data.
*/

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

