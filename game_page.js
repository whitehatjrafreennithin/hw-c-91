player1_name = localStorage.getItem("player_1_name-input");
player2_name = localStorage.getItem("player_2_name-input");


player1_score = 0;
player2_score = 0;


document.getElementById("Player1_name").innerHTML = player1_name + ":";
document.getElementById("Player2_name").innerHTML = player2_name + ":";

document.getElementById("Player1_score").innerHTML = player1_score;
document.getElementById("Player2_score").innerHTML = player2_score;


document.getElementById("Player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("Player_answer").innerHTML = "Answer Turn -" + player2_name;





function send() {
    getnumber1 = document.getElementById("Number1").value;
    getnumber2 = document.getElementById("Number2").value;
    console.log(getnumber1);


    

    
    

    question_word = "<h4 id='word_display'> Q. " + getnumber1 + " x " + getnumber1 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row = question_word + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("Number1").innerHTML = "";
document.getElementById("Number2").innerHTML = "";


}



question_turn = "player1_name";
answer_turn = "player2_name";

function check() {
    

    get_answer = document.getElementById("input_check_box").value;
    actual_answer = getnumber1 * getnumber2
    console.log(actual_answer);
    console.log(get_answer);
    if (get_answer == actual_answer) {

        if (answer_turn == "player1_name") {
            player1_score = player1_score + 1;
            document.getElementById("Player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("Player2_score").innerHTML = player2_score;
        }


    }



    if (question_turn == "player2_name") {
        question_turn = "player1_name"
        document.getElementById("Player_question").innerHTML = "Question Turn - " + player1_name;
    } else {
        question_turn = "player2_name"
        document.getElementById("Player_question").innerHTML = "Question Turn - " + player2_name;
    }


    if (answer_turn == "player1_name") {
        answer_turn = "player2_name"
        document.getElementById("Player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1_name"
        document.getElementById("Player_answer").innerHTML = "Answer Turn - " + player1_name;
    }



document.getElementById("output").innerHTML = "";

}