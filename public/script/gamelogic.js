var socket = io();
var place_bets = 0;
var winning_number = -1;
//var betting_id_array = [-1,-1,-1,-1,-1];
//var amount_bet_array = [0,0,0,0,0];

var betting_id=-1;
var amount_bet=-1;


function spinning(winning_nnn){
  document.getElementById('endturn').style.display="none";  
  document.getElementsByClassName("image-roulette")[0].style.display="none";
  document.getElementsByClassName("image-roulette-spin")[0].style.display="inline-block";
  setTimeout(function(){
    openWinningNumberModal(winning_nnn);
  }, 3000);
  setTimeout(function(){
    document.getElementById('winning').style.display="none";
    }, 6000);
}

function startplayerturn(){
  no_spinning();
  document.getElementById('disablebettinguser').style.display="none";  
  document.getElementById('alertupdates').value = "Now it is your turn!";
  document.getElementById('startturn').style.display="block";
  startTimer();
  setTimeout(function(){
    document.getElementById('startturn').style.display="none";
    }, 2000);
  setTimeout(function(){
    document.getElementById('startturn').style.display="none";
    document.getElementById('alertupdates').value = "Your turn just finished!";    
    document.getElementById('endturn').style.display="block";
    }, 32000);
}

function no_spinning(){
  document.getElementsByClassName("image-roulette-spin")[0].style.display="none";
  document.getElementsByClassName("image-roulette")[0].style.display="inline-block";
}

function openWinningNumberModal(winning_nnn){
  var modal = document.getElementById('winning');
  modal.style.display = "block";
  document.getElementById('winningNumber').value = winning_nnn;
}

function startPolling() {
    var interval = setInterval(function () {
      socket.emit('gameroom status poll', place_bets);
    }, 1000);
}