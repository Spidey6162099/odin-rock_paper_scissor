const arr=["rock","scissors","paper"];
let player_score=0,computer_score=0,count=0;
const result=document.querySelector("#score_card>#results");
result.setAttribute('style','color:purple;font-size:60px')
function getComputerchoice(){
let rando=Math.floor(Math.random()*3);
return arr[rando];
}

// function getResult(choice){
//  if(choice==""){
//     return 3;
//  }
//  else if(choice=="scissors"){
//     return 2;
//  }
//  else{
//     return 1;
//  }
// }

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

function the_game(playerChoice){
    result.textContent="";
    const play_score=document.querySelector("#score_card>#scores_player");
    const comp_score=document.querySelector("#score_card>#scores_computer");
   
    //let playerChoice=(prompt("enter one of the following options: rock,paper,scissor","rock")).toLowerCase();
    let computerChoice=getComputerchoice();
    // console.log(computerChoice);
    // console.log(playerChoice);
    const round=document.querySelector("#rounds");
    round.textContent=`current round:${count+1}`;
    console.log(`the player has chosen ${playerChoice} while computer ${computerChoice}`);
        if(computerChoice==playerChoice){
        console.log("draw");
        
    }
    
    if(play_one_round(computerChoice,playerChoice)){

        computer_score++;
        //console.log("the computer wins this round");
       
    }
    else{
        player_score++;
        //console.log("ha the ai overlord is crushed this round");
    }
    count++;
    play_score.textContent=`player: ${player_score}`;
    comp_score.textContent=`computer: ${computer_score}`;
    if(count ==3){
        
         
         if(player_score>computer_score){
         result.textContent="victory";
        }
        else if(player_score<computer_score){
            result.textContent="loss";
        }
        else{
            result.textContent="tie";
        }
        count=0;
        player_score=0;
        computer_score=0;
        
    }   
}
const rock=document.querySelector("div#choice_container>#rock");

const scissor=document.querySelector("div#choice_container>#scissor");
const paper=document.querySelector("div#choice_container>#paper");

rock.addEventListener('mousedown',(e)=>{
    
    if(e.button==0){
    the_game("rock")}

});
scissor.addEventListener('mousedown',(e)=>{
    if(e.button==0){
    the_game("scissors")}

});
paper.addEventListener('mousedown',(e)=>{
    if(e.button==0){
    the_game("paper")}

});