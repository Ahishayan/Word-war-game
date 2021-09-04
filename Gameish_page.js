player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name +":";
document.getElementById("player2_name").innerHTML = player2_name +":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player?").innerHTML = "asker turn-"+player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-"+player2_name;

function send() {
    get_word =document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word+"word in lower case")

    charAt1= word.charAt(1);
    console.log(charAt1);


    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);


    length_minus_1 = word.length-1;
    charAt3 =word.charAt(length_minus_1);
    console.log(charAt3);


    new_word1= word.replace(charAt1,"_");
    new_word2= new_word1.replace(charAt2,"_");
    new_word3= new_word2.replace(charAt3,"_");
    console.log(new_word3);

   
    question_word= "<h4 id='word_display'>Q"+new_word3+"</h4>";
    input_box= "<br> answer; <input id='input_word'>";
    button1="<br><button class='btn btn-success' onclick='god_stuff()'>Click me when u r done</button>";
    var row=question_word+input_box+button1;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value = "";
}

var question='player1'
var answer='player2'

function god_stuff(){
    var getanswer=document.getElementById("input_word").value;
    var answer=getanswer.toLowerCase();
    if(answer==word){
    if(question=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
         question="player2" ;   
         answer="player1"  ;  
         document.getElementById("player?").innerHTML = "asker turn-"+player2_name;
         document.getElementById("player_answer").innerHTML = "guesser turn-"+player1_name;
    }else{ 
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML = player2_score;
        answer="player2"   ;
        question="player1";
        document.getElementById("player?").innerHTML = "asker turn-"+player1_name;
        document.getElementById("player_answer").innerHTML = "guesser turn-"+player2_name;
    } console.log(answer);
    

  }
  document.getElementById(output).innerHTML="";
}