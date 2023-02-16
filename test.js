/*"use strict";
let usename="Usnavi"
console.log(`usuario es: ${usename}`);

let userName ="Emmanuel"
console.log(`El usuario es: ${userName}`);

//infinito
console.log(1/0)

//NaN  Not a number
console.log("a"/2)

//bolean
let dragon={
    name: "Falkor",
    hasName: false
}
console.log(dragon.hasName ? dragon.name : "Dragon doesn't have name");

//funcion

function getName(studentID){
    let student
}

// clase 16/02/23
//objetos

//declaracion de un objeto

const person = {
    name : "Emmanuel",
    lastname : "Reyes",
    
    printfullname(){
        //console.log(this.name +" "+ this.lastname);
        console.log`${this.name} ${this.lastname}`;
       
    }
};
//formas de invocar funcion
person.printfullname();
//person["printfullname"]();

//DRY
const PersonMaker = (name, lastname, isStudent)=>{
    return{
        name,
        lastname,
        isStudent,
        getFullname: function(){
            return `${this.name} ${this.lastname}`
        }
    }
};
//probando PersonMaker
let person01 = PersonMaker("Tony","Stark", false);
let person02 = PersonMaker("Peter","Parker", true);
console.log(person01);
console.log(person02);
*/

//nosé pero es distinto xd
const PersonMaker = (nameKey, lastnameKey, isStudent)=>{
    return{
        [nameKey] : "",
        [lastnameKey] : "",
        isStudent,
        getFullname: function(){
            return `${this.nameKey} ${this.lastnameKey}`
        }
    }
};

//probando
let person01 = PersonMaker("Nombre", "Apellido",false);
person01.Nombre = "Tony";
person01.Apellido = "Stark";
console.log(person01);
let person02 = PersonMaker("ThName", "Surname",false);
person02.Nombre = "a";
person02.Apellido = "b";
console.log(person02);