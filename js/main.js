//Input field. Ask the user how much they are betting. Min and max
//Create a slot game object with 3 reels
//Each reel is an array with five elements
//the slot object has method to pull the rod

document.getElementById('pullRod').onclick = function(){

function SlotMachine(){
 this.reel1 = ["pear","apple","banana","cherry","grapes"];
 this.reel2 = ["pear","apple","banana","cherry","grapes"];
 this.reel3 = ["pear","apple","banana","cherry","grapes"];
}

 var bet = parseFloat(document.getElementById('bet').value);

SlotMachine.prototype.pullRod = function (x) {
 var resultArray=[];
 var money = x;
 //take every reel in  the prototype
 //define a random number between 0-4
 var num1 = Math.floor(Math.random()*5);
 var num2 = Math.floor(Math.random()*5);
 var num3 = Math.floor(Math.random()*5);
 resultArray.push(this.reel1[num1]);
 resultArray.push(this.reel2[num2]);
 resultArray.push(this.reel3[num3]);

 document.getElementById('outcome').innerHTML = resultArray;
 //evaluate the result
 if ((resultArray[0]==resultArray[1])&&(resultArray[1]==resultArray[2])){
   document.getElementById('winLoss').innerHTML = "You multiplied by 10!";
   money = money*10;
 } else if ((resultArray[0]==resultArray[1])||(resultArray[1]==resultArray[2])||(resultArray[0]==resultArray[2])) {
   //user duplicates
   document.getElementById('winLoss').innerHTML = "You doubled!";
   money = money*2;
 } else{
   //user looses
   document.getElementById('winLoss').innerHTML = "You lost!";
   money=0;
 }
};

  var slot = new SlotMachine();
  slot.pullRod(bet);

};
