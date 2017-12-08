function addCredit(form){
    var currentCredit = document.getElementById("credit");
    var addedCredit = form.addedCredit.value;
    currentCredit += addedCredit;
    alert(currentCredit);
}

function openchat(){
  document.getElementById("closed-chat").style.display="none";
  document.getElementById("live-chat").style.display="block";
}

function closechat(){
  document.getElementById("closed-chat").style.display="block";
  document.getElementById("live-chat").style.display="none";
}

function spinning(){
  document.getElementsByClassName("image-roulette")[0].style.display="none";
  document.getElementsByClassName("image-roulette-spin")[0].style.display="inline-block";
  getRandomNumber();
}

function no_spinning(){
  document.getElementsByClassName("image-roulette-spin")[0].style.display="none";
  document.getElementsByClassName("image-roulette")[0].style.display="inline-block";
}

function sendForgotPassword() {
  alert("The email has been sent correctly. Please check your email");
}

function openBettingModal(numberToBet){
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function closeBettingModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function getBettingQuantity(){
  quantity = document.getElementById('amountbet').value;
  modal.style.display = "none";
  document.getElementById('amountbet').value="";  
  return quantity;
}

function getRandomNumber(){
    var winningNumber=Math.floor(Math.random() * 36);
    return winningNumber;
}

function displayRandomNumber(winningNumber){
  alert("Winning number is: "+winningNumber);  
}

function checkBetting(numberToBet){
  var amountbet=getBettingQuantity();
  var winningNumber=getRandomNumber();
  displayRandomNumber(winningNumber);

  for(int ii=0; ii<37; ii++){
    if(numberToBet==ii){
      if(winningNumber==ii){
        currentMoney += amountbet*5;
      }
      else{
        currentMoney -= amountbet;
      }
    }
  }

  switch (numberToBet) {
    case 50:
        if(winningNumber==0){

        }
        else{

        }
        break;
    case 60:
        if(winningNumber==1){
      
        }
        else{
      
        }
        break;
    case 77:
        
    case 88:
        
    case 37:
        
    case 38:
        
    case 39:
        
    case 112:
        
    case 212:
        
    case 312:
        
    case 118:
    
    case 1936:

    default:
        console.log("this shouldn't happen");
}
}