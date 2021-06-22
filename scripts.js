const td1 = document.querySelector('#td1');
const td2 = document.querySelector('#td2');
const td3 = document.querySelector('#td3');
const td4 = document.querySelector('#td4');
const td5 = document.querySelector('#td5');
const td6 = document.querySelector('#td6');
const td7 = document.querySelector('#td7');
const td8 = document.querySelector('#td8');
const td9 = document.querySelector('#td9');
const td10 = document.querySelector('#td10');
const td11 = document.querySelector('#td11');
const td12 = document.querySelector('#td12');
const td13 = document.querySelector('#td13');
const liItems = document.querySelectorAll('.li');
const diceCount = {};
const diceArray = []; 

function diceThrow() {
    // generates 5 dice valued from 1-6
    throwDice();
    // Returns dice values to html
    printDice();
    diceArray.sort();
    // Returns count for each value
    countDice();
    singles();
        // Full house
    fullHouse();
        // Straights
    straights();
        // Chance
    chance();
    }


    function throwDice() {
        for (let i = 0 ; i < 5 ; i++) {
            var dice = Math.floor(Math.random()*6) + 1;
            diceArray.push(dice);
        }
    }

    function printDice() {
        for (let u = 0 ; u < diceArray.length ; u++){
            liItems[u].innerHTML = diceArray[u];
        }
    }

    function countDice() {
        diceArray.forEach(function(x) {
            diceCount[x] = (diceCount[x] || 0) + 1;
            })
    }

    function singles() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        for (let x = 0 ; x < diceArray.length; x++){
            switch (diceArray[x]) {
                case 1:
                    td1.innerText = 1 * diceCount[1];
                    if(diceCount[1] === 3){
                        td7.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[1] === 4){
                        td8.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[1] === 5){
                        td12.innerText = 50;
                    }
                    break;
                case 2:
                    td2.innerText = 2 * diceCount[2];
                    if(diceCount[2] === 3){
                        td7.innerText = 2 * 3;
                    } if(diceCount[2] === 4){
                        td7.innerHTML = diceArray.reduce(reducer);
                    }  if(diceCount[2] === 5){
                        td8.innerHTML = diceArray.reduce(reducer);
                    }
                    break;
                case 3:
                    td3.innerText = 3 * diceCount[3];
                    if(diceCount[3] === 3){
                        td7.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[3] === 4){
                        td8.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[3] === 5){
                        td12.innerText = 50;
                    }
                    break;
                case 4:
                    td4.innerText = 4 * diceCount[4];
                    if(diceCount[4] === 3){
                        td7.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[4] === 4){
                        td8.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[4] === 5){
                        td12.innerText = 50;
                    }
                    break;
                case 5:
                    td5.innerText = 5 * diceCount[5];
                    if(diceCount[5] === 3){
                        td7.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[5] === 4){
                        td8.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[5] === 5){
                        td12.innerText = 50;
                    }
                    break;
                case 6:
                    td6.innerText = 6 * diceCount[6];
                    if(diceCount[6] === 3){
                        td7.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[6] === 4){
                        td8.innerHTML = diceArray.reduce(reducer);
                    }   if(diceCount[6] === 5){
                        td12.innerText = 50;
                    }
                    break;      
                default:
                    break;
            }
        }
    }
   

    function fullHouse(){
        if ((diceArray[0] === diceArray[1])&&(diceArray[2] === diceArray[4])) {
            td9.innerHTML = 25;
          } else if ((diceArray[0] === diceArray[2])&&(diceArray[3] === diceArray[4])) {
            td9.innerHTML = 25;
          }
    }

    function getSmStraightScore() {
        let joinDices = diceArray.join('');
        let repDices = joinDices.toString().replace(/(.)\1/,'$1');
        let x = (/1234|2345|3456/.test(repDices));
        return x ? 30 : 0;
    }
    
    function getLgStraightScore() {
        let joinDices = diceArray.join('');
        let repDices = joinDices.toString().replace(/(.)\1/,'$1');
        let x = (/12345|23456/.test(repDices));
        return x ? 40 : 0;
    }

    function straights() {
        if (getLgStraightScore() === 40 && getSmStraightScore() === 30){
            td11.innerHTML = 40;
        } if (getLgStraightScore() === 0 && getSmStraightScore() === 30){
            td10.innerHTML = 30;
        }
    }

    function chance(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        td13.innerHTML = diceArray.reduce(reducer);
    }