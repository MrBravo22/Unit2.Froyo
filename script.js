
//My lousy attempt
/*const flavors = {
    vanilla: 5,
    chocolate: 6,
    strawberry: 5,
    coffee: 6
}

let userInput = prompt('Please enter the flavors you like separated by comma');

let sum=0;
for(let key in flavors){
    console.log(key);
    console.log(flavors[key]);
    sum = sum + flavors[key];
}
console.log(sum);
console.log(flavors.split(','));
*/

//Profs demonstration//
const flavors = window.prompt ('enter some flavors, vanilla,vanilla,vanilla,strawberry,coffee,coffee');
const arr = flavors.split(',');
const stats = {

};

for(let i = 0; i < arr.length; i++){
    const flavor = arr[i];
    if(stats[flavor] === undefined){
        stats[flavor] = 0;
    }
    stats[flavor] = stats[flavor] + 1;
}
console.log(flavors);
