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

var url = "https://script.google.com/macros/s/AKfycbzlqYeyZUTyt8KxaI2oZ_gnjfrX11XXT5Y0mz3xsjdCliZRPVvMbvuRxZ6vRFZKgkCM/exec"
var listurl = "https://docs.google.com/spreadsheets/d/1Y1kHci7Mi_lIQy4IkP9PX1OvRIkzM1xHPVu-9-Oiswk/edit?usp=sharing"

carousel_item = document.querySelectorAll(".carousel-item");
navbar = document.querySelector("nav");
form_btn = document.querySelector("#form-btn");
item_list = Array.from(carousel_item);
carousel();

window.addEventListener("scroll",(e)=>{
    getScrollTop()
})

form_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = document.querySelector("#form-name").value;
    let email = document.querySelector("#form-email").value;
    let main = document.querySelector("#form-main").value;
    let message = document.querySelector("#form-message").value;
    var date = new Date();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbx8-S3LBMFGeGzF5TFdxL2DNYJ03r_KKvfabPjKapyYnEcZTTs3kPNXFabRormAjRaT/exec",
        data: {
            "date": date,
            "name": name,
            "email": email,
            "main": main,
            "message": message
        },
        success: function(response) {
          if(response == "成功"){
          }
        },
    });
})