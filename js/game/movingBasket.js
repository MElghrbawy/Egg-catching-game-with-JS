let gameContainer = document.getElementById('gameContainer')
let basket =document.getElementById('basket')
let moveBy = 4

let stopId;
let both = 0;

basket.setAttribute('style',`
position: absolute;
left: 600px;
top: 550px;
width: 20%;
height: 20%;

`)


function moveLeft() {

    if(parseInt(basket.style.left) > 60)
    basket.style.left = parseInt(basket.style.left) - moveBy + 'px' 
   
    
}

function moveRight() {

    if(parseInt(basket.style.left) < 1112)
    basket.style.left = parseInt(basket.style.left) + moveBy + 'px'
}


window.addEventListener('keydown',function (event) {


    if(both == 0){
        both++
        {
            switch(event.key){
                case 'ArrowLeft':
                 
                   
                stopId = setInterval(moveLeft,1)
                break;
                
                case 'ArrowRight':
                 
                stopId = setInterval(moveRight,1)
                break;    
        
                
        
            }
            
        }

        

    }
    
    
  
    
})


window.addEventListener('keyup',function () {
        clearInterval(stopId)
        both = 0
})