class father{
    age = 12;
    weight = 56;
    color = "white";
    #religion = "Islam" ;


    get Myreligion(){
        return this.#religion;
    }
    set ChangeinReligion(Islam){
        this.#religion = Islam; 
    }
   constructor(color){      // in  javasccript you have to use constructor keyword to initilize the constructor
    this.color= color;
   }
     MyName(name) {
     console.log("My name is = ",name)
    }
}
class child extends father{
    age = 13;
    MyName(rollNO){
        console.log("My roll No :",rollNO)
    }
}

let f = new father("green");
let c = new child();
c.ChangeinReligion = "Islamic"    // so here we can set the value of set method by  =  operator 
console.log(c.Myreligion);  //so by making the getter method we can access the privat data member 

c.MyName(16);   //this is an example of method overriding in javascript
