alert("welcome to 20! this is a game where you go against me(the computer) and draw random numbers (1-10) and see who can get closer to 21 without going over")
 
 
var ptotal = 0
var ctotal = 0
 
 
 
do{
 
 
 var cscore = 0
 var pscore = 0
 
 
       do {
 
           var num1 = Math.floor(Math.random() * 10) + 1;
           cscore = cscore + num1
           alert(`computer rolled ${num1} and its new score is ${cscore}`)
          
       } while (cscore < 16)
 
 
 
        if(cscore > 20){
         ptotal + 1;
         alert(`computer went over 21, you win.`);
       }
       else {
         alert("its your turn!")
 
         do {  
             var num2 = Math.floor(Math.random() * 10) + 1;
             pscore = pscore + num2;
             var pnum = prompt(`you rolled ${num2} your new score is ${pscore}. do you want to roll again?`);
              
              }while ((pnum != "no") && (pscore < 20))
 
 
         if (pscore > 20){
           alert(`you got over 20, you lose`);
           ctotal++;
         }
 
         else if ((pscore < cscore) && (pscore <= 20) && (cscore <= 20) ){
           alert("hahaha you lose bum ez win")
 
           ctotal++;
          } else if ((cscore < pscore) && (cscore <= 20) && (pscore <= 20) ){
           alert("u win")
 
           ptotal++
           }
  
 
 
       }
      
 
     
 
       var q = prompt(`You have a score of ${ptotal}. The computer has a score of ${ctotal}. do you want to play again?`)
 
}while (q != "no")