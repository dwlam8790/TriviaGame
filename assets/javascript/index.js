var rightAnswers = 0;
var wrongAnswers = 0;
var noAnswers = 0;

//questions for trivia game
//using an array to select correct answer
//20 questions? -- I only did 10
var questions = [{
    question: "Who discovered Christmas Island on Christmas Eve in 1777?",
    //string -- questions were generated by google search after searching for "I'm feeling curious"
    answersListed:["Captain Mark Hook", "Captain James Cook", "Captain James T. Kirk", "Captain William Smith II"],
    //array of choices for answers
    answer:[1]
    //place array number
}, {
//commma is needed between question sets
    question: "Is the moon a planet or a star?",
    answersListed:["Planet", "Star", "Satilite", "None of the Above"],
    answer:[3]
}, {
    question: "Where did Martin Luther King Jr go to elementary school?",
    answersListed: ["Yonge Street Elementary School", "Horace Mann Elementary School", "Tracy Elementary School", "Washington Elementary School"],
    answer:[0]
}, {
    question: "What color is a blue lobster after it is cooked?",
    answersListed:["Bright yellow", "Bright Red", "Bright Green", "Blue"],
    answer:[1]
}, {
    question:"How many letters is in the longest word in the English dictionary?",
    answersListed:["37", "40", "22", "45"],
    answer:[3]
}, {
    question:"How fast is a snail's pace?",
    answersListed:["0.013 m/s", "0.010 m/s", "0.015 m/s", "0.030 m/s"],
    answer:[0]
}, {
    question:"How many teeth does a cow have?",
    answersListed:["22", "45", "32", "37"],
    answer:[2]
}, {
    question:"What country has the most time zones?",
    answersListed:["France", "Canada", "Russia", "United States of America"],
    answer:[0]
}, {
    question:"What is Wolverine's real name?",
    answersListed:["Michael Hartlett", "Kenneth Locke", "James Howlett", "Chris Smitters"],
    answer:[2]
}, {
    question:"What kind of animal is a dingo?",
    answersListed:["A dog", "A kangaroo", "A koala", "None of the Above"],
    answer:[0]
}];

//using jquery to start the button for the game
$("#start").on("click", function() {
    //display the time counter
    $("#time").html("<h3>Time Remaining: 30 Seconds</h3>" + "<br>");
    run();

    //using id classes for questions
    //question one
    $("question1").html("<h4>" + questions[1].question +"<h4>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
    + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answersListed[1] + "</label>" 
    + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answersListed[2] + "</label>"
    + "<input type='radio' name='answer1' value='3'>" +"<label>" + questions[0].answersListed[3] + "</label><br><br>"
    );
    //questions two
    $("#question2").html("<h4>" + questions[2].question + "<h4>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "label" + questions[1].answersListed[0] + "</label>"
    + "input type='radio' name='answer2' value='1'>" + "label" + questions[1].answersListed[1] + "</label>"
    + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer2' value='3'>" +"<label>" + questions[1].answersListed[3] + "</label><br><br>"
    );
    //question three
    $("#question3").html("<h4>" + questions[3].question + "<h4>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "label" + questions[2].answersListed[0] + "</label>"
    + "input type='radio' name='answer3' value='1'>" + "label" + questions[2].answersListed[1] + "</label>"
    + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer3' value='3'>" +"<label>" + questions[2].answersListed[3] + "</label><br><br>"
    );
    //question four
    $("#question4").html("<h4>" + questions[4].question + "<h4>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "label" + questions[3].answersListed[0] + "</label>"
    + "input type='radio' name='answer4' value='1'>" + "label" + questions[3].answersListed[1] + "</label>"
    + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer4' value='3'>" +"<label>" + questions[3].answersListed[3] + "</label><br><br>"
    );
    //question five
    $("#question5").html("<h4>" + questions[5].question + "<h4>");
    $("#answer5").html("<input type='radio' name='answer4' value='0'>" + "label" + questions[4].answersListed[0] + "</label>"
    + "input type='radio' name='answer5' value='1'>" + "label" + questions[4].answersListed[1] + "</label>"
    + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer5' value='3'>" +"<label>" + questions[4].answersListed[3] + "</label><br><br>"
    );
    //question six
    $("#question6").html("<h4>" + questions[6].question + "<h4>");
    $("#answer6").html("<input type='radio' name='answer4' value='0'>" + "label" + questions[5].answersListed[0] + "</label>"
    + "input type='radio' name='answer6' value='1'>" + "label" + questions[5].answersListed[1] + "</label>"
    + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer6' value='3'>" +"<label>" + questions[5].answersListed[3] + "</label><br><br>"
    );
    //question seven
    $("#question7").html("<h4>" + questions[7].question + "<h4>");
    $("#answer7").html("<input type='radio' name='answer4' value='0'>" + "label" + questions[6].answersListed[0] + "</label>"
    + "input type='radio' name='answer7' value='1'>" + "label" + questions[6].answersListed[1] + "</label>"
    + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer7' value='3'>" +"<label>" + questions[6].answersListed[3] + "</label><br><br>"
    );
    //question eight
    $("#question8").html("<h4>" + questions[8].question + "<h4>");
    $("#answer8").html("<input type='radio' name='answer4' value='0'>" + "label" + questions[7].answersListed[0] + "</label>"
    + "input type='radio' name='answer8' value='1'>" + "label" + questions[7].answersListed[1] + "</label>"
    + "<input type='radio' name='answer8' value='2'>" + "<label>" + questions[7].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer8' value='3'>" +"<label>" + questions[7].answersListed[3] + "</label><br><br>"
    );
    //question nine
    $("#question9").html("<h4>" + questions[9].question + "<h4>");
    $("#answer9").html("<input type='radio' name='answer4' value='0'>" + "label" + questions[8].answersListed[0] + "</label>"
    + "input type='radio' name='answer9' value='1'>" + "label" + questions[8].answersListed[1] + "</label>"
    + "<input type='radio' name='answer9' value='2'>" + "<label>" + questions[8].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer9' value='3'>" +"<label>" + questions[8].answersListed[3] + "</label><br><br>"
    );
    //question ten
    $("#question10").html("<h4>" + questions[10].question + "<h4>");
    $("#answer10").html("<input type='radio' name='answer4' value='0'>" + "label" + questions[9].answersListed[0] + "</label>"
    + "input type='radio' name='answer10' value='1'>" + "label" + questions[9].answersListed[1] + "</label>"
    + "<input type='radio' name='answer10' value='2'>" + "<label>" + questions[9].answersListed[2] + "</label><br><br>"
    + "<input type='radio' name='answer10' value='3'>" +"<label>" + questions[9].answersListed[3] + "</label><br><br>"
    );
    
    
    
    

})
