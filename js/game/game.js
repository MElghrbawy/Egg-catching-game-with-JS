


//Variables



let score = 0;


let eggsArray = [];




//Dom
let playerNameDiv = document.getElementById("playerName")
let scoreDiv = document.getElementById("score")
let timeDiv = document.getElementById("timer");



//making one egg
function makeEgg() {
    
    let randomLeft = Math.ceil(Math.random() *(1112-60) +60)

    let egg = new Egg(randomLeft);

    eggsArray.push(egg)

    egg.moveDown()

   
   
    let eggId =setInterval(() => {
        
        if(egg.getTop() == basket.offsetTop+15 && egg.getLeft() < (basket.offsetLeft+basket.offsetWidth) && egg.getLeft() > basket.offsetLeft )
        {   
            egg.stopEgg();
            clearInterval(eggId)
            egg.deleteImage();
            
            score++
           
            
            
            
        }else if (egg.getTop() == basket.offsetTop +15  )
        {
            egg.stopEgg()
            clearInterval(eggId)
            egg.setHatshedEggImage();

            setTimeout(() => {
                egg.deleteImage()
            }, 2000);

           ;
            
            
        }
   

         
        
         
     }, 1);

  
   

   
   

    
}




//starting game

let gameEndDiv = document.getElementById("endGame")


function makeEggs() 
{
    gameEndDiv.style.visibility =`hidden`
    eggsArray = [];
    
   
   
   
    playerNameDiv.innerHTML = `Player: ${playerName} `
    

    
   
    let timerStopId = timer();
    setInterval(() => {
        scoreDiv.innerHTML = `Score: ${score}`
    }, 1);
    
   let timerId = setInterval(() => {
        makeEgg();
        if(time == 0){
        
            console.log("score="+score)
            stopEggs(timerId)
            stoptimer(timerStopId)
           eggsArray = eggsArray.map((element) =>{

             element.stopEgg()
             element.deleteImage()

           })

           gameEndDiv.children[0].innerHTML = `Your Score 
           is 
            ${score}`
           gameEndDiv.children[1].innerHTML = `Continue`
           gameEndDiv.children[1].addEventListener("click",makeEggs)
           gameEndDiv.style.visibility = `visible`
            
        }
      
        
        
    }, 1500);

    return timerId
    
}


function stopEggs(timerId) {
    clearInterval(timerId)
}


//document.body.onload(makeEggs())

makeEggs()
