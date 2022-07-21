function makeItBark(name){
    function Dog(name){
        this.name=name;
    }
    Dog.prototype.bark = function (){
        return this.name+" say woof hey";
    };
    let scooby = new Dog(name);
    return scooby.bark();
}

console.log(makeItBark("Pepito"))

/// 


function contar(listOfAnimals, animalToCount){
    let result=0;
    if (animalToCount != null) {
        listOfAnimals.forEach(element => element == animalToCount ? result+=1 : "" )
    } else{
        result= listOfAnimals.length;
    }
    return result;
}

const animales= ["pig","pig","oveja"];

console.log(contar(animales, "pig"))