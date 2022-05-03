const dom = document.querySelector(".Title");
const text = '陳奕安 CHEN YI-AN'.split('')
let index = 0 
function writing(index){
    if (index < text.length){
        if(index==3){
            dom.innerHTML += "<br>"
        }
        if(index<0){
            
        }else[
            dom.innerHTML += text[index]
        ]
        
        setTimeout(writing.bind(this),300,++index )
    }else{
        dom.innerHTML = ""
        index = -2
        writing(index)
        
    }
    
}
writing(index)