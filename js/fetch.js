let playerName = location.search.split('=')[1].split("+").join(" ")




let userObject = 
{
    name : playerName,
    

}




let postUser = async function (userObject)
{
    try
    {
        let response = await fetch('https://node-monge-iti-project.herokuapp.com/games', {
            method:'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userObject)
        });
        return  await response.json();
    }
    catch(e)
    {
        console.log(e);
    }
}

let userDate;
let viewedDate;
let dateDiv = document.getElementById("date")
window.addEventListener(`DOMContentLoaded`, async function(){

    let userLastLogindate = await getUserLastLoginDate(playerName);
    userDate = new Date(userLastLogindate.date);
    viewedDate = userDate.toLocaleString()
    
    console.log(userDate.toLocaleString());

    dateDiv.innerHTML = `last login: ${viewedDate} `
    
    


});

 let getUserLastLoginDate = async function(userName)
{
    try
    {
        let response = await fetch(`https://node-monge-iti-project.herokuapp.com/games/${userName}`);
        let userData = await response.json();
        return userData;
    }
    catch(e)
    {
        console.log(e);
    }
}





