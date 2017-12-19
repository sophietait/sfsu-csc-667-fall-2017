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


var c = 15;
var t;
var timer_is_on = 0;

function timedCount() {
	if(c<10){
    c = "0"+ c;
  }
  //document.getElementById("txt").value = "00:"+ c;
  document.getElementById('player-timer').innerHTML = "00:" + c;
  c = c - 1;
  t = setTimeout(function(){ timedCount() }, 1000);
  if(c<0){
    clearTimeout(t);
  	timer_is_on = 0;
  }
}

function startTimer() {
	c = 15;
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0){ sec="00";}
    return sec;
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

