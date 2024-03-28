const xml = new XMLHttpRequest()
const mainlink = 'https://type.fit/api/quotes'
let arr=[]
let empty = []
let random=0
let count = 10 
xml.open('GET',mainlink)
xml.onreadystatechange = function(){
    if(xml.readyState===4){
       arr = JSON.parse(this.responseText);  
       for (let index = 0; index < arr.length; index++) {
        empty.push(arr[index].text)
       }
        
        document.querySelector('#getaquote').addEventListener('click',function(){
        random = Math.floor(Math.random()*empty.length)
         document.querySelector('#sample').innerHTML = `"${empty[random]}"`
        })  
       
           
    }
}
xml.send()