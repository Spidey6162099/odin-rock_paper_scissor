const arr=["rock","scissors","paper"];



function getComputerchoice(){
let rando=Math.floor(Math.random()*3);
return arr[rando];
}

function getResult(choice){
 if(choice==""){
    return 3;
 }
 else if(choice=="scissors"){
    return 2;
 }
 else{
    return 1;
 }
}

function play_one_round(computerChoice,playerChoice){
    if(computerChoice=="rock"){
        return (playerChoice=="paper"?false:true);
        
    }
    else if(computerChoice=="paper"){
        return(playerChoice=="scissors"?false:true);
    }
    else{
        return(playerChoice=="rock"?false:true);
    }
        
}

function the_game(){
    let count=0;
    let player_score=0,computer_score=0;
    while(count<3){
    let playerChoice=(prompt("enter one of the following options: rock,paper,scissor","rock")).toLowerCase();
    let computerChoice=getComputerchoice();
    console.log(computerChoice);
    console.log(playerChoice);
    if(computerChoice==playerChoice){
        console.log("tis a draw");
        continue;
    }
    console.log(`the player has chosen ${playerChoice} while computer ${computerChoice}`);
    if(play_one_round(computerChoice,playerChoice)){

        computer_score++;
        console.log("the computer wins this round");
    }
    else{
        player_score++;
        console.log("ha the ai overlord is crushed this round");
    }
    count++;
    }
    if(player_score>computer_score){
        console.log("tis a victory for rebellion");
    }
    else{
        console.log("alas laddie,defeat it is the skynet prevails");
    }

    
    let ch=prompt("do you wish to have another go y/n?");
    if(ch=="y"){
        the_game();
    }
    else{
        console.log("thank you");
    }
    

}
the_game();