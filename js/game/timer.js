
let time;


function timer()
{
    time = 60;
  let timerId =   setInterval(() => {

    time--
    timeDiv.innerHTML = `Time: ${time}`
        if(time == 0){
            clearInterval(timerId)
        }    
       
    
        
    }, 1000);

    postUser(userObject)

    return timerId;
}

function stoptimer(timerId)
{
    clearInterval(timerId)
    
}




