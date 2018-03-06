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
            "'Coke','Leite Brown','Bourbon','Petroni'",
            "'Pink','Umm...','Azul','ABCBs'",
            "'O Leaozinho','Benke','O Rato - Ratimbum','sopa do nenem'",
            "23,45,136,187"],

  scoreKey:[1,2,4,1,3],

  itemResponse: [0,0,0,0,0],

  scoreTest() {
     for(let i=0; i<items.length; i++) {
       if (scoreKey[i]===itemResponse[i]) 
          {right++;}
       else 
          {wrong++;}
     };
     notReached = items.length-right-wrong;
  },


  gameOver() {
     scoreTest();

  },

  initGame() {
     this.right = 0;
     this.wrong = 0;
     this.notReached = 0;
     this.itemResponse = [0,0,0,0,0];
  }
  
}

tGame.initGame();  
