//rps
function rpsGame(yourChoice){  //your choice to choose rock,paper, scissors
    console.log(yourChoice);
    var humanChoice, computerChoice;
    humanChoice= yourChoice.id;

    computerChoice= numToChoice(randompick());
    console.log('Computer choice:', computerChoice);

    results = decideWinner(humanChoice, computerChoice);
    console.log(results);

    message= gameResult(results)
    console.log(message);

    rpsFrontEnd(yourChoice.id ,computerChoice, message);
}

function randompick(){ //computer picks rps random
  return Math.floor(Math.random()*3);
}

function numToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){  //possible game outcomes
    var outcomes={
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper':1,'scissors':0.5,'rock':0}
    }

    var yourScore = outcomes[yourChoice][computerChoice]
    var computerscore = outcomes[computerChoice][yourChoice];

    return[yourScore, computerscore];
}

function gameResult([yourScore, computerscore]){  //game result funtion 
    if(yourScore ===0){
        return{'message': 'You Lost!', 'color':'red'};
    }else if(yourScore === 0.5){
        return{'message': 'Draw!', 'color':'blue'};
    }else{
        return{'message': 'You won!', 'color':'yellow'};
    }
}

function rpsFrontEnd(humanImageChoice, computerImageChoice,gameResult){
    var images= {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //remove images once clicked
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanImageChoiceDiv = document.createElement('div');
    var computerImageChoiceDiv = document.createElement('div');
    var messageDiv = document.createElement('div')

    humanImageChoiceDiv.innerHTML = "<img src='" + images[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + gameResult['color'] + "; font-size: 60px; paddng:30px; '>" + gameResult['message'] + "</h1"
    computerImageChoiceDiv.innerHTML = "<img src='" + images[computerImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanImageChoiceDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(computerImageChoiceDiv);
    

}