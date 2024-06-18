function* myGenerator(){
    yield [1,2,3,4,5];
}

function* myGenerator2(){
    for (let i=0; i < 5; i++){
        yield* [1,2,3,4,5];
    }
}

let generator = myGenerator();
let generator2 = myGenerator2();

let generatorValue = generator.next
let generatorValue2 = generator2.next

console.log(`Generator ${generator}`)
console.log("");
console.log("");
console.log(generatorValue);
console.log("");
console.log(generatorValue2);
console.log(generatorValue2);