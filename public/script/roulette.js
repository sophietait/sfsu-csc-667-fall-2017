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
    //alert(numberToBet);
}

function closeBettingModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function getBettingQuantity(){
  quantity = document.getElementById('amountbet').value;
  modal.style.display = "none";
  //alert(quantity);
  document.getElementById('amountbet').value="";
}

function getRandomNumber(){
    var winningNumber=Math.floor(Math.random() * 36);
    alert("Winning number is: "+winningNumber);
}
