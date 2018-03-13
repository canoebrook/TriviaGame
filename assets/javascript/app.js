var tGame = {
  right: 0,
  wrong: 0,
  notReached: 0,

  items: ["How old is Clara?"
          ,"What is Clara's favorite drink?"
          ,"When reading, how does Clara say 'words'?"
          ,"What is Clara's favorite song?"
          ,"What was Clara's score in her first bowling game?"],
  
  choices: ["2,3,4,5",
            "Coke,Leite Brown,Bourbon,Petroni",
            "Pink,Umm...,Azul,ABCBs",
            "O Leaozinho,Benke,O Rato - Ratimbum,sopa do nenem",
            "23,45,136,187"],

  scoreKey:[0,1,3,0,2],

  itemResponse: [-1,-1,-1,-1,-1],

  scoreTest() {
    $('input:radio:checked').each(function() {
      // alert($(this).val()+' '+$(this).attr('id').substr(5));
      tGame.itemResponse[parseInt($(this).attr('id').substr(5))]=$(this).val();

    });
     for(let i=0; i<this.items.length; i++) {
       if (tGame.itemResponse[i] === -1) {
         tGame.notReached++;
       }
       else { 
          if (tGame.scoreKey[i]==tGame.itemResponse[i]) 
            {tGame.right++;}
          else 
            {tGame.wrong++;}
       }
     };
     tGame.notReached = tGame.items.length-tGame.right-tGame.wrong;
    //  alert('Num Right='+tGame.right);
    //  alert('Num Wrong='+tGame.wrong);
    //  alert('Not Reached='+tGame.notReached);
  },


  gameOver() {
    tGame.scoreTest();
    var itemsDiv = $("label").remove();
    var pDiv = $("p").remove();
    var startButton = $("#startButton").show();
    var resultsDiv=$("#results-div");
    var p0= $("<p>");
    $(p0).addClass("text-center text-primary");
    $(p0).text('TIME IS UP; GAME OVER!!');
    resultsDiv.append(p0);
    var p1 = $("<p>");
    $(p1).addClass("text-primary text-center");
    $(p1).text('Number Correct: '+tGame.right);
    resultsDiv.append(p1);
    var p2 = $("<p>");
    $(p2).addClass("text-primary text-center");
    $(p2).text('Number Wrong: '+tGame.wrong);
    resultsDiv.append(p2);
    var p3= $("<p>");
    $(p3).addClass("text-primary text-center");
    $(p3).text('Number Not Reached: '+tGame.notReached);
    resultsDiv.append(p3);
  },


  initGame() {
     tGame.right = 0;
     tGame.wrong = 0;
     tGame.notReached = 0;
     tGame.itemResponse = [-1,-1,-1,-1,-1];
     var pDiv = $("p").remove();
    // Display test
     var getItemDiv = $("#itm-div"); 
    //  alert('Just before for-loop');
     for(let i=0; i<tGame.items.length; i++) {
        // alert('Inside For Loop '+ this.items[i]);
        var pID = '<p class="h3 text-primary" id=item-'+i+'>';
        // alert(pID);
        var p = $(pID).text(tGame.items[i]);
        getItemDiv.append(p);
        var choiceArr = tGame.choices[i].split(",");
        for(let j=0; j<choiceArr.length; j++) {
          // var rad = '<label class="radio-inline h3 text-warning"><input type="radio" id="item-'+i+'" value='+j+'>'+choiceArr[j]+'</label>';
          var rad = '<label class="radio-inline btn-group text-warning" data-toggle="buttons"><input type="radio" id="item-'+i+'" value='+j+'>'+choiceArr[j]+'</label>';
          var radioGroup = $(rad);
          getItemDiv.append(radioGroup);

        }
     }
  }
  
}


$(document).ready(function() {

// // $(document).click('click',)  
 $(document).on("click","input:radio", function() {
   console.log($(this).val(), $(this).attr('id'));
    // alert('Hi');
 });

$("button").on("click", function() {
  event.preventDefault();
  // Hide Start Button
   var startButton = $("#startButton").hide();
  // Display Test Items and Item Responses
  tGame.initGame();
  // Set Timer to End Game
  var setTimer = setTimeout(tGame.gameOver,10000);
});


}); // document.ready