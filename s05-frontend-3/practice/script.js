// "use strict";
// Object Methods
// Test cours sur les Objects.
function userLesson(){
    let user = {
        name: "John",
        age: 30,

        sayHi(){
            console.log(`${this.name} says Hi.`);
        },

        sayBye(){ console.log(`${this.name} says Bye.`); }
    };
    
    user.sayHi();

    user.name = "Ann";
    user.sayHi();
    user.sayBye();
}


// Using "this" in object literal
function objectLiteral(){
    console.log("::::: Object literal 'this'");

    function makeUser(){
        return {
            name: "John",
            ref: this
        };
    }
    
    let user = makeUser();
    /*
    Avis avant lancement:
    l'instruction suivante
        user.ref.name
    peut être remplacer par
        user.this.name
    parce que, normalement, ref = this
    et donc ca affichera "John"
    */

    // Réponse:
    console.log(":: .ref.name:", user.ref.name); // retourne; <empty string>
    console.log(":: .name:", user.name); // retourne; John
    console.log(":: .ref:", user.ref); // retourne un objet(?): Window (etc...)

    // Pourquoi ?
    // Bonne question...
}


// Create a calculator
function calculator(){
    console.log("::::: Calculator")

    let calc = {
        a: 0,
        b: 0,
    
        read(){
            this.a = +prompt("Enter number a", 2);
            this.b = +prompt("Enter number b", 3);
            // console.log("a", this.a, " - b", this.b);
        },
    
        sum(){ return (this.a + this.b); },
        mul(){ return (this.a * this.b); }
    };
    
    calc.read();
    console.log(`sum(${calc.a}, ${calc.b}) = ${calc.sum()}`);
    console.log(`mul(${calc.a}, ${calc.b}) = ${calc.mul()}`);
}


// Chaining
function ladder(){

    /*
    Pour un obj.f(), this est "obj"
    On retourne this dans les methodes up/down
    pour pouvoir les enchainer
    */

    let lddr = {
        step: 0,
        up() {
            console.log(`step = ${this.step} -> up()`)
            this.step++;
            return this;
        },
        down() {
            console.log(`step = ${this.step} -> down()`)
            this.step--;
            return this;
        },
        showStep(){
            // console.log(this.step);
            console.log(`step = ${this.step}`)
        }
    };
    
    lddr.up().up().up().down().up().up().down().showStep();
}

// temp next
function tmp(){

    /*
    tmp
    */
}

export function pow(a, b){
    return a ** b;
}










