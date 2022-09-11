function lifeInWeeks(age){

    var ageRemaining = 90 - age;
    var x = ageRemaining * 365;
    var y = ageRemaining * 52;
    var z = ageRemaining * 12;

    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
}

lifeInWeeks(age = prompt("How old are You?"));