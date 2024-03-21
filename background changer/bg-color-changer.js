const buttons = document.querySelectorAll('.buttons')
const body=document.querySelector('body')
buttons.forEach(function (i) {
    i.addEventListener('click',function (item){
        if(item.target.id === 'green'){
            body.style.backgroundColor=item.target.id
        }
        else if(item.target.id === 'red'){
            body.style.backgroundColor=item.target.id
        }
        else if(item.target.id === 'blue'){
            body.style.backgroundColor=item.target.id
        }
        else if(item.target.id === 'black'){
            body.style.backgroundColor=item.target.id
            body.style.color='white'
        }
        else if(item.target.id === 'gold'){
            body.style.backgroundColor=item.target.id
        }

    })
    
});