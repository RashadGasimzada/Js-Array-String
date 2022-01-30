//Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

let arr = [2,4,5,1,9,6,2];
function fromLargeToSmall(arr) {
    return arr.sort().reverse()
}
console.log(fromLargeToSmall(arr));

// ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.
//Hemin function geriye yeni bir array qaytarir. Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

let month = ["Yanvar","Fevral","Mart","Aprel"];

function indexOfMonth(month) {
    let newArr = month.map((x,index) => {
        index++;
        return x + "-" + index;
    });
    return newArr;
}

console.log(indexOfMonth(month));

//String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.

let str = "Salam Baku Necesen";

function stringCount(str) {
    return str.split(" ").map(x => x.length);
}

console.log(stringCount(str));
