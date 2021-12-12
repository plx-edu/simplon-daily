"use strict";

function menu(){
    console.log("##### Exercise #####");
    // let choice = +prompt("Choose an exercise:", "0");
    let choice = +document.getElementById('exercise_no').value;

    switch(choice) {
        
        //01-looping-a-triangle
        case 1:
            console.log("01-looping-a-triangle:");
            // Method 1
            let a1 = "#######";

            for(let i = 0; i < a1.length; i++){
                console.log(a1.substring(0, i+1));
            }

            // Method 2
            /*
            let b = "#"
            let c = b;
            for(let i = 0; i < 7; i++){
                console.log(c);
                c += b;
            }
            */
            break;
        
        // 02-fizzbuzz
        case 2:
            console.log("02-fizzbuzz");
            for(let i = 1; i <= 100; i++){
                let a = "";

                if(i%3 === 0) a += "Fizz";
                if(i%5 === 0) a += "Buzz";
                if(a.length === 0) a = i;

                console.log(a);
            }
            break;

        // 03-chessboard
        case 3:
            console.log("03-chessboard");

            // let char = [" ", "#"];
            let char = ["🁣", "🁢"];
            let line = "";

            for(let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){
                    if(i%2 === 0) {
                        if(j%2 === 0) line += char[0];
                        else line += char[1];
                    }else{
                        if(j%2 === 0) line += char[1];
                        else line += char[0];
                    }
                }
                line += "\n";
            }
            console.log(line);
            break;

        // 04-minimum
        case 4:
            console.log("04-minimum");

            let a4 = +prompt("Enter a number 'a'");
            let b4 = +prompt("Enter a number 'b'");

            if(!isNaN(a4) && !isNaN(b4)){
                if(a4 < b4) console.log(a4);
                else if(b4 < a4) console.log(b4);
                else console.log(a4);
            }
            break;

        // 05-recursion
        case 5:
            console.log("05-recursion");

            let a5 = +prompt("Enter a number", 5);

            if(!isNaN(a5)) isEven(a5);
            else console.log("Not a number)");
            break;

        // 06-bean-counting
        case 6:
            console.log("06-bean-counting");

            let sti = prompt("Enter a word", "String to inspect");
            let ctc = prompt("Enter a character", "Character to count")[0];

            countChar(sti, ctc);
            break;

        // 07-sum-of-range
        case 7:
            console.log("07-sum-of-range");
            // range(1, 10, 2);
            sum(range(prompt("Start n°", 1),
                prompt("End n°", 10),
                prompt("Step", 1)));
            // sum(range(1, 10));
            // sum(range(5));
            break;

        // 08-reversing-array
        case 8:
            console.log("08-reversing-array");

            let arr = [0, 1, 2, 3, 4, 5, 7, 12];
            console.log(reverseArray(arr));
            console.log(reverseArrayInPlace(arr));

            arr = ["A", "B", "C", "D"];
            console.log(reverseArray(arr));
            console.log(reverseArrayInPlace(arr));

            break;

        // josephus-problem
        case 9:
            console.log("josephus-problem");
            
            josephus(5, 3);
            josephus(6, 2);
            josephus(7, 2);
            josephus(8, 2);
            josephus(10, 1);
            josephus(0, 0);
            josephus(666, 6);
            josephus(69, 69);
            josephus(5, 5);
            josephus(1, 1);

            break;
        default:
            console.log("Error: exercise not found.");
    }// switch
}// menu()

function isEven(elem){
    if(!isNaN(elem)){
        let n = Math.abs(elem);
        while(n !== 1 && n !== 0){
            n -= 2;
            // console.log(n);
        }
        
        if(n === 0) console.log(`${elem} is even`);
        else if(n === 1) console.log(`${elem} is odd`);
    }
}// isEven()

function countChar(sti, ctc){
    // sti: string to inspect
    // ctc: char to count

    let a = 0;
    for (const k in sti) {
        if(sti[k] === ctc) a++;
    }

    console.log(`Character "${ctc}" is ${a} time(s) in "${sti}".`);
    return a;
}// countChar()

function range(startNo, endNo, step){
    startNo = +startNo;
    endNo = +endNo;
    step = +step;

    if(isNaN(step)){
        step = 1;
    }else if(step === 0){
        step = Math.abs(startNo - endNo);
    }else{
        step = Math.abs(step);
    }

    let arr = [];
    // console.log("start ", arr);

    if(startNo < endNo){
        for(let i = startNo; i <= endNo; i += step){
            arr.push(i);
        }
    }else if(startNo > endNo){
        for(let i = startNo; i >= endNo; i -= step){
            arr.push(i);
        }
    }else {
        arr = [startNo];
    }

    console.log(`Range: ${startNo}, ${endNo} - Step: ${step}`);
    console.log(arr);
    return arr;
}// range()

function sum(arrayToCalculate){
    let result = 0;

    for (let k of arrayToCalculate) {
        result += k;
        // console.log(k, "->", result);
    }

    console.log("Sum result:", result);
}// sum()

function reverseArray(arrToRv){
    // arrToRv: array to reverse
    let rvrsd = [];
    
    console.log("reverseArray()")
    console.log(arrToRv);
    for(let i = arrToRv.length-1; i >=0 ; i--) {
        rvrsd.push(arrToRv[i]);
    }

    return rvrsd;
}// reverseArray()


function reverseArrayInPlace(arr){
    console.log("reverseArrayInPlace()")
    console.log(arr);

    // Keep last item as is
    let start = arr.length - 2;
    for(let i = start; i >= 0 ; i--){
        arr.push(arr[i]);
        arr.splice(i, 1);
    }

    return arr;
}// reverseArrayInPlace()

function josephus(n, k){
    if(k === 0) k = 1;

    let p = [];

    // Add prisoner(s)
    for(let i = 0; i < n; i++){
        p.push(`Prisoner #${i+1}`);
    }
    
    let bye = 1;
    let currentIndex = 0;
    let deadp = 0;
    do{
        // Kill prisoner(s)
        if(bye === k && n > 0){
            // console.log("Goodbye", p[currentIndex], currentIndex);
            delete p[currentIndex];
            bye = 0;
            deadp++;
        }
        
        currentIndex++;
        if(currentIndex > p.length -1){
            currentIndex = 0;
        }
        
        if(p[currentIndex] !== undefined){
            bye++;
        }
        
    }while(deadp < n-1);
    
    p = cleanArray(p);
    console.log(`Josephus(${n}, ${k}): ${p[0]} is free.`);
}

// Removes empty slots from array
function cleanArray(arr){
    let clean = [];

    for (const k of arr) {
        if(k !== undefined) clean.push(k);
    }

    return clean;
}// cleanArray()








