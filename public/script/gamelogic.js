var socket = io();
var place_bets = -1;
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
  document.getElementById('startturn').style.display="block";
  startTimer();
  setTimeout(function(){
    document.getElementById('startturn').style.display="none";
    //document.getElementById('endturn').style.display="block";
    //no_spinning();    
    }, 2000);
  setTimeout(function(){
    document.getElementById('startturn').style.display="none";
    document.getElementById('endturn').style.display="block";
    }, 30000);
}

function disablebetting(){
  document.getElementById('endturn').style.display="block";
  //document.getElementById('disablebettinguser').style.display="block";
}

function no_spinning(){
  document.getElementsByClassName("image-roulette-spin")[0].style.display="none";
  document.getElementsByClassName("image-roulette")[0].style.display="inline-block";
}

function openWinningNumberModal(winning_nnn){
  var modal = document.getElementById('winning');
  modal.style.display = "block";
  document.getElementById('winningNumber').value = winning_nnn;
  /*
  for(int ii==){

  }
  */
}

function startPolling() {
    var interval = setInterval(function () {
      socket.emit('gameroom status poll', place_bets);
    }, 1000);
}

/*
socket.on('betting credit', function(bal){
    console.log("CREDIT UPDATED FROM THE BETTING RESULTS");
    location.reload();
});

socket.on('chat message', function(msg) {
    console.log("message received");
    $('#messages-area').append($('<li>').text(msg));
});


socket.on('current winning number', function(msg) {
    console.log("winning number received received");
    winning_number=msg;
    alert("Winning number: "+winning_number);
    spinning(winning_number);
});

socket.on('gameroom status update', function(value) {    
    place_bets = value;
    alert("place bets is: "+place_bets);
    if(place_bets == 0) {
        // allow player to play game
        startplayerturn();
        // here we need to set a timer interval to 1 minute
    } else if(place_bets == 1) {
        // disable the roulette table
        // I DONT KNOW HOW TO DO THIS
        disablebetting();
        // spin the wheel
        socket.emit('get winning number', winning_number);
    } else if(place_bets == 2) {
        // get winning number from server
        // fetchWinningNumber();
    } else if(place_bets == 3) {
        // calculate player score
        // call my cool function!
        checkBetting();
    }
    console.log("gameroom status update " + value);  
});
*/