let src = {
    name:"Waqas",
    RollNO : "1149",
    School : "private"
}


let dest = Object.assign({},src);
src.RollNO= "1119";
console.log(dest);
