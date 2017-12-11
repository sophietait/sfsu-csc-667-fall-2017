function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}

function openchat(){
  document.getElementById("closed-chat").style.display="none";
  document.getElementById("live-chat").style.display="block";
}

function closechat(){
  document.getElementById("closed-chat").style.display="block";
  document.getElementById("live-chat").style.display="none";
}

function openchatLobby(){
  document.getElementById("closed-chat-lobby").style.display="none";
  document.getElementById("live-chat-lobby").style.display="block";
}

function closechatLobby(){
  document.getElementById("closed-chat-lobby").style.display="block";
  document.getElementById("live-chat-lobby").style.display="none";
}

function startTimer() {
  var presentTime = document.getElementById('player-timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var s = checkSecond((timeArray[1] - 1));
  document.getElementById('player-timer').innerHTML = "00:" + s;
  setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0){ sec="00";}
    return sec;
  }

function spinning(){
  document.getElementsByClassName("image-roulette")[0].style.display="none";
  document.getElementsByClassName("image-roulette-spin")[0].style.display="inline-block";
  setTimeout(function(){
    openWinningNumberModal();
  }, 3000);
  setTimeout(function(){
    document.getElementById('winning').style.display="none";
    document.getElementById('startturn').style.display="block";
    startTimer();
    }, 6000);
  setTimeout(function(){
    document.getElementById('startturn').style.display="none";
    document.getElementById('endturn').style.display="block";
    no_spinning();    
    }, 66000);
  setTimeout(function(){
    document.getElementById('endturn').style.display="none";
    }, 70000);
}

function no_spinning(){
  document.getElementsByClassName("image-roulette-spin")[0].style.display="none";
  document.getElementsByClassName("image-roulette")[0].style.display="inline-block";
}

function sendForgotPassword() {
  alert("The email has been sent correctly. Please check your email");
}

function openWinningNumberModal(){
  var modal = document.getElementById('winning');
  modal.style.display = "block";
  var w = getRandomNumber();
  document.getElementById('winningNumber').value = w;
}

function openBettingModal(numberToBet){
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function closeBettingModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function openLeaderModal(){
  var modal = document.getElementById('leaderboard');
  modal.style.display = "block";
}

function closeLeaderModal(){
  var modal = document.getElementById('leaderboard');
  modal.style.display = "none";
}

function getBettingQuantity(){
  var quantity = document.getElementById('amountbet').value;
  modal.style.display = "none";
  document.getElementById('amountbet').value="";
  return quantity;
}

function getRandomNumber(){
    var winningNumber=Math.floor(Math.random() * 36);
    return winningNumber;
}

function checkBetting(numberToBet){
    var amountbet=getBettingQuantity();
    var winningNumber=getRandomNumber();
    //store the winning number into de game database
    //currentMoney=get this money from user

    if(currentMoney<=0 || currentMoney-amountbet<=0){
      alert("Sorry, you cannot bet! Please add some credit");
    }
    else{
      var ii;
      for(ii=0; ii<37; ii++){
        if(numberToBet==ii){
          if(winningNumber==ii){
            currentMoney += amountbet*35;
          }
          else{
            currentMoney -= amountbet;
          }
        }
      }

      switch (numberToBet) {
        case 0:
          if(winningNumber==0){
            currentMoney += amountbet*4;
          }
          else{
            currentMoney -= amountbet;
          }
          break;
        case 50: //red
            if(winningNumber== 1 || winningNumber== 3 || winningNumber== 5 ||
              winningNumber== 7 || winningNumber== 9 || winningNumber== 12 ||
              winningNumber== 14 || winningNumber== 16 || winningNumber== 18 ||
              winningNumber== 19 || winningNumber== 21 || winningNumber== 23 ||
              winningNumber== 25 || winningNumber== 27 || winningNumber== 30 ||
              winningNumber== 32 || winningNumber== 34 || winningNumber== 36){
                currentMoney += amountbet;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 60://black
            if(winningNumber== 2 || winningNumber== 4 || winningNumber== 6 ||
              winningNumber== 8 || winningNumber== 10 || winningNumber== 11 ||
              winningNumber== 13 || winningNumber== 15 || winningNumber== 17 ||
              winningNumber== 20 || winningNumber== 22 || winningNumber== 24 ||
              winningNumber== 26 || winningNumber== 28 || winningNumber== 29 ||
              winningNumber== 31 || winningNumber== 33 || winningNumber== 35){
                currentMoney += amountbet;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 77://odd
            if(winningNumber%2!=0){
              currentMoney += amountbet;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 88: //even
            if(winningNumber%2==0){
              currentMoney += amountbet;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 37://2 to 1
            if(winningNumber== 1 || winningNumber== 4 || winningNumber== 7 ||
              winningNumber== 10 || winningNumber== 13 || winningNumber== 16 ||
              winningNumber== 19 || winningNumber== 22 || winningNumber== 25 ||
              winningNumber== 28 || winningNumber== 31 || winningNumber== 34){
                currentMoney += amountbet*2;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 38://2 to 1
            if(winningNumber== 2 || winningNumber== 5 || winningNumber== 8 ||
              winningNumber== 11 || winningNumber== 14 || winningNumber== 17 ||
              winningNumber== 20 || winningNumber== 23 || winningNumber== 26 ||
              winningNumber== 29 || winningNumber== 32 || winningNumber== 35){
                currentMoney += amountbet*2;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 39://2 to 1
            if(winningNumber== 3 || winningNumber== 6 || winningNumber== 9 ||
              winningNumber== 12 || winningNumber== 15 || winningNumber== 18 ||
              winningNumber== 21 || winningNumber== 24 || winningNumber== 27 ||
              winningNumber== 30 || winningNumber== 33 || winningNumber== 36){
                currentMoney += amountbet*2;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 112://first 12: 1-12
            if(0 < winningNumber && winningNumber < 13){
              currentMoney += amountbet*2;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 212://2nd 12: 13-24
            if(12 < winningNumber && winningNumber < 25){
              currentMoney += amountbet*2;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 312://3rd 12: 25-36
            if(24 < winningNumber && winningNumber < 37){
              currentMoney += amountbet*2;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 118://1-18
            if(0 < winningNumber && winningNumber < 19){
              currentMoney += amountbet;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        case 1936://19-36
            if(18 < winningNumber && winningNumber < 37){
              currentMoney += amountbet;
            }
            else{
              currentMoney -= amountbet;
            }
            break;
        default:
            console.log("this shouldn't happen!");
        }
    }

    //here we should update the credit amount of every player!!!!!!!!

  }
