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

  function reestartTimer(){
    document.getElementById('player-timer').innerHTML = "00:" + 15;
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0){ sec="00";}
    return sec;
  }

function sendForgotPassword() {
  alert("The email has been sent correctly. Please check your email");
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

function getRandomNumber(){
    var winningNumber=Math.floor(Math.random() * 36);
    return winningNumber;
}
