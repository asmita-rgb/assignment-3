// feetToMile
function feetToMile(feet){
    if(feet > 0){
    var mile = feet / 5280;
    return mile;
    }
    else{
        return "Sorry, distance cannot have a negative value."
    }
}


//woodCalculator
function woodCalculator(chair, table, bed){
    if(chair >= 0 && table >=0 && bed >=0){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
    }
    else{
        return "Wood cannot have a negative value. Please, try again."
    }
}

//brickCalculator
function brickCalculator(floor){
    var everyFeetBrick = 1000;
    var brickFeet1 = 0;
    var brickFeet2 = 0;
    var brickFeet3 = 0;
    var brickFeet4 = 0;
    var brickFeet5 = 0;
    var brickFeet6 = 0;
    if(floor >=0 && floor <=10){
        brickFeet1 = floor * 15 * everyFeetBrick;
    }
    else if(floor >= 11 && floor <= 20){
        brickFeet2 =  10 * 15 * everyFeetBrick;
        brickFeet3 = (floor - 10) * 12 * everyFeetBrick;
    }
    else(floor > 20){
        brickFeet4 = 10 * 15 * everyFeetBrick;
        brickFeet5 = 10 * 12 * everyFeetBrick;
        brickFeet6 = (floor - 20) * 10 * everyFeetBrick;
    }
    var totalFloor = brickFeet1 + brickFeet2 + brickFeet3 + brickFeet4 + brickFeet5 + brickFeet6;
    return totalFloor;
}


//tinyFriend
function tinyFriend(friends){
   var smallestName = friends[0].length;
    for(var i = 0; i < friends.length; i++){
        var element = friends[i].length;
        if(element < smallestName){
            smallestName = element;
            var tiny = friends[i];
        }
    }
    return "Smallest name is ", tiny;
}