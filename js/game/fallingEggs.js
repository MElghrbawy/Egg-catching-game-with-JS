 class Egg {

    #top
    #left
    #eggBody
    #eggId

    constructor(left){

       this.#left = left 
       this.#top= 50

       this.#eggBody = document.createElement('img')
        this.#eggBody.setAttribute('style',`
      
        
        position: absolute;
        height: 7%;
        width: 3%;
        left: ${this.#left}px ;
        top : ${this.#top}px ;



        
        `
        
        
        )
        this.#eggBody.src = `/Images/egg.png`
        document.body.append(this.#eggBody)

            
    }

    getTop (){

        return this.#top
    }

    getLeft (){

        return this.#left
    }

    setHatshedEggImage(){
        this.#eggBody.src = `/Images/Daco.png`
    }

    deleteImage(){
       this.#eggBody.style.visibility = `hidden`
    }

    moveDown(){
        
       
     this.#eggId =  setInterval(() => {
        this.#top++
        this.#eggBody.style.top = `${this.#top}px`

        
      
     }, 10);


    }

    stopEgg()
    {
        clearInterval(this.#eggId)
    }

 
}



