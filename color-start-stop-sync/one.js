const random = function(){
    const num = '0123456789ABCDEF'
    let hex ='#'
    for (let i = 0; i <6; i++) { 
        hex += num[Math.floor(Math.random()*16)];
    }
    return hex 
}
let intervel;
const startcolor=function(){
    function startcolo(){
        document.body.style.backgroundColor=random()
    }
    if(!intervel){
        intervel= setInterval(startcolo,2000)
    }
    

}

const endcolor=function(){
    clearInterval(intervel)
    intervel=null;
}
document.querySelector('#stop').addEventListener('click',endcolor)
document.querySelector('#start').addEventListener('click',startcolor)