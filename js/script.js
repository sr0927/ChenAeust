function clear(){
    item_list[0].classList.remove("previous-item");
    item_list[1].classList.remove("main-item");
    item_list[2].classList.remove("next-item");
}

function carousel(){
    item_list[0].classList.add("previous-item");
    item_list[1].classList.add("main-item");
    item_list[2].classList.add("next-item");
}

function click_previous(){
    clear();
    var item = item_list[2];
    item_list.pop();
    item_list.unshift(item);
    carousel();  
}

function click_next(){
    clear();
    var item = item_list[0];
    item_list.shift();
    item_list.push(item);
    carousel();  
}

function getScrollTop(){
    var bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
  
    } else if (typeof document.compatMode != "undefined"
               && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
  
    } else if (typeof document.body != "undefined") {
      bodyTop = document.body.scrollTop;
    }
    if(bodyTop > 600){
        navbar.style.background = "rgba(20, 19, 19, 1)"
    }else{
        navbar.style.background = "rgba(20, 19, 19, 0.1)"
    }
}


carousel_item = document.querySelectorAll(".carousel-item");
navbar = document.querySelector("nav");

item_list = Array.from(carousel_item);
carousel();

window.addEventListener("scroll",(e)=>{
    getScrollTop()
})
