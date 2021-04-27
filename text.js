$(document).ready(function () {
    $("form#loopTestForm").submit(runLoops);
});

function runLoops(event) {
    // Stop the form from submitting
    event.preventDefault();

    // This variable will contain one of three strings:
    // "for-loop", "while-loop", or "do-while-loop"
    let selectedLoop = $("input[name=loop-type]:checked").val();

    /*
        Depending on which loop was selected,
        call the appropriate function.

        Possible values of selectedLoop and
        the corresponding function calls are:

        "for-loop"	    ==>  runForLoop()
        "while-loop"    ==>  runWhileLoop()
        "do-while-loop" ==>  runDoWhileLoop()
    */

    switch(selectedLoop){
        case "for-loop":
            runForLoop();
            break;
        case "while-loop":
            runWhileLoop();
            break;
        case "do-while-loop":
            runDoWhileLoop();
            break;
    }




}


function runWhileLoop() {
    let number = parseInt($("input#myNumber").val());
    let output = "";

    /*
        Use a while loop to output the letter A
        "number" times. For example, if "number" is 5,
        then output should be "AAAAA".

        (Or for a challenge, output the first "number" letters of the alphabet!)

        Hint: Use jQuery's append() to add text to an element
        (instead of replacing text)

        $("div#while-result").append(...);
    */
    let start1 = 0;
    let end1 = number;
    let ball1 = start1;

    while(ball1 < end1) {
        output += "A";
        ball1++;
    }

    $("div#while-result").text(output);
}


function runForLoop() {
    let number = parseInt($("input#myNumber").val());
    let sum = 0;

    /*
        Use a for loop to add the numbers 1 through "number"
        into the variable "sum". Output the sum to the div.
    */

    let start = 1;
    let end = number;
    for(let ball = start; ball <= end; ball++){
        sum += ball;
    }

    $("div#for-result").text(sum);
}


function runDoWhileLoop() {
    let number = parseInt($("input#myNumber").val());

    /*
        Use a do-while loop to output the numbers 1 through
        "number". For example, if "number" is 5, then output
        should be "12345".

        Hint: Use jQuery's append() to add text to an element
        (instead of replacing text)

        $("div#do-while-result").append(...);
    */
    let start = 1;
    let end = number + 1;
    let ball = start;

    do{
        $("div#do-while-result").append(ball);
        ball++;
    } while(ball < end);



}