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