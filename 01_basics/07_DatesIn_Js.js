let mydate = new Date()
//console.log(mydate);

//console.log(mydate.toString());

//console.log(typeof mydate);

let newDate = new Date("11-23-2026");
//console.log(newDate.toLocaleDateString());

let timeStamp =  Date.now()
// console.log(timeStamp);

// console.log(newDate.getTime());
console.log (Math.floor(Date.now() / 1000));

newDate.toLocaleString('default', {
    weekday : "long"
    
})

