

//Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"]; 


//Console log the value of the second item in petArray.

console.log(petArray[1]);

//Add the item "sheep" to petArray using the push method.

petArray.push("sheep");

//Console log how many items there are now in petArray using the length method.

console.log(petArray.length); 

//Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

var catObject = {
        
        name: "Fluffy",
        colour: "Grey",
        age: 9
};

//Console log the value of the third property of catObject.

console.log(catObject.colour);

//Take the value of catObject (the {} part) and place it inside an array called catArray.

var catArray = [

    {
            name: "Fluffy",
            colour: "Grey",
            age: 9
    }
    ]; 

//Loop through catArray and console log each property of each object inside (there will be only 1 object inside).

for(var i = 0; i < catArray.length; i++) {

    console.log(catArray[i]);

};

//I wasn't sure if you wanted each propertu called individually by the .dot method but that should be the following:

for(var i = 0; i < catArray.length; i++) {

    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);

};

//Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

function logToConsole(theAnimal){
 
   var stubbornAnimal = theAnimal;
   console.log(stubbornAnimal);

}

//Call the logToConsole function and pass in the value "donkey".

logToConsole("donkey");

