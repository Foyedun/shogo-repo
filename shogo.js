function highestCount (str){
let count = 0;
let split = str.split("");
 for (let i = 0; i < split.length; i++){
 count = split.filter((item, index) => split.indexOf(item) !=index)
    }
 return count;
}
console.log(highestcount)